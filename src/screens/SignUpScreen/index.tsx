import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

// TODO: Set up form validation
// TODO: Connect to API
// TODO: Needs styling
const SignUpScreen: React.FC = (): JSX.Element => {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [email, setEmail] = useState("email@example.com");
  const [username, setUsername] = useState("Username");
  const [password, setPassword] = useState("");

  const signUp = () => {
    console.log("Sigup");
  };

  return (
    <View>
      <Text>First Name</Text>
      <TextInput
        value={firstName}
        onChangeText={(value) => setFirstName(value)}
      />
      <Text>Last Name</Text>
      <TextInput
        value={lastName}
        onChangeText={(value) => setLastName(value)}
      />
      <Text>Email</Text>
      <TextInput value={email} onChangeText={(value) => setEmail(value)} />
      <Text>Username</Text>
      <TextInput
        value={username}
        onChangeText={(value) => setUsername(value)}
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <Button
        onPress={signUp}
        title="Sign Up"
        accessibilityLabel="Signup Button"
      />
    </View>
  );
};

export { SignUpScreen };
