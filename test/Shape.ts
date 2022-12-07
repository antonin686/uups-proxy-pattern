import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("Shape", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployBankFixture() {
    const name = "BS23 Bank";
    const symbol = "BS23BANK";
    const [owner, otherAccount] = await ethers.getSigners();

    const Shape = await ethers.getContractFactory("Shape");
    const ShapeV1 = await ethers.getContractFactory("ShapeV1");
    const shape = await upgrades.deployProxy(Shape, [name, symbol], {
      kind: "uups",
    });
    const shapeV1 = await upgrades.upgradeProxy(shape, ShapeV1);

    return { shape, shapeV1, owner, otherAccount, name, symbol };
  }

  describe("Deployment", function () {
    it("Should be deployed correctly", async function () {
      const { shape, name } = await loadFixture(deployBankFixture);

      expect(await shape.name()).to.equal(name);
    });
    it("Should be upgraded to v1", async function () {
      const { shapeV1, name } = await loadFixture(deployBankFixture);

      expect(await shapeV1.version()).to.equal("v1!");
    });
  });
});
