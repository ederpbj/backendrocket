//importa schema mongodb
const User = require('./User')

/**Testando usuário 
 const users = [
     { id: 1, name: 'Eder', email: 'ederpbj@gmail.com' },
     { id: 2, name: 'Eduardo', email: 'edu@gmail.com' },
    ]
 */

//Baseado no schema.graphql
//Faz as consultas
module.exports = {
    Query: {
        users: (_, { page, per_page, filters }) => User.find(),
        user: (_, {id}) => User.findById(id),
    },

    Mutation: {
        //createUser: () => {}
        createUser: (_, {name, email}) => User.create({name, email}),
    }
}