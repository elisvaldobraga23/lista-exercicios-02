let continuar = "sim"

while(continuar === "sim"){

    let numeroTabuada = parseInt(PROMPT("Digite um número para ver sua tabuada: "))
    
    while(isNaN(numeroTabuada) || numeroTabuada < 1){

        console.log('=====================================================')  
        console.log("Valor inválido, Digite um número de 1 a 10")
        console.log('----------------------------------------------------')  
        numeroTabuada = parseInt(PROMPT("Digite um número para ver sua tabuada: "))

    }

    if(!isNaN(numeroTabuada) && numeroTabuada > 0 ){
        
        console.log('----------------------------------------------------')  
        console.log("================================")
        console.log("          Tabuada de " + numeroTabuada)
        console.log("================================")
        
        for(let n = 1; n <= 10; n++){
                console.log(`${numeroTabuada} X ${n} = ${numeroTabuada * n}`)
        }

        console.log("================================")

        console.log("-----------------------------------------------------------")
        continuar = PROMPT('Deseja ver outra tabuada? Digite "sim" para continuar: ').toLowerCase()
        console.log("-----------------------------------------------------------")
    
        if(continuar !== "sim"){
            console.log("================================")
            console.log("          Fim da Tabuada")
            console.log("================================")
        }
    }

}