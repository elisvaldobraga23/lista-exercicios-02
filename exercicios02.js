// ====================================================================================================================
//                                                     EXERCÍCIOS 02
// ====================================================================================================================

// Ex01: Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um
//       laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto
//       a resposta for "sim".

// const PROMPT = require("prompt-sync")()

// let continuar = "sim"

// while(continuar === "sim"){

//     let numeroTabuada = parseInt(PROMPT("Digite um número para ver sua tabuada (De 1 a 10): "))
    
//     while(isNaN(numeroTabuada) || numeroTabuada <= 0){

//         console.log('=====================================================')  
//         console.log("Valor inválido, Digite um número de 1 a 10")
//         console.log('----------------------------------------------------')  
//         numeroTabuada = parseInt(PROMPT("Digite um número para ver sua tabuada (De 1 a 10): "))

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