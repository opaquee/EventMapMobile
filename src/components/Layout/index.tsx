import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";

const AppWrapper = styled(ScrollView)`
  flex: 1;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppWrapper
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </AppWrapper>
  );
};

export { Layout };
