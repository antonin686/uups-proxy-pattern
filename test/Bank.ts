import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("Bank", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployBankFixture() {
    const name = "BS23 Bank";
    const symbol = "BS23BANK";
    const [owner, otherAccount] = await ethers.getSigners();

    const Bank = await ethers.getContractFactory("Bank");
    const bank = await upgrades.deployProxy(Bank, [name, symbol], {
      kind: "uups",
    });

    return { bank, owner, otherAccount, name, symbol };
  }

  describe("Deployment", function () {
    it("Should be deployed correctly", async function () {
      const { bank, name } = await loadFixture(deployBankFixture);

      expect(await bank.name()).to.equal(name);
    });
  });
});
