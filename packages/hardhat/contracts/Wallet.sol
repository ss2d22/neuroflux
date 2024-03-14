// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Wallet {
    mapping(address => uint) balances;
    mapping(address => uint) stakedBalances;
    mapping(address => uint) stakingTimestamps;

    event Staked(address indexed user, uint amount, uint timestamp);
    event Unstaked(address indexed user, uint amount, uint timestamp);

    function deposit() public payable {
        require(msg.value > 0, "Deposit value must be greater than 0");
        balances[msg.sender] += msg.value;
    }

    function getBalance() public view returns (uint) {
        return balances[msg.sender];
    }

    function stake(uint _amount) public {
        require(_amount <= balances[msg.sender], "Insufficient balance to stake");
        balances[msg.sender] -= _amount;
        stakedBalances[msg.sender] += _amount;
        stakingTimestamps[msg.sender] = block.timestamp;

        emit Staked(msg.sender, _amount, block.timestamp);
    }

    function unstake() public {
        require(stakedBalances[msg.sender] > 0, "No staked balance to withdraw");
        require(block.timestamp >= stakingTimestamps[msg.sender] + 1 days, "Staking period not yet completed");

        uint amountToUnstake = stakedBalances[msg.sender];
        balances[msg.sender] += amountToUnstake;
        stakedBalances[msg.sender] = 0;

        emit Unstaked(msg.sender, amountToUnstake, block.timestamp);
    }

    function getStakedBalance() public view returns (uint) {
        return stakedBalances[msg.sender];
    }
}
 