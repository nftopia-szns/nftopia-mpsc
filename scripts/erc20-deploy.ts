import { ethers } from 'hardhat'

async function main() {
    const TestErc20 = await ethers.getContractFactory("TestErc20")

    // Start deployment, returning a promise that resolves to a contract object
    const testErc20 = await TestErc20.deploy()
    console.log("Contract deployed to address:", testErc20.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
