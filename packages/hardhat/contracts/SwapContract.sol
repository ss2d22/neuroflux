// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SwapContract {
    IERC20 public token1; // ETH
    IERC20 public token2; // USDT

    constructor(IERC20 _token1, IERC20 _token2) {
        token1 = _token1;
        token2 = _token2;
    }

    function swap(uint256 token1Amount, uint256 token2Amount) public {
    require(token1.balanceOf(msg.sender) >= token1Amount, "Not enough Token1");
    require(token2.balanceOf(address(this)) >= token2Amount, "Not enough Token2 in contract");

    require(token1.transferFrom(msg.sender, address(this), token1Amount), "Token1 transfer failed");
    require(token2.transfer(msg.sender, token2Amount), "Token2 transfer failed");
}

    function swapToken1ForToken2(uint256 token1Amount, uint256 token2Amount) public {
        require(token1.balanceOf(msg.sender) >= token1Amount, "Not enough Token1");
        require(token2.balanceOf(address(this)) >= token2Amount, "Not enough Token2 in contract");

        require(token1.transferFrom(msg.sender, address(this), token1Amount), "Token1 transfer failed");
        require(token2.transfer(msg.sender, token2Amount), "Token2 transfer failed");
    }

    function swapToken2ForToken1(uint256 token2Amount, uint256 token1Amount) public {
        require(token2.balanceOf(msg.sender) >= token2Amount, "Not enough Token2");
        require(token1.balanceOf(address(this)) >= token1Amount, "Not enough Token1 in contract");

        require(token2.transferFrom(msg.sender, address(this), token2Amount), "Token2 transfer failed");
        require(token1.transfer(msg.sender, token1Amount), "Token1 transfer failed");
    }
}