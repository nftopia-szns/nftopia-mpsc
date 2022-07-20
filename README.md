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