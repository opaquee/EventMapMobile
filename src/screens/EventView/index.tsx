import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";

import { EventCard } from "../../components/EventCard";
import { Layout } from "../../components/Layout";
import { EventScreen } from "../EventScreen";

const EventStack = createStackNavigator();

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

const EventList: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Text>Event Screen</Text>
      {dummyData.map((event) => (
        <EventCard
          id={event.id}
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

// TODO: Optimize passing props for dynamically generated screens
// for better performance
const EventView: React.FC = (): JSX.Element => {
  return (
    <EventStack.Navigator>
      <EventStack.Screen name="EventScreen" component={EventList} />
      {dummyData.map((event) => (
        <EventStack.Screen name={event.id} key={event.id}>
          {() => <EventScreen id={event.id} name={event.name} />}
        </EventStack.Screen>
      ))}
    </EventStack.Navigator>
  );
};

export { EventView };
