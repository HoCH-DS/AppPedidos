const url = 'http://10.92.198.29:3002/api/apppedidos/';


export const ApiService ={

    get(endpoint){

        return fetch(`${url}${endpoint}`)
        .then(Response => Response.json())

    },

    post(endpoint, data){

        return fetch(`${url}${endpoint}`, {

            method: 'POST',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(data)

        })

        .then(Response => Response.json())
    }

}