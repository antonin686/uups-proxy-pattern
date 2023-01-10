// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Box is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    string public name;
    string public symbol;
    uint public value;

    function initialize(
        string memory _name,
        string memory _symbol,
        uint _value
    ) public initializer {
        name = _name;
        symbol = _symbol;
        value = _value;
        __Ownable_init();
    }

    function _authorizeUpgrade(
        address newImplmentation
    ) internal override onlyOwner {}

    function version() pure public virtual returns (string memory) {
        return 'v1!';
    }
}
