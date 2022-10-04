/*
0 OBTER UM USUARIO
1 OBTER O NUMERO DE TELEFONE DE UM USUARIO PELO ID 
2 OBTER O ENDEREÇO DE UM USUARIO PELO ID 
*/

function obterUsuario(){
    setTimeout(function(){
        return{
            id: 1,
            nome: 'Joao Pedro',
            dataNascimento: new Date()

        }
    }, 1000)
}

function obterTelefone(idUsuario){

setTimeout(() => {
    return{
        telefone: '254453453',
        ddd: 11
    } 
    
}, 2000);

 
}

function obterEndereco(idUsuario){}


const usuario = obterUsuario()
// const telefone = obterTelefone(usuario.id)

console.log('usuario', usuario)
// console.log('telefone', telefone)
