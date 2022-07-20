import { ethers } from 'hardhat'

async function main() {
  const TestErc721 = await ethers.getContractFactory("TestErc721")

  // Start deployment, returning a promise that resolves to a contract object
  const testNFT = await TestErc721.deploy()
  console.log("Contract deployed to address:", testNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
