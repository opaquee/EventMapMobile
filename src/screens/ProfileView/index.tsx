import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button, Text } from "react-native";

import { Layout } from "../../components/Layout";
import { SignUpScreen } from "../SignUpScreen";

const ProfileStack = createStackNavigator();

const ProfileViewDefault: React.FC = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <Layout>
      <Text>Profile Screen</Text>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate("ProfileLogin")}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate("ProfileSignUp")}
      />
    </Layout>
  );
};

const ProfileView: React.FC = (): JSX.Element => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileViewDefault}
      />
      <ProfileStack.Screen name="ProfileLogin" component={SignUpScreen} />
      <ProfileStack.Screen name="ProfileSignUp" component={SignUpScreen} />
    </ProfileStack.Navigator>
  );
};

export { ProfileView };
