import React, { useEffect, useState } from 'react';
import { useScaffoldContractRead } from '../hooks/scaffold-eth';
import { ethers } from 'ethers';

interface EventDetail {
    name: string;
    description: string;
    date: string; 
    ticketPrice: string; 
    totalTickets: string;
    ticketsSold: string;
  }

const EventList: React.FC = () => {
  const [events, setEvents] = useState<EventDetail[]>([]);

  useEffect(() => {
    const fetchEventCount = async () => {
      const eventCountResult = await useScaffoldContractRead({
        contractName: 'EventTicket',
        functionName: 'getEventCount',
      });

      const eventCount = Number(eventCountResult.data);

      for (let i = 0; i < eventCount; i++) {
        const eventDetailsResult = await useScaffoldContractRead({
            contractName: 'EventTicket',
            functionName: 'getEventDetails',
            args: [BigInt(i)],
        });

        if (eventDetailsResult.data) {
          const [name, description, date, ticketPrice, totalTickets, ticketsSold] = eventDetailsResult.data as unknown as [string, string, bigint, bigint, bigint, bigint];

          setEvents(prevEvents => [
            ...prevEvents,
            {
              name,
              description,
              date: new Date(Number(date) * 1000).toISOString(),
              ticketPrice: ethers.utils.formatEther(ticketPrice.toString()),
              totalTickets: totalTickets.toString(),
              ticketsSold: ticketsSold.toString(),
            },
          ]);
        }
      }
    };

    fetchEventCount();
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      {events.map((event, index) => (
        <div key={index}>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <p>Date: {new Date(event.date).toLocaleString()}</p>
          <p>Ticket Price: {event.ticketPrice} ETH</p>
          <p>Total Tickets: {event.totalTickets}</p>
          <p>Tickets Sold: {event.ticketsSold}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
