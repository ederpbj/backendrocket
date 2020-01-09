//Servidor
const { GraphQLServer } = require ('graphql-yoga')
const path =  require ('path')

const resolvers = require('./resolvers')

//Outra forma
//import { GraphQLServer } from 'graphql-yoga'
//import path from 'path'

const server = new GraphQLServer({
    //definindo type
    typeDefs: path.resolve(__dirname, 'schema.graphql'),

    //constrollers, objeto resolver
    resolvers
});

server.start();