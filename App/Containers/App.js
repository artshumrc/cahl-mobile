import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import firebase from 'firebase';

import RootContainer from './RootContainer';

const networkInterface = createNetworkInterface({
  uri: 'http://api.cahl.orphe.us/graphql',
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}; // Create the header object if needed.
    }
    req.options.headers.authorization = firebase.auth().currentUser ? firebase.auth().currentUser.getIdToken() : null;
    next();
  }
}]);

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
