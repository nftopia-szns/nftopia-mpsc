import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { ethers } from "hardhat";
import { expect } from "chai";
import { ERC721NFTMarket__factory, ERC721NFTSingleBundle__factory, TestErc20__factory, TestErc721__factory, TestWETH, TestWETH__factory } from "../typechain-types"
// import { HardhatEthersHelpers } from "@nomiclabs/hardhat-ethers/types";

describe("ERC721NFTMarket", function () {
    async function testFixture() {
        // assign all necessary accounts
        const signers = await ethers.getSigners();
        const owner = signers[0].address
        const buyer = signers[1].address
        const feeRecipient = signers[2].address

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
            feeRecipient,
            100, // 1%
        )
        const bundle = await NFTBundle.deploy(nft.address, "1", "!");

        // mint tokens
        await nft.mint(1000)
        // reconnect for buyer making txs
        erc20.connect(buyer)
        await erc20.mint(2000)
        await erc20.approve(nftMarket.address, 2000);
        erc202.connect(buyer)
        await erc202.mint(2000)
        await erc202.approve(nftMarket.address, 2000);

        await nft.setApprovalForAll(nftMarket.address, true)

        await nft.mint(2);
        await nft.setApprovalForAll(bundle.address, true);
        await bundle.createBundle([2], "");
        await nftMarket.registerFingerPrintProxy(
            bundle.address,
            bundle.address
        );

        await bundle.setApprovalForAll(nftMarket.address, true);

        return {
            nft,
            erc20,
            erc202,
            weth,
            nftMarket,
            bundle,
        }
    }

    describe("Create ask", function () {
        it("Should fail when price = 0", async () => {
            const { nft, erc20, nftMarket } = await testFixture()
            await expect(nftMarket.createAsk(nft.address, 1000, erc20.address, 0)).to.be.revertedWith(
                "Ask: Price must be greater than zero"
            )
        })
    })
})
