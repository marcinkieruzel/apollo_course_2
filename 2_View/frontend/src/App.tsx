import React, { ChangeEvent, FormEvent, useState } from "react";
import logo from "./logo.svg";
import Quote from "./components/Quote";
import "./App.css";
import { ALL_QUOTES } from "./queries/ALL_QUTOES";
import { ADD_QUOTES } from "./queries/ADD_QUOTE";

import { useMutation, useQuery } from "@apollo/client";

type SingleQuote = {
  author: string;
  id: number;
  quote: string;
};

function App() {
  const { loading: loading, error: error, data: data } = useQuery(ALL_QUOTES);
  const [
    addQuote,
    { loading: load, error: mutationError, data: mutationData },
  ] = useMutation(ADD_QUOTES, {
    refetchQueries: [{ query: ALL_QUOTES }],
  });

  const [form, setForm] = useState({
    author: "",
    quote: "",
  });

  if (loading || load) return <p>Loading...</p>;
  if (error || mutationError) return <p>Error :(</p>;

  console.log("data", data, mutationData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addQuote({ variables: { input: form } });
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label>Autor</label>
          <input
            onChange={(e) => {
              setForm({ ...form, author: e.currentTarget.value });
            }}
            value={form.author}
            type="text"
          />
        </div>
        <div>
          <label>Cytat</label>
          <input
            onChange={(e) => {
              setForm({ ...form, quote: e.currentTarget.value });
            }}
            value={form.quote}
            type="text"
          />
        </div>
        <button>Dodaj</button>
      </form>

      <ul>
        {data?.getQuotes?.map((x: SingleQuote, i: number) => {
          return <Quote key={i} data={x} />;
        })}
      </ul>
    </div>
  );
}

export default App;
