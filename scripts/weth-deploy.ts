import { ethers } from 'hardhat'

async function main() {
    const TestWETH = await ethers.getContractFactory("TestWETH")

    // Start deployment, returning a promise that resolves to a contract object
    const testWETH = await TestWETH.deploy()
    console.log("Contract deployed to address:", testWETH.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
