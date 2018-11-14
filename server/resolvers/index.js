const joinMonster = require('join-monster').default;
const getConnection = require('../db/postgresql_pool');

module.exports = {
	Author: {
	},

	Book: {
	},

	Query: {
		everyAuthor: (parent, args, ctx, info) => {
            return joinMonster(info, args, sql => {
                getConnection((err, con, release) => {
                    con.query(sql, (err, result) => {
                        if (err) throw err;
                        release();
                        return result;
                    })
                })
            })
        },
		getAuthorById: (parent, args, ctx, info) => {
            return joinMonster(info, args, sql => {
                getConnection((err, con, release) => {
                    con.query(sql, (err, result) => {
                        if (err) throw err;
                        release();
                        return result;
                    })
                })
            })
        },
		everyBook: (parent, args, ctx, info) => {
            return joinMonster(info, args, sql => {
                getConnection((err, con, release) => {
                    con.query(sql, (err, result) => {
                        if (err) throw err;
                        release();
                        return result;
                    })
                })
            })
        },
		getBookById: (parent, args, ctx, info) => {
            return joinMonster(info, args, sql => {
                getConnection((err, con, release) => {
                    con.query(sql, (err, result) => {
                        if (err) throw err;
                        release();
                        return result;
                    })
                })
            })
        }
	},

	Mutation: {
		addAuthor: (parent, args) => {
            let columns = '';
            let values = '';
            
            let firstLoop = true;
            for (const prop in args) {
                if (prop !== 'id') {
                    if (!firstLoop) {
                        columns += ', ';
                        values += ', ';
                    }
                    firstLoop = false;
                    columns += `"${prop}"`;
                    if (typeof args[prop] === 'string') {
                        values += `'${args[prop]}'`;
                    } else {
                        values += args[prop];
                    }
                }
            }

            const sql = `INSERT INTO "Author" (${columns}) VALUES (${values});`;
            console.log('SQL -->', sql)
            getConnection((err, con, release) => {
                con.query(sql, (err, result) => {
                    if (err) throw err;
                    console.log('Result -->', result)
                    release();
                    return result;
                })
            })
        },
        updateAuthor: (parent, args) => {
            let updateValues = '';
            
            let firstLoop = true;
            for (const prop in args) {
                if (prop !== 'id') {
                    if (!firstLoop) {
                        updateValues += ', ';
                    }
                    firstLoop = false;
                    updateValues += `${prop} = '${args[prop]}'`
                }
            }
            
            const sql = `UPDATE Author SET ${updateValues} WHERE id = ${args.id};`;
            getConnection((err, con, release) => {
                con.query(sql, (err, result) => {
                    if (err) throw err;
                    release();
                    return result;
                })
            })
        },
        deleteAuthor: (parent, { id }) => {
            const sql = `DELETE FROM Author WHERE id = ${id};`;
            getConnection((err, con, release) => {
                con.query(sql, (err, result) => {
                    if (err) throw err;
                    release();
                    return result;
                })
            })
        },
		addBook: (parent, args) => {
            let columns = '';
            let values = '';
            
            let firstLoop = true;
            for (const prop in args) {
                if (prop !== 'id') {
                    if (!firstLoop) {
                        columns += ', ';
                        values += ', ';
                    }
                    firstLoop = false;
                    columns += prop;
                    values += args[prop];
                }
            }
            
            const sql = `INSERT INTO Book (${columns}) VALUES (${values});`;
            getConnection((err, con, release) => {
                con.query(sql, (err, result) => {
                    if (err) throw err;
                    release();
                    return result;
                })
            })
        },
        updateBook: (parent, args) => {
            let updateValues = '';
            
            let firstLoop = true;
            for (const prop in args) {
                if (prop !== 'id') {
                    if (!firstLoop) {
                        updateValues += ', ';
                    }
                    firstLoop = false;
                    updateValues += `${prop} = '${args[prop]}'`
                }
            }
            
            const sql = `UPDATE Book SET ${updateValues} WHERE id = ${args.id};`;
            getConnection((err, con, release) => {
                con.query(sql, (err, result) => {
                    if (err) throw err;
                    release();
                    return result;
                })
            })
        },
        deleteBook: (parent, { id }) => {
            const sql = `DELETE FROM Book WHERE id = ${id};`;
            getConnection((err, con, release) => {
                con.query(sql, (err, result) => {
                    if (err) throw err;
                    release();
                    return result;
                })
            })
        }
	}
};