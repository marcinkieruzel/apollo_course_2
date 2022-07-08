import {
    gql
} from "@apollo/client";

export const ADD_QUOTES = gql`
    mutation AddQuote($input: QuoteInput) {
        addQuote(input: $input) {
            author
            id
            quote
        }
}
  `;