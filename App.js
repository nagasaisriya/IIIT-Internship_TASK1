// import logo from './logo.svg';
// import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  //useQuery,
  //gql
} from "@apollo/client";

import KeySpecificationsList from './components/KeySpecificationsList';
import AddKeySpecifications from "./components/AddKeySpecifications";
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>key Specifications  list</h1>
        <KeySpecificationsList />
        <AddKeySpecifications />
      </div>
    </ApolloProvider>
  );
}

export default App;
/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
