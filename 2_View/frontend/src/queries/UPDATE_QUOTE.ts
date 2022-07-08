import {
    gql
} from "@apollo/client";

export const UPDATE_QUOTE = gql`
mutation UpdateQuote($id: ID, $input: QuoteInput) {
  updateQuote(id: $id, input: $input) {
    author
    id
    quote
  }
}`;