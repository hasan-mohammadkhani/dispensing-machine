// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract DispensingMachine {

    // state variables
    address public owner;
    mapping (address => uint) public productBalances;
    // set the owner as th address that deployed the contract
    // set the initial dispensing machine balance to 200
    constructor() {
        owner = msg.sender;
        productBalances[address(this)] = 200;
    }

    function getDispensingMachineBalance() public view returns (uint) {
        return productBalances[address(this)];
    }

    // Let the owner restock the vending machine
    function restock(uint amount) public {
        require(msg.sender == owner, "Only the owner can restock the dispensing machine.");
        productBalances[address(this)] += amount;
    }

    // Purchase products from the vending machine
    function purchase(uint amount) public payable {
        require(msg.value >= amount * 5 ether, "You must pay at least 5 ETH per product");
        require(productBalances[address(this)] >= amount, "Not enough products in stock to complete this purchase");
        productBalances[address(this)] -= amount;
        productBalances[msg.sender] += amount;
    }
}