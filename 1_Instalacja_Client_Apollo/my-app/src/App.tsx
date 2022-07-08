import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloCache } from "@apollo/client";

type Props = {
  test: string;
};

const App: React.FC<Props> = ({ test }) => {
  const [title, setTitle] = React.useState(test)


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => {
          setTitle("Hello everyone!!!")
        }}>Change title</button>
        <h1>{title}</h1>
      </header>
    </div>
  );
};




export default App;
