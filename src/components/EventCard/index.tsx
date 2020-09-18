/* eslint import/no-extraneous-dependencies: 0 */
// @expo/vector-icons package comes by default with expo
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DatePickerAndroid, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

import { accent, darkTextColor, lightTextColor } from "../../config";

const StyledEventCard = styled(TouchableOpacity)`
  width: 90%;
  margin: 8px;
`;

const EventHeader = styled(View)`
  background: ${accent};
  padding: 16px;
`;

const EventName = styled(Text)`
  color: ${lightTextColor};
  font-size: 20px;
  font-weight: bold;
`;

const EventDesc = styled(Text)`
  color: ${lightTextColor};
  font-size: 16px;
`;

const EventTimeSection = styled(View)`
  width: 100%;
  padding: 8px;
  background: ${darkTextColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const EventTime = styled(Text)`
  color: ${lightTextColor};
  font-size: 24px;
  margin: 0 16px;
`;

interface EventCardProps {
  id: string;
  name: string;
  address: string;
  startTime: Date;
  endTime: DatePickerAndroid;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  name,
  address,
  startTime,
  endTime,
}): JSX.Element => {
  const navigation = useNavigation();

  const navigateToEventDetails = (): void => {
    navigation.navigate(id);
  };

  return (
    <StyledEventCard onPress={navigateToEventDetails}>
      <EventHeader>
        <EventName>{name}</EventName>
        <EventDesc>{address}</EventDesc>
      </EventHeader>
      <EventTimeSection>
        <EventTime>{startTime}</EventTime>
        <Entypo name="arrow-long-right" size={24} color={lightTextColor} />
        <EventTime>{endTime}</EventTime>
      </EventTimeSection>
    </StyledEventCard>
  );
};

export { EventCard };
