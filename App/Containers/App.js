import React from 'react';
import { ApolloClient, ApolloProvider } from 'react-apollo';

import RootContainer from './RootContainer';

const client = new ApolloClient();

const App = () => (
  <ApolloProvider client={client}>
    <RootContainer />
  </ApolloProvider>
);

export default App;
