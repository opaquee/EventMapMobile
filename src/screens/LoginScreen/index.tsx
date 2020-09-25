import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const LoginScreen: React.FC = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log("Login");
  };

  return (
    <View>
      <Text>Username</Text>
      <TextInput
        value={username}
        onChangeText={(value) => setUsername(value)}
      />
      <Text>Passwod</Text>
      <TextInput
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <Button onPress={login} title="Login" accessibilityLabel="Login button" />
    </View>
  );
};

export { LoginScreen };
