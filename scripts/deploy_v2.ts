import { ethers, upgrades } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const boxV2 = await upgrades.upgradeProxy(`${process.env.BOX_PROXY_ADDRESS}`, BoxV2);
  
  console.log("Contract address:", boxV2.address);
  console.log("Implementation address:", await upgrades.erc1967.getImplementationAddress(boxV2.address));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
