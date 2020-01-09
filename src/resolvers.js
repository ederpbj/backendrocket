const users = [
    { id: 1, name: 'Eder', email: 'ederpbj@gmail.com' },
    { id: 2, name: 'Eduardo', email: 'edu@gmail.com' },
]

//Baseado no schema.graphql
//Faz as consultas
module.exports = {
    Query: {
        users: () => users,
        user: () => user[0]
    },

    Mutation: {
        //createUser: () => {}
        createUser: () => user[0]
    }
}