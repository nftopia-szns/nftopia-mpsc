import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";
import { assert, expect } from "chai";
import {
    ERC721NFTMarket,
    ERC721NFTMarket__factory,
    ERC721NFTSingleBundle,
    ERC721NFTSingleBundle__factory,
    TestErc20,
    TestErc20__factory,
    TestErc721,
    TestErc721__factory,
    TestWETH,
    TestWETH__factory
} from "../typechain-types"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("ERC721NFTMarket", function () {
    async function deployContracts() {
        // assign all necessary accounts
        const signers = await ethers.getSigners();
        const owner = signers[0]
        const buyer = signers[1]
        const feeRecipient = signers[2]

        // contract factories
        const ERC721 = await ethers.getContractFactory("TestErc721") as TestErc721__factory
        const ERC20 = await ethers.getContractFactory("TestErc20") as TestErc20__factory
        const WETH = await ethers.getContractFactory("TestWETH") as TestWETH__factory
        const ERC721NFTMarket = await ethers.getContractFactory("ERC721NFTMarket") as ERC721NFTMarket__factory
        const NFTBundle = await ethers.getContractFactory("ERC721NFTSingleBundle") as ERC721NFTSingleBundle__factory

        // contract deployments
        const nft = await ERC721.deploy()
        const erc20 = await ERC20.deploy()
        const erc202 = await ERC20.deploy()
        const weth = await WETH.deploy()
        const nftMarket = await ERC721NFTMarket.deploy(
            weth.address,
            feeRecipient.address,
            100, // 1%
        )
        const bundle = await NFTBundle.deploy(
            nft.address,
            "1",
            "!");

        // wait for deployment txs are mined
        await nft.deployed()
        await erc20.deployed()
        await erc202.deployed()
        await weth.deployed()
        await nftMarket.deployed()
        await bundle.deployed()

        await bundle.setApprovalForAll(nftMarket.address, true);

        return {
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        }
    }

    async function prepareForTest({
        owner,
        buyer,
        feeRecipient,
        nft,
        erc20,
        erc202,
        weth,
        nftMarket,
        bundle,
    }: {
        owner: SignerWithAddress,
        buyer: SignerWithAddress,
        feeRecipient: SignerWithAddress,
        nft: TestErc721,
        erc20: TestErc20,
        erc202: TestErc20,
        weth: TestWETH,
        nftMarket: ERC721NFTMarket,
        bundle: ERC721NFTSingleBundle,
    }) {
        // mint tokens
        await nft.mint(1000)
        // reconnect for buyer making txs
        await erc20.connect(buyer).mint(2000)
        await erc20.connect(buyer).approve(nftMarket.address, 2000);
        await erc202.connect(buyer).mint(2000)
        await erc202.connect(buyer).approve(nftMarket.address, 2000);

        await nft.setApprovalForAll(nftMarket.address, true)

        await nft.mint(2);
        await nft.setApprovalForAll(bundle.address, true);
        await bundle.createBundle([2], "");
        await nftMarket.registerFingerPrintProxy(
            bundle.address,
            bundle.address
        );
    }

    it("create ask", async () => {
        const {
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        } = await loadFixture(deployContracts)

        await prepareForTest({
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        })

        await expect(
            nftMarket.createAsk(
                nft.address,
                1000,
                erc20.address,
                0
            )
        ).to.be.revertedWith(
            "Ask: Price must be greater than zero"
        )

        await expect(
            nftMarket.connect(buyer).createAsk(
                nft.address,
                1000,
                erc20.address,
                10
            )
        ).to.be.revertedWith(
            "ERC721: transfer from incorrect owner"
        );

        await nftMarket.createAsk(
            nft.address,
            1000,
            erc20.address,
            1000
        );

        await expect(
            nftMarket.connect(buyer).cancelAsk(
                nft.address,
                1000
            )
        ).to.be.revertedWith(
            "Ask: only seller"
        );

        await nftMarket.cancelAsk(
            nft.address,
            1000
        );

        assert.equal(await nft.ownerOf(1000), owner.address);
    })

    it("buy", async () => {
        const {
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        } = await loadFixture(deployContracts)

        await prepareForTest({
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        })

        const paddedZeros = ethers.utils.hexZeroPad("0x", 32)

        await expect(
            nftMarket.connect(buyer).buy(
                nft.address,
                1000,
                erc202.address,
                1000,
                paddedZeros)
        ).to.be.revertedWith(
            "token is not sell"
        );

        await nftMarket.createAsk(
            nft.address,
            1000,
            erc20.address,
            1000
        );

        await expect(
            nftMarket.connect(buyer).buy(
                nft.address,
                1000,
                erc202.address,
                1000,
                paddedZeros)
        ).to.be.revertedWith(
            "Buy: Incorrect quote token"
        );

        await expect(
            nftMarket.connect(buyer).buy(
                nft.address,
                1000,
                erc20.address,
                500,
                paddedZeros)
        ).to.be.revertedWith(
            "Buy: Incorrect price"
        );

        await expect(
            nftMarket.connect(buyer).buy(
                nft.address,
                1000,
                erc20.address,
                1001,
                paddedZeros)
        ).to.be.revertedWith(
            "Buy: Incorrect price"
        );

        await nftMarket.connect(buyer).buy(
            nft.address,
            1000,
            erc20.address,
            1000,
            paddedZeros);

        assert.equal(await nft.ownerOf(1000), buyer.address);
        assert.equal((await erc20.balanceOf(owner.address)).toNumber(), 990);
    });


    it("buy using eth", async () => {
        const {
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        } = await loadFixture(deployContracts)

        await prepareForTest({
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        })

        const paddedZeros = ethers.utils.hexZeroPad("0x", 32)

        await expect(
            nftMarket.buyUsingEth(
                nft.address,
                1000,
                paddedZeros)
        ).to.be.revertedWith(
            "token is not sell"
        );

        await nftMarket.createAsk(
            nft.address,
            1000,
            weth.address,
            1
        );

        await nftMarket.connect(buyer).buyUsingEth(
            nft.address,
            1000,
            paddedZeros,
            { value: 1 }
        );

        assert.equal(await nft.ownerOf(1000), buyer.address);
        assert.equal(await (await weth.balanceOf(owner.address)).toNumber(), 1);
    });


    it("bid", async () => {
        const {
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        } = await loadFixture(deployContracts)

        await prepareForTest({
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        })

        const paddedZeros = ethers.utils.hexZeroPad("0x", 32)

        await nftMarket.connect(buyer).createBid(
            nft.address,
            1000,
            erc20.address,
            1000,
            paddedZeros,
        );

        await expect(
            nftMarket.connect(buyer).createBid(
                nft.address,
                1000,
                erc20.address,
                0,
                paddedZeros,
            ),
        ).to.be.revertedWith(
            "Bid: Price must be granter than zero"
        );

        await expect(
            nftMarket.acceptBid(
                nft.address,
                1000,
                buyer.address,
                erc20.address,
                2
            ),
        ).to.be.revertedWith(
            "AcceptBid: invalid price"
        );

        await expect(
            nftMarket.connect(buyer).acceptBid(
                nft.address,
                1000,
                buyer.address,
                erc20.address,
                1000,
            ),
        ).to.be.revertedWith(
            "ERC721: transfer from incorrect owner"
        );

        await expect(
            nftMarket.acceptBid(
                nft.address,
                1000,
                buyer.address,
                erc202.address,
                1000
            ),
        ).to.be.revertedWith(
            "AcceptBid: invalid quoteToken"
        );

        await nftMarket.acceptBid(
            nft.address,
            1000,
            buyer.address,
            erc20.address,
            1000
        );
        assert.equal(await nft.ownerOf(1000), buyer.address);
        assert.equal(await (await erc20.balanceOf(owner.address)).toNumber(), 990);
    });

    it("bid using eth", async () => {
        const {
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        } = await loadFixture(deployContracts)

        await prepareForTest({
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        })

        const paddedZeros = ethers.utils.hexZeroPad("0x", 32)

        await nftMarket.connect(buyer).createBidUsingEth(
            nft.address,
            1000,
            paddedZeros,
            {
                value: 1,
            }
        );

        await nftMarket.acceptBid(
            nft.address,
            1000,
            buyer.address,
            weth.address,
            1
        );
        assert.equal(await nft.ownerOf(1000), buyer.address);
        assert.equal(await (await weth.balanceOf(owner.address)).toNumber(), 1);
    });


    it("cancel bid", async () => {
        const {
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        } = await loadFixture(deployContracts)

        await prepareForTest({
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        })

        const paddedZeros = ethers.utils.hexZeroPad("0x", 32)

        await nftMarket.connect(buyer).createBid(
            nft.address,
            1000,
            erc20.address,
            1000,
            paddedZeros,
        );

        await nftMarket.connect(buyer).cancelBid(
            nft.address,
            1000
        );

        await expect(
            nftMarket.connect(buyer).cancelBid(
                nft.address,
                1000),
        ).to.be.revertedWith(
            "Bid: bid not found"
        );

        assert.equal(await (await erc20.balanceOf(buyer.address)).toNumber(), 2000);
    });

    it("update bid", async () => {
        const {
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        } = await loadFixture(deployContracts)

        await prepareForTest({
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        })

        const paddedZeros = ethers.utils.hexZeroPad("0x", 32)

        await nftMarket.connect(buyer).createBid(
            nft.address,
            1000,
            erc20.address,
            500,
            paddedZeros,
        );

        await nftMarket.connect(buyer).createBid(
            nft.address,
            1000,
            erc20.address,
            600,
            paddedZeros,
        );

        assert.equal(await (await erc20.balanceOf(buyer.address)).toNumber(), 1400);
    });

    it("setProtocolFeePercent", async () => {
        const { nftMarket } = await loadFixture(deployContracts)

        await expect(
            nftMarket.setProtocolFeePercent(501), "max_fee");
    });


    it("accept bid", async () => {
        const {
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        } = await loadFixture(deployContracts)

        await prepareForTest({
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        })

        const paddedZeros = ethers.utils.hexZeroPad("0x", 32)

        await nftMarket.createAsk(
            nft.address,
            1000,
            erc20.address,
            100
        );

        await nftMarket.connect(buyer).createBid(
            nft.address,
            1000,
            erc20.address,
            100,
            paddedZeros);

        await expect(
            nftMarket.connect(buyer).acceptBid(
                nft.address,
                1000,
                buyer.address,
                erc20.address,
                100),
        ).to.be.revertedWith(
            "ERC721: transfer from incorrect owner"
        );

        await nftMarket.acceptBid(
            nft.address,
            1000,
            buyer.address,
            erc20.address,
            100
        );
        assert.equal(await (await erc20.balanceOf(owner.address)).toNumber(), 99);
        assert.equal(await (await erc20.balanceOf(feeRecipient.address)).toNumber(), 1);
        assert.equal(await (await erc20.balanceOf(buyer.address)).toNumber(), 1900);
        assert.equal(await nft.ownerOf(1000), buyer.address);
    });

    it("Bid: verify fingerPrint  valid", async () => {
        const {
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        } = await loadFixture(deployContracts)

        await prepareForTest({
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        })

        await nftMarket.connect(buyer).createBid(
            bundle.address,
            1,
            erc20.address,
            500,
            await bundle.getFingerprint(1),
        );

        await await nftMarket.connect(owner).acceptBid(
            bundle.address,
            1,
            buyer.address,
            erc20.address,
            500
        );
    });

    it("Bid: verify fingerPrint invalid", async () => {
        const {
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        } = await loadFixture(deployContracts)

        await prepareForTest({
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        })

        const paddedZeros = ethers.utils.hexZeroPad("0x", 32)

        await nftMarket.connect(buyer).createBid(
            bundle.address,
            1,
            erc20.address,
            500,
            paddedZeros,
        );

        await expect(
            nftMarket.acceptBid(
                bundle.address,
                1,
                buyer.address,
                erc20.address,
                500),
        ).to.be.revertedWith(
            "Erc721Fingerprint: invalid fingerprint"
        );
    });

    it("Buy: verify fingerPrint  valid", async () => {
        const {
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        } = await loadFixture(deployContracts)

        await prepareForTest({
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        })

        await nftMarket.createAsk(
            bundle.address,
            1,
            erc20.address,
            1
        );

        await nftMarket.connect(buyer).buy(
            bundle.address,
            1,
            erc20.address,
            1,
            await bundle.getFingerprint(1),
        );
    });

    it("Buy: verify fingerPrint invalid", async () => {
        const {
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        } = await loadFixture(deployContracts)

        await prepareForTest({
            owner,
            buyer,
            feeRecipient,
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        })

        const paddedZeros = ethers.utils.hexZeroPad("0x", 32)

        await nftMarket.createAsk(
            bundle.address,
            1,
            erc20.address,
            1
        );

        await expect(
            nftMarket.connect(buyer).buy(
                bundle.address,
                1,
                erc20.address,
                1,
                paddedZeros),
        ).to.be.revertedWith(
            "Erc721Fingerprint: invalid fingerprint"
        );
    });
})
