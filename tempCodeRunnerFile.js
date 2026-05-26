    for( let n = 2; n <= numero; n++){
        let divisor = 0
        for(let np = 1; np <= numero; np++){
            
            if(n % np === 0){
                divisor++
            }
            
            
        }
        
        if(divisor === 2){
            numerosPrimos += `${n} - `
            totalPrimos++
        }
    }
    
numerosPrimos += "Fim"
console.log(numerosPrimos)
console.log("Foram encontrados", totalPrimos, "números primos")