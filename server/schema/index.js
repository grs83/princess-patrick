module.exports = `
	type Author {
		id: ID
		everyRelatedBook: [Book]
		name: String
		age: String
	}

	type Book {
		id: ID
		name: String
		genre: String
		authorId: ID
		relatedAuthor: Author
	}

	type Query {
		everyAuthor: [Author]
		getAuthorById(id: ID!): Author
		everyBook: [Book]
		getBookById(id: ID!): Book
	}

	type Mutation {
		addAuthor(id: ID, name: String, age: String): Author
		updateAuthor(id: ID!, name: String, age: String): Author
		deleteAuthor(id: ID!): Int
		addBook(id: ID, name: String, genre: String, authorId: ID): Book
		updateBook(id: ID!, name: String, genre: String, authorId: ID): Book
		deleteBook(id: ID!): Int
	}
`