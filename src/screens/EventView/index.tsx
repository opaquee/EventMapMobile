import React from "react";
import { Text } from "react-native";

import { EventCard } from "../../components/EventCard";
import { Layout } from "../../components/Layout";

// TODO: Add click to go to full event details
const EventView: React.FC = (): JSX.Element => {
  const dummyData = [
    {
      id: "asC2e",
      name: "Multirotor Software Meeting",
      address: "207 Computer Science Building",
      startTime: "17:00",
      endTime: "19:00",
    },
    {
      id: "pWva23",
      name: "S&T SUB Concert",
      address: "Havener Lawn",
      startTime: "19:00",
      endTime: "22:00",
    },
    {
      id: "fpa5vds1",
      name: "Rolla Photo Club",
      address: "Havener Lawn",
      startTime: "19:00",
      endTime: "22:00",
    },
    {
      id: "NBsA24",
      name: "S&T PRO Day",
      address: "Havener Lawn",
      startTime: "19:00",
      endTime: "22:00",
    },
    {
      id: "pqRz23",
      name: "Chill n' Grill",
      address: "Havener Lawn",
      startTime: "19:00",
      endTime: "22:00",
    },
  ];

  return (
    <Layout>
      <Text>Event Screen</Text>
      {dummyData.map((event) => (
        <EventCard
          name={event.name}
          address={event.address}
          startTime={event.startTime}
          endTime={event.endTime}
          key={event.id}
        />
      ))}
    </Layout>
  );
};

export { EventView };
