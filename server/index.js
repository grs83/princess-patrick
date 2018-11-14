require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;
const ENV = process.env.ENV || 'dev';
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const joinMonsterAdapt = require('join-monster-graphql-tools-adapter');
const joinMonsterMetadata = require('./resolvers/join-monster-metadata');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  playground: ENV === 'dev'
});

joinMonsterAdapt(schema, joinMonsterMetadata);

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, './public')));

const server = new ApolloServer({ schema });

server.applyMiddleware({ app });

app.listen(PORT, () => console.log(`Listening on ${PORT}!`));
