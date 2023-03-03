const { ethers } = require("hardhat");

async function main() {
  const contractFactory = await ethers.getContractFactory("Op3n");
  const contract = await contractFactory.deploy();
  await contract.deployed();

  console.log(`Deployed to address: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
