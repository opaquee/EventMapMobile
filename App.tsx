/* eslint import/no-extraneous-dependencies: 0 */
// @expo/vector-icons package comes by default with expo
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { accent } from "./src/config";
import { EventView } from "./src/screens/EventView";
import { MapViewScreen } from "./src/screens/MapView";
import { ProfileView } from "./src/screens/ProfileView";

const Tab = createBottomTabNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Map") {
              iconName = "map";
            } else if (route.name === "Events") {
              iconName = "format-list-bulleted";
            } else if (route.name === "Profile") {
              iconName = "person";
            } else {
              iconName = "map";
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: accent,
          inactiveTintColor: "black",
        }}
      >
        <Tab.Screen name="Map" component={MapViewScreen} />
        <Tab.Screen name="Events" component={EventView} />
        <Tab.Screen name="Profile" component={ProfileView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
