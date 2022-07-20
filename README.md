# nftopia marketplace smart contracts

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
npx hardhat run --network <your-network> scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix

# contract verification
npx hardhat verify --network mumbai DEPLOYED_CONTRACT_ADDRESS OPTIONAL_CONTRUCTOR_ARGS
```

## sample contracts on Polygon Mumbai testnet
- TestERC721: [`0x2FAAC886960981CD3811329b02816f5A6a9b5d87`](https://mumbai.polygonscan.com/address/0x2FAAC886960981CD3811329b02816f5A6a9b5d87)
- TestERC20: [`0xa57E4B76F7821E3b0851E5800c2d5cF690A452f7`](https://mumbai.polygonscan.com/address/0xa57E4B76F7821E3b0851E5800c2d5cF690A452f7)
- TestWETH: [`0x33CCcd1029D9D90E365Bccf5806a0a0b792cEb61`](https://mumbai.polygonscan.com/address/0x33CCcd1029D9D90E365Bccf5806a0a0b792cEb61)
- ERC721NFTMarket: [`0x2126D335beD68B8083f2D0Aa99cCA08DF487CAa2`](https://mumbai.polygonscan.com/address/0x2126D335beD68B8083f2D0Aa99cCA08DF487CAa2)

Constants:
- 10^18 = 1000000000000000000
- padded zeros fingerprint = 0x0000000000000000000000000000000000000000000000000000000000000000

Addresses and test transactions:
- transaction list item: https://mumbai.polygonscan.com/tx/0x2d3c69776eb4a4c876821f2c27bd4cd2d3d6b8f21bb951e1db4922cea1ee6eff
- transaction buy item: https://mumbai.polygonscan.com/tx/0xe77e6982b452dcf0d4f6091546e29b5d199bcfbfa97294f50f472f56613d5d57
- transaction create bid: https://mumbai.polygonscan.com/tx/0xb45cb3d1ead549d8608a1c1b637942791f4fc3ae47dd30bf53183836abf52f22
- transaction accept bid: https://mumbai.polygonscan.com/tx/0xccbb747633e5b8b4b3606c5f0072ae00c7cf1207551f34140cb05fe1550f9f35