const { ethers } = require("hardhat");

async function main() {
  const NAME = "Message";
  const SYMBOL = "msg";
  const contractFactory = await ethers.getContractFactory("NFT");
  const contract = await contractFactory.deploy(NAME, SYMBOL);
  await contract.deployed();

  console.log(`Deployed to address: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
