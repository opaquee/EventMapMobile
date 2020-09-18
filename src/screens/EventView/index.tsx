import { gql, useQuery } from "@apollo/client";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";

import { EventCard } from "../../components/EventCard";
import { Layout } from "../../components/Layout";
import { EventScreen } from "../EventScreen";

const EventStack = createStackNavigator();

const GET_EVENTS = gql`
  query getAllNearbyEvents {
    Event {
      id
      name
      description
      addressLine1
      startDate
      endDate
    }
  }
`;

interface Event {
  id: string;
  name: string;
  description: string;
  addressLine1: string;
  startDate: Date;
  endDate: Date;
}

const EventList: React.FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! {error.message}</Text>;

  // FIXME: Convert date to string
  return (
    <Layout>
      <Text>Event Screen</Text>
      {data.map((event: Event) => (
        <EventCard
          id={event.id}
          name={event.name}
          address={event.addressLine1}
          startTime={event.startDate}
          endTime={event.endDate}
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
