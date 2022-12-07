import { ethers, upgrades } from "hardhat";

async function main() {
  const Shape = await ethers.getContractFactory("Shape");
  const shape = await upgrades.deployProxy(
    Shape,
    ["BS23 Shapes", "BS23SHAPE"],
    { kind: "uups" }
  );

  await shape.deployed();

  console.log("Shape deployed to:", shape.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
