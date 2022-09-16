const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.



function caixaAlta (objetoCaixaAlta){

    objetoCaixaAlta.nome = objeto.nome.toUpperCase()
    objetoCaixaAlta.profissao = objeto.profissao.toUpperCase()
    objetoCaixaAlta.username = objeto.username.toUpperCase()
    objetoCaixaAlta.senha = objeto.senha.toUpperCase()

    return objetoCaixaAlta
}
console.log(caixaAlta (objeto))

// function caixaAlta (objetoCaixaAlta){
//     for(let i in objetoCaixaAlta){
//         objetoCaixaAlta[i]= objetoCaixaAlta[i].toUpperCase()
//     }
//     return objetoCaixaAlta
// }

// console.log(caixaAlta(objeto))

// 2. A segunda deve retornar os valores do objeto como texto corrido.
function textoCorrido (objetoTextoCorrido){
    return `A profissão de ${objetoTextoCorrido.nome} é ${objetoTextoCorrido.profissao}. Seu Username é ${objetoTextoCorrido.username} e a senha é ${objetoTextoCorrido.senha}`
}

console.log(textoCorrido(objeto))

// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

function imprime (novoObjeto, callback){
    console.log(callback(novoObjeto))
}

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.

imprime(objeto, caixaAlta)

// Repita o processo para a funcão 2

imprime(objeto, textoCorrido)