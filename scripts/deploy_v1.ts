import { ethers, upgrades } from "hardhat";

async function main() {
  const name = "BS23 Box";
  const symbol = "BS23BOX";
  const initialValue = 0;
  const Box = await ethers.getContractFactory("Box");
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const box = await upgrades.deployProxy(
    Box,
    [name, symbol, initialValue],
    { kind: "uups", initializer: "initialize" }
  );

  await box.deployed();
  console.log("Contract address:", box.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
