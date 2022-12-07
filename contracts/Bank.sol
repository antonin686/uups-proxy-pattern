// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Bank is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    string public name;
    string public symbol;

    function initialize(
        string memory _name,
        string memory _symbol
    ) public initializer {
        name = _name;
        symbol = _symbol;
        __Ownable_init();
    }

    function _authorizeUpgrade(
        address newImplmentation
    ) internal override onlyOwner {}
}
