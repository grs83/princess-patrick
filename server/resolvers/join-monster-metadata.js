module.exports = {
	Query: {
		getAuthorByid: {
            where: (table, empty, args) => `${table}.id = ${args.id}`
        },
		getBookByid: {
            where: (table, empty, args) => `${table}.id = ${args.id}`
        },
	},
	Author: {
        sqlTable: '"Author"',
        uniqueKey: 'id',
        fields: {
			everyRelatedBook: {
                sqlJoin: (bookTable, authorTable) => `${bookTable}.authorId = ${authorTable}.id`
            },
		}
	},
	Book: {
        sqlTable: '"Book"',
        uniqueKey: 'id',
        fields: {
			relatedAuthor: {
                sqlJoin: (authorTable, bookTable) => `${authorTable}.id = ${bookTable}.authorId`
            },
		}
	},
}