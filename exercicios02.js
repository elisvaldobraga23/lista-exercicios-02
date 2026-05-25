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