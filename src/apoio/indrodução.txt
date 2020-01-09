#API REST

GET /users
POST /users
PUT /users/:id
DELETE /users/:id

-------------

#GRAPHQL

query -> Buscando informação
mutation -> Alteração de informação
subscription -> ouvir informação em tempo real

schema -> guarda a tipagem das rotas

POST /graphql

{
	query todosUsuarios{
		users()
	}

	query todosPedidos{
		orders()
	}
}

//Exemplo consulta, com paginação e filtros:
{
	query users {
		users({per_page: 20, page: 2, filter: {nome: {"starts_with": "Eder" }}}){
			id
			nome
			groups {
				id
				title
			}
		}
	}
}