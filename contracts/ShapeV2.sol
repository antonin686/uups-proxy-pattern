// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Shape.sol";

contract ShapeV2 is Shape {
    function version() pure public virtual override returns (string memory) {
        return 'v2!';
    }
}