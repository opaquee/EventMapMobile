import React, { useState } from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";

import { Layout } from "../../components/Layout";

const StyledMap = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  flex: 1;
`;

// TODO: Use the user's location to set region
// TODO: Mathematically calculate latDelta and lngDelta given any coordinate
const MapViewScreen: React.FC = (): JSX.Element => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const exampleMarkers = [
    {
      title: "San Francisco",
      description: "You can find Silicon valley here!",
      coords: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      title: "Rolla",
      description: "MST is a great school!",
      coords: {
        latitude: 37.9537,
        longitude: -91.7756,
      },
    },
  ];

  // FIXME: Unique keys
  return (
    <Layout>
      <StyledMap region={region}>
        {exampleMarkers.map((element) => (
          <Marker
            coordinate={element.coords}
            title={element.title}
            description={element.description}
            key={element.title}
          />
        ))}
      </StyledMap>
    </Layout>
  );
};

export { MapViewScreen };
