import { ethers } from 'hardhat'

async function main() {
    if (
        !process.env.NFT_MARKET_WETH ||
        !process.env.NFT_MARKET_FEE_RECIPIENT ||
        !process.env.NFT_MARKET_FEE_PERCENT
    ) {
        throw new Error("Not enough args for NFT Marketplace contructor!")
    }

    const ERC721NFTMarket = await ethers.getContractFactory("ERC721NFTMarket")

    // Start deployment, returning a promise that resolves to a contract object
    const nftMarket = await ERC721NFTMarket.deploy(
        process.env.NFT_MARKET_WETH,
        process.env.NFT_MARKET_FEE_RECIPIENT,
        process.env.NFT_MARKET_FEE_PERCENT,
    )
    console.log("Contract deployed to address:", nftMarket.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
