import React from "react";
import { Text, View } from "react-native";

interface EventScreenProps {
  id: string;
  name: string;
}

const EventScreen: React.FC<EventScreenProps> = ({ id, name }): JSX.Element => {
  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
    </View>
  );
};

export { EventScreen };
