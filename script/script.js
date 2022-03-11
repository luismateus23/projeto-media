function verificar(){
    var n11 = document.getElementById('txtn1')
    var n22 = document.getElementById('txtn2')
    var res = document.getElementById('res')

    if(n11.value == "" || n22.value == "" ){
        window.alert("Informe um número, por gentileza")
    }else{
        n1 = Number(n11.value)
        n2 = Number(n22.value)
        
        if(n1 > 10 || n2 > 10){
            window.alert('Informe uma nota válida')
            
        }else{
            var resultado = ((n1 + n2)/2)

        res.innerHTML = `Sua média foi ${resultado} <br>`

        var img = document.createElement('img')

        if(resultado >= 6){
            res.innerHTML += `Você está <strong>aprovado</strong><br> <br>`
            img.setAttribute('src', '../img/felizzz.png')
            res.appendChild(img)
        }else{
            res.innerHTML += `<br>Você está <strong>reprovado</strong> <br> <br>`
            img.setAttribute('src', '../img/triste.png')
            res.appendChild(img)
        }
        }

        
        
    }
    
   

   
}