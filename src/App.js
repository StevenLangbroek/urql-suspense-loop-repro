import logo from "./logo.svg";
import "./App.css";
import { Suspense } from "react";
import { Query } from "urql";
import gql from "graphql-tag";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Suspense fallback={<h2>Loading jobs...</h2>}>
          <Query
            query={gql`
              {
                job(input: { companySlug: "blabla" }) {
                  id
                  title
                }
              }
            `}
          >
            {(result) => {
              return (
                <pre>
                  <code>{JSON.stringify(result.data, null, 2)}</code>
                </pre>
              );
            }}
          </Query>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
