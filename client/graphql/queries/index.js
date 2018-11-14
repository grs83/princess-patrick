import { gql } from 'apollo-boost';

const queryEveryAuthor = gql`
  {
    everyAuthor {
      id
      name
      age
    }
  }
`

const queryAuthorById = gql`
  query($id: ID!) {
    Author(id: $id) {
      id
      name
      age
    }
  }
`

const queryEveryBook = gql`
  {
    everyBook {
      id
      name
      genre
      authorId
    }
  }
`

const queryBookById = gql`
  query($id: ID!) {
    Book(id: $id) {
      id
      name
      genre
      authorId
    }
  }
`

export { queryEveryAuthor, queryAuthorById , queryEveryBook, queryBookById };