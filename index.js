/*
0 OBTER UM USUARIO
1 OBTER O NUMERO DE TELEFONE DE UM USUARIO PELO ID 
2 OBTER O ENDEREÇO DE UM USUARIO PELO ID 
*/

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Joao Pedro',
            dataNascimento: new Date()

        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {

    setTimeout(() => {
        return callback(null, {
            telefone: '254453453',
            ddd: 11
        })

    }, 2000);


}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "rua teste",
            numero: 12
        }
        )

    }, 2000);
}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)


}


obterUsuario(function resolverUsuario(error, usuario) {
    //null | "" | 0 == false
    if (error) {
        console.error('deu ruim em usuario', error)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('deu ruim em telefone', error)
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('deu ruim em telefone', error)
                return;
            }

            console.log(
                ` Nome: ${usuario.nome},
             Telefone: ${usuario.dataNascimento},
              Nome: ${usuario.id},            
            `)

        })


    })
    // const telefone = obterTelefone(usuario.id)

    // console.log('telefone', telefone)
})
