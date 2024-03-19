let bitcoinPrice= document.querySelector(".bitcoin span");
    let ethereumPrice= document.querySelector(".ethereum span");
    let dogecoinPrice= document.querySelector(".dogecoin span");

    async function getValues(){
        let response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd");

        let data = await response.json();

        bitcoinPrice.innerHTML = data["bitcoin"].usd;
        ethereumPrice.innerHTML = data["ethereum"].usd;
        dogecoinPrice.innerHTML = data["dogecoin"].usd;
    }

    document.addEventListener("DOMContentLoaded", getValues);