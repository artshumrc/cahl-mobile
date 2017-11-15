import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import firebase from 'firebase';
import Config from 'react-native-config';

import RootContainer from './RootContainer';

const networkInterface = createNetworkInterface({
  uri: Config.PROD_API_URL,
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}; // Create the header object if needed.
    }
    if (firebase.auth().currentUser) {
      firebase.auth().currentUser.getIdToken()
        .then((idToken) => { req.options.headers.authorization = idToken; })
        .catch(error => console.log(error));
    } else {
      req.options.headers.authorization = null;
    }
    next();
  },
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
