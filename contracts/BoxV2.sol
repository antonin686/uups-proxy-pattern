// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Box.sol";

contract BoxV2 is Box {
    function increment() external {
        value += 1;
    }

    function version() public pure virtual override returns (string memory) {
        return "v2!";
    }
}
