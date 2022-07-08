import { useMutation } from "@apollo/client";
import React, { ChangeEvent } from "react";
import { ALL_QUOTES } from "../queries/ALL_QUTOES";
import { UPDATE_QUOTE } from "../queries/UPDATE_QUOTE";

type Props = {
  data: {
    id: number;
    author: string;
    quote: string;
  };
};

const Quote: React.FC<Props> = ({ data }): JSX.Element => {
  const [form, setForm] = React.useState(data);
  const [updateQuote, { data: d, loading: loading, error: error }] =
    useMutation(UPDATE_QUOTE, {
      refetchQueries: [{ query: ALL_QUOTES }],
    });

  const handleInputChange = (e: ChangeEvent<any>, field: string) => {
    console.log("e", e.currentTarget.textContent);
    setForm({ ...form, [field]: e.currentTarget.textContent });
  };

  const handleChangeQuote = () => {
    console.log(data.id, form);

    updateQuote({
      variables: {
        id: data.id,
        input: { author: form.author, quote: form.quote },
      },
    });
  };

  return (
    <li>
      <h2
        onInput={(e: React.ChangeEvent<HTMLHeadingElement>) =>
          handleInputChange(e, "author")
        }
        contentEditable={true}
      >
        {form.author}
      </h2>
      <p
        onInput={(e: React.ChangeEvent<HTMLParagraphElement>) =>
          handleInputChange(e, "quote")
        }
        contentEditable={true}
      >
        {form.quote}
      </p>
      <button
        onClick={() => {
          handleChangeQuote();
        }}
      >
        Update
      </button>

      <hr />
    </li>
  );
};

export default Quote;
