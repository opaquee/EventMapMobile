import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

// TODO: Change route from Map screen to a signin screen
type RootStackParamList = {
  AuthScreen: undefined;
  Map: undefined;
};

type AuthScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "AuthScreen"
>;

type Props = {
  navigation: AuthScreenNavigationProps;
  children: React.ReactNode;
};

const SecureRoute: React.FC<Props> = ({
  children,
  navigation,
}): JSX.Element => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    const getAuth = async () => {
      const AuthResult = true;

      // TODO: Replace with fetch request
      setTimeout(() => {
        console.log("Test");
      }, 1000);

      if (AuthResult) {
        setAuthLoaded(true);
      } else {
        navigation.navigate("Map");
      }
    };

    getAuth();
  }, []);

  return <View>{authLoaded ? children : <Text>Loading</Text>}</View>;
};

export { SecureRoute };
