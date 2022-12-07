// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Shape.sol";

contract ShapeV1 is Shape {
    function version() pure public returns (string memory) {
        return 'v1!';
    }
}