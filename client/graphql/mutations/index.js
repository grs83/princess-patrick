import { gql } from 'apollo-boost';

const addAuthorMutation = gql`
  mutation($name: String, $age: String) {
    addAuthor(name: $name, age: $age) {
      id
      name
      age
    }
  }
`

const updateAuthorMutation = gql`
  mutation($id: ID!, $name: String, $age: String) {
    updateAuthor(id: $id, name: $name, age: $age) {
      id
      name
      age
    }
  }
`

const deleteAuthorMutation = gql`
  mutation($id: ID!){
    deleteAuthor(id: $id){
      id
      name
      age
    }
  }
`

const addBookMutation = gql`
  mutation($name: String, $genre: String, $authorId: ID) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
      authorId
    }
  }
`

const updateBookMutation = gql`
  mutation($id: ID!, $name: String, $genre: String, $authorId: ID) {
    updateBook(id: $id, name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
      authorId
    }
  }
`

const deleteBookMutation = gql`
  mutation($id: ID!){
    deleteBook(id: $id){
      id
      name
      genre
      authorId
    }
  }
`

export {
  addAuthorMutation,
  updateAuthorMutation,
  deleteAuthorMutation,
  addBookMutation,
  updateBookMutation,
  deleteBookMutation,
};