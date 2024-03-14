import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
    71: {
       EventTicket: {
        address: "0xff1787fF7706e19A24ce8b29A22d5cB8A290BF01",
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "eventId",
                  "type": "uint256"
                }
              ],
              "name": "buyTicket",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "date",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "ticketPrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "totalTickets",
                  "type": "uint256"
                }
              ],
              "name": "createEvent",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "events",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "date",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "ticketPrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "totalTickets",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "ticketsSold",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getEventCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "eventId",
                  "type": "uint256"
                }
              ],
              "name": "getEventDetails",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "date",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "ticketPrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "totalTickets",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "ticketsSold",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "eventId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                }
              ],
              "name": "getUserTicketCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address payable",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "ticketsOwned",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "eventId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "attendee",
                  "type": "address"
                }
              ],
              "name": "verifyTicket",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "withdrawFunds",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
       } 
    }
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
