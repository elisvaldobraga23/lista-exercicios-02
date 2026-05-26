// ====================================================================================================================
//                                                     EXERCÍCIOS 02
// ====================================================================================================================

// Ex01: Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um
//       laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto
//       a resposta for "sim".

const PROMPT = require("prompt-sync")()

// let continuar = "sim"

// while(continuar === "sim"){

//     let numeroTabuada = parseInt(PROMPT("Digite um número para ver sua tabuada: "))
    
//     while(isNaN(numeroTabuada) || numeroTabuada <= 0){

//         console.log('=====================================================')  
//         console.log("Valor inválido, Digite um número de 1 a 10")
//         console.log('----------------------------------------------------')  
//         numeroTabuada = parseInt(PROMPT("Digite um número para ver sua tabuada: "))

//         if(!isNaN(numeroTabuada) && numeroTabuada >= 0){
//             continue
//         }
//     }

//     if(!isNaN(numeroTabuada) && numeroTabuada >= 0 ){
        
//         console.log('----------------------------------------------------')  
//         console.log("================================")
//         console.log("          Tabuada de " + numeroTabuada)
//         console.log("================================")
        
//         for(let n = 1; n <= 10; n++){
    //             console.log(`${numeroTabuada} X ${n} = ${numeroTabuada * n}`)
//         }

//         console.log("================================")

//         console.log("-----------------------------------------------------------")
//         continuar = PROMPT('Deseja ver outra tabuada? Digite "sim" para continuar: ').toLowerCase()
//         console.log("-----------------------------------------------------------")
    
//         if(continuar !== "sim"){
//             console.log("================================")
//             console.log("          Fim da Tabuada")
//             console.log("================================")
//         }
//     }

// }
// |------------------------------------------------------------------------------------------------------------------|

// Ex 02:Leia um número inteiro positivo e, usando um laço while, calcule e exiba quantos
// dígitos ele possui. Trate o caso do número zero (que possui 1 dígito).
// console.log("===============================")
// console.log("    Quantidade de Dígitos")
// console.log("===============================")

// let numero = parseInt(PROMPT("Digite um número inteiro: "))
// console.log("-------------------------------")
// let numeroVerificacao = numero
// let quantidadeDigitos = 0

// if(numero === 0){
//     quantidadeDigitos = 1
//     console.log("O numero 0 possui 1 digito")
//     console.log("-------------------------------")

// } else if(numero > 0 && Number.isInteger(numero)){

//     while(numeroVerificacao > 0){
//         numeroVerificacao = Math.floor(numeroVerificacao / 10)
//         quantidadeDigitos++
//     }

//     console.log(`O número ${numero}, possui ${quantidadeDigitos} ${(quantidadeDigitos === 1) ? "dígito" : "Dígitos"}`)
//     console.log("-------------------------------")


// } else{
//     console.log("Digite apenas números inteiros positivos!")
// }

// |------------------------------------------------------------------------------------------------------------------|

// Ex03: Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os
// usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13...


// console.log("========================================")
// console.log("        Sequência de FIBONACCI")
// console.log("========================================")

// let numero = parseInt(PROMPT("Quantos termos você deseja mostrar: "))

// console.log("----------------------------------------")

// let ehValido = true

// if(isNaN(numero) || numero <= 0){
//     ehValido = false
// }

// while(!ehValido){
//     console.log("Número inválido")
//     numero = parseInt(PROMPT("Quantos termos você deseja mostrar: "))
//     console.log("----------------------------------------")
    
//     if(!isNaN(numero) && numero > 0){
//         ehValido = true
//     }
// }

// let termo1 = 1
// let termo2 = 1

// let sequenciaFibonacci = ""

// if(numero === 1){
//     sequenciaFibonacci = "1 - FIM"
// } else if(numero === 2){
//     sequenciaFibonacci = "1 - 1 - FIM"

// } else{
    
//     sequenciaFibonacci = "1 - 1 - "

//     let contador = 3
    
//     while(contador <= numero){
    //         let termo3 = termo1 + termo2
    
    //         sequenciaFibonacci += `${termo3} - `
    
//         termo1 = termo2
//         termo2 = termo3

//         contador++
//     }

//     sequenciaFibonacci += "FIM"
// }


// console.log(sequenciaFibonacci)
// console.log("----------------------------------------")

// |------------------------------------------------------------------------------------------------------------------|

// Ex04: Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço
// do...while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as
// tentativas.


// let senha = "123456"
// let tentativas = 3

// console.log("===========================================")
// console.log("               Bem-Vindo(a)!")
// console.log("===========================================")


// do{
//     let senhaUsuario = PROMPT("Digite sua senha: ")
    
//     console.log("-------------------------------------------")
    
    
//     if( senhaUsuario === senha){
        
//         console.log("Senha válida! Acesso liberado.")
//         console.log("===========================================")
//         break
        
//     } else{
        
//         tentativas--
        
//         if(tentativas > 0){
//             console.log(`Senha inválida! Você tem mais ${tentativas} ${tentativas > 1 ? "tentativas" : "tentativa"}.`)
//             console.log("-------------------------------------------")
//         } else{
    //             console.log("Suas tentativas acabaram!")
//             console.log("===========================================")
//         }
//     }

// }while(tentativas > 0)


