/* eslint import/no-extraneous-dependencies: 0 */
// @expo/vector-icons package comes by default with expo
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

import { accent, darkTextColor, lightTextColor } from "../../config";

const StyledEventCard = styled(View)`
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
  name: string;
  address: string;
  startTime: string;
  endTime: string;
}

const EventCard: React.FC<EventCardProps> = ({
  name,
  address,
  startTime,
  endTime,
}): JSX.Element => {
  return (
    <StyledEventCard>
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
