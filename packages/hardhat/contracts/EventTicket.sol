// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract EventTicket {
    struct Event {
        string name;
        string description;
        uint256 date;
        uint256 ticketPrice;
        uint256 totalTickets;
        uint256 ticketsSold;
    }

    Event[] public events;
    mapping(uint256 => mapping(address => uint256)) public ticketsOwned;
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action.");
        _;
    }

    function createEvent(string memory name, string memory description, uint256 date, uint256 ticketPrice, uint256 totalTickets) public onlyOwner {
        events.push(Event(name, description, date, ticketPrice, totalTickets, 0));
    }

    function buyTicket(uint256 eventId) public payable {
        require(eventId < events.length, "Event does not exist.");
        Event storage selectedEvent = events[eventId]; // Correct use of 'selectedEvent'
        require(block.timestamp < selectedEvent.date, "Event has already occurred.");
        require(msg.value == selectedEvent.ticketPrice, "Incorrect ticket price.");
        require(selectedEvent.ticketsSold < selectedEvent.totalTickets, "All tickets have been sold.");

        selectedEvent.ticketsSold += 1;
        ticketsOwned[eventId][msg.sender] += 1;
    }

    function verifyTicket(uint256 eventId, address attendee) public view returns (bool) {
        return ticketsOwned[eventId][attendee] > 0;
    }

    function withdrawFunds() public onlyOwner {
        owner.transfer(address(this).balance);
    }

    function getEventCount() public view returns (uint256) {
        return events.length;
    }

    function getEventDetails(uint256 eventId) public view returns (string memory name, string memory description, uint256 date, uint256 ticketPrice, uint256 totalTickets, uint256 ticketsSold) {
        require(eventId < events.length, "Event does not exist.");
        Event storage selectedEvent = events[eventId]; // Corrected variable name to 'selectedEvent'
        return (selectedEvent.name, selectedEvent.description, selectedEvent.date, selectedEvent.ticketPrice, selectedEvent.totalTickets, selectedEvent.ticketsSold);
    }

    function getUserTicketCount(uint256 eventId, address user) public view returns (uint256) {
        require(eventId < events.length, "Event does not exist.");
        return ticketsOwned[eventId][user];
    }
}