// |------------------------------------------------------------------------------------------------------------------|

// Ex05: Leia um número N e exiba todos os números primos entre 2 e N usando laços
// aninhados (for dentro de for). Exiba também a quantidade total de primos
// encontrados.

// console.log("==============================")
// console.log("    ANALISADOR DE PRIMOS")
// console.log("==============================")
// console.log()
// let numero = 0
// do{
//     numero = parseInt(PROMPT("Informe um número: "))
//     console.log("------------------------------")
//     console.log()
    
//     if(isNaN(numero) || numero <= 0){
//         console.log("Valor inválido!!")
//     }
    
// }while(isNaN(numero) || numero <= 0)
    
    
// let totalPrimos = 0

// let numerosPrimos = ""


//     for( let numeroAtual = 2; numeroAtual <= numero; numeroAtual++){
//         let quantidadeDivisores = 0
//         for(let divisorAtual = 1; divisorAtual <= numeroAtual; divisorAtual++){
            
//             if(numeroAtual % divisorAtual === 0){
//                 quantidadeDivisores++
//             }  
//         }
        
//         if(quantidadeDivisores === 2){
//             if(numerosPrimos === ""){
//                 numerosPrimos += numeroAtual
                
//             }else{
//                 numerosPrimos += ` - ${numeroAtual}`
                
//             }
//             totalPrimos++
//         }
//     }
    
// console.log("Primos encontrados:")
// console.log(numerosPrimos)
// console.log("------------------------------")
// console.log()
// console.log("Total de primos:", totalPrimos)
// console.log("------------------------------")

// |------------------------------------------------------------------------------------------------------------------|

// Ex06: Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média
// da turma, o nome do aluno com maior nota e o nome do aluno com menor nota.
// Não use funções prontas como Math.max().

// console.log("===================================")
// console.log("     GESTÃO DE ALUNOS E NOTAS")
// console.log("===================================")

// const alunos = []

// let soma = 0



// for(let c = 1; c <= 3; c++){
    //     let nota
    //     do{
//     let nome = PROMPT("Nome do aluno: ")
//         nota = Number(PROMPT("Nota do aluno: "))
//         console.log("===================================")
        
//         if(isNaN(nota) || nota < 0){
//             console.log("Valor inválido!")
//         console.log("-----------------------------------")
//         }
//     }while(isNaN(nota) || nota < 0)
        
//     const aluno = [nome, nota]
//     alunos.push(aluno)

// }

// let maior = alunos[0][1]
// let nomeAlunoMaior = alunos[0][0]

// let menor = alunos[0][1]
// let nomeAlunoMenor = alunos[0][0]

// for(let i = 1; i < alunos.length; i++){

//     soma += alunos[i][1]

//     if(alunos[i][1] > maior){
//         maior = alunos[i][1]
//         nomeAlunoMaior = alunos[i][0]

//     }else if(alunos[i][1] === maior){
//         nomeAlunoMaior += `, ${alunos[i][0]}`

//     }


//     if(alunos[i][1] < menor){
    //         menor = alunos[i][1]
    //         nomeAlunoMenor = alunos[i][0]
    
    //     } else if(alunos[i][1] === menor){
        //         nomeAlunoMenor += `, ${alunos[i][0]}`
        
        //     }
        
        
        // }
        
        
// let media = soma / alunos.length

// console.log("        DETALHES DAS NOTAS")
// console.log("===================================")

// console.log("Média da turma:", media.toFixed(2))
// console.log("-----------------------------------")

// console.log("Aluno(s) com maior nota:", nomeAlunoMaior.toUpperCase())
// console.log("-----------------------------------")

// console.log("Aluno(s) com menor nota:", nomeAlunoMenor.toUpperCase())
// console.log("===================================")

// |------------------------------------------------------------------------------------------------------------------|

// Ex07: Simule um carrinho de compras: leia nomes e preços de produtos em um laço até
// o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o
// subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a pagar.

console.log("==========================================")
console.log("       Bem-vindo(a) a nossa loja!")
console.log("==========================================")

const produtos = []
let subTotal = 0

while(true){
    let nomeProduto = PROMPT("Nome do Produto: ").toLowerCase()
    if(nomeProduto === "sair"){
        break
    }
    let precoProduto
    
    do{
        precoProduto = Number(PROMPT("Preço do Produto: "))
        console.log("---------------------------------------")

        if(isNaN(precoProduto) || precoProduto <= 0){
            console.log("Adicione um valor válido")
        }

    }while(isNaN(precoProduto) || precoProduto <= 0)
    

    const produto = [nomeProduto, precoProduto]
    produtos.push(produto)
    
}

console.log("==========================================")
console.log("           Detalhes da compra")
console.log("==========================================")


console.log("PRODUTO                        VALOR")
// console.log("CAMERA ------------------------- R$ 1000,00")
for(let i = 0; i < produtos.length; i++){

    subTotal += produtos[i][1]

    console.log(produtos[i][0].toUpperCase() + " ".padEnd(25, "-"), "R$", Number(produtos[i][1]).toFixed(2).replace(".", ","))

}

console.log("------------------------------------------")

console.log("Subtotal R$", subTotal.toFixed(2).replace(".",","))
console.log("------------------------------------------")
