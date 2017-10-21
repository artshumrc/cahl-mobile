import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootContainer from './RootContainer';

const networkInterface = createNetworkInterface({
  uri: 'http://api.cahl.orphe.us/graphql',
});
const client = new ApolloClient({
  networkInterface,
});

const store = createStore(
  combineReducers({
    apollo: client.reducer(),
  }),
  {},
  composeWithDevTools(
    applyMiddleware(client.middleware()),
  ),
);

const App = () => (
  <ApolloProvider store={store} client={client}>
    <RootContainer />
  </ApolloProvider>
);

export default App;
