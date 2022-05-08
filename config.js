let button = document.getElementById("button")
let select = document.getElementById("options")

let valorDolar = 5.0
let painelDolar = document.getElementById("dolar-resultado")


function convert() {
    let valorReais = document.getElementById("valor").value
    let valorReaisFormatCurrency = document.getElementById("real").innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorReais);
    let convertion = valorReais / valorDolar

    if (select.value === "Euro") {
        let resultCoversion = document.getElementById("dolar-resultado").innerHTML = new Intl.NumberFormat('pt-PT', {
            style: 'currency',
            currency: 'EUR'
        }).format(convertion);
    }else if(select.value === "Dolar"){
        let resultCoversion = document.getElementById("dolar-resultado").innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(convertion);

    }else{
        let resultCoversion = document.getElementById("dolar-resultado").innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(convertion);
    }
}


function selectEuro() {
    let dolartext = document.getElementById("dolartext")
    let imgDolar = document.getElementById("imgDolar")
    
    if (select.value === "Euro") {
        dolartext.innerHTML = "Euro"
        imgDolar.src = "./assets/Euro.png"
        valorDolar = 6
        

    } else if (select.value === "Dólar") {
        dolartext.innerHTML = "Dolar"
        imgDolar.src = "./assets/Dolar.png"
        valorDolar = 5

    } else {
        dolartext.innerHTML = "BTC"
        imgDolar.src = "./assets/Btc.png"
        valorDolar = 175.195



    }




}



button.addEventListener('click', convert)

options.addEventListener('change', selectEuro)