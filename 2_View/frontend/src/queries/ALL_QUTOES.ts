import {
    gql
} from "@apollo/client";

export const ALL_QUOTES = gql`
    query ExampleQuery {
        getQuotes {
            author
            id
            quote
        }
}
  `;