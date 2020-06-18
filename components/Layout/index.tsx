import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const AppWrapper = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <AppWrapper>{children}</AppWrapper>;
};

export { Layout };
