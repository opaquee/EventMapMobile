import React, { Children } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

import { Navbar } from '../Navbar';

const AppWrapper = styled(View)`
  border: solid red;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppWrapper>
      {children}
      <Navbar />
    </AppWrapper>
  );
};

export { Layout };
