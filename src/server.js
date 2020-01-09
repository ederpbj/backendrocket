//Servidor
const { GraphQLServer } = require ('graphql-yoga')
const path =  require ('path')
const mongoose = require('mongoose')

const resolvers = require('./resolvers')

//Outra forma
//import { GraphQLServer } from 'graphql-yoga'
//import path from 'path'

//conectar ao mongo
mongoose.connect('mongodb://localhost:27017/graphqlnode',{
    useNewUrlParser: true
})

const server = new GraphQLServer({
    //definindo type
    typeDefs: path.resolve(__dirname, 'schema.graphql'),

    //constrollers, objeto resolver
    resolvers
});

server.start();