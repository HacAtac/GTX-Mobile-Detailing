import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import AddService from "./screens/AddService";
import UpdateService from "./screens/UpdateService";
import NoMatch from "./components/NoMatch";
import Booking from "./screens/Booking";

//httpLink is causing all kinds of issues.
const httpLink = createHttpLink({
  uri: "https://gtxdetailing.herokuapp.com/graphql",
});

//Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: "http://localhost:3001/graphql",
// });
// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// Construct request middleware that will attach the JWT to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

//how would I make the the request middleware attach only to the signup and login routes?

const client = new ApolloClient({
  // Set up our client to execute queries and mutations using the endpoint
  // Set up our client to execute the `authLink` middleware before each request
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/newservice" component={AddService} />
              <Route
                exact
                path="/updateservice/:id"
                component={UpdateService}
              />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/booking" component={Booking} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
