const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConverter = document.querySelector(".currency-value-to-convert")
  const currencyValueConverted = document.querySelector(".currency-value")

  const dolarToday = 5.2
  const euroToday = 6.2
  const libraToday = 6.2
  const bitcoinToday = 138
  const yuanToday = 0.66
  const pesoToday = 0.014 

  if (currencySelect.value == "dólar") {  
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday)
  }

  if (currencySelect.value == "libra") {    
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday)
  } 

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday)
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)
  }

  if(currencySelect.value == "yuan"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CN", {
      style: "currency",
      currency: "CNY"
    }).format(inputCurrencyValue / yuanToday)
  }
 if(currencySelect.value == "peso"){
  currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AR", {
    style: "currency",
    currency: "ARS"
  }).format(inputCurrencyValue / pesoToday)
 }

  currencyValueToConverter.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)

}
function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img") 
  
  if(currencySelect.value == "peso"){
    currencyName.innerHTML = "Peso"
    currencyImage.src = "./assets/peso.png"
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra 1.png"
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin 1.png"
  }
if(currencySelect.value == "dólar"){
  currencyName.innerHTML = "Dólar"
  currencyImage.src = "./assets/dólar.png"
}

if(currencySelect.value == "yuan"){
  currencyName.innerHTML = "Yuan"
  currencyImage.src = "./assets/yuan.png"
}

  convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)




















































