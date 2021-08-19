import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Routes from "./Routes";
import { reducer, initialState } from "./store";

export const AuthContext = React.createContext();

const client = new ApolloClient({
  uri: 'https://sg-ants-server.herokuapp.com',
  cache: new InMemoryCache()
});

const theme = createTheme();

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Router>
            <Routes />
          </Router>
        </ApolloProvider>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export default App;
