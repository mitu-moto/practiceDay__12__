document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#currency-converter").addEventListener("submit", async(event)=>{
        event.preventDefault();
        console.log("async function called first")

        const {target:{from, to, amount}} = event;

        let headers = new Headers();
        headers.append("apikey", "hTdpQX0OytTsoYEIIi4eVlMONhFQ0oKS");

        const requestOptions = {
            metghod:"GET",
            headers,
        }

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
    .then(response => response.json())
    .then(data =>{
        
        // {
        //     "success": true,
        //     "query": {
        //         "from": "EUR",
        //         "to": "INR",
        //         "amount": 5
        //     },
        //     "info": {
        //         "timestamp": 1673292243,
        //         "rate": 88.322737
        //     },
        //     "date": "2023-01-09",
        //     "result": 441.613685
        // }
        
    //     let {info, date, query:{from,to,amount}, result} = data;
    //     document.querySelector(".result").textContent = `As per Day:${date}, 1 ${from} to ${to}  rate is ${info.rate.toFixed(2)} ${to} and total amount of ${amount} ${from}  exchange is ${result.toFixed(2)} ${to}`

    // })
    // .catch((error)=>console.log(error));
    })

try{
    let response = await fetch(`https://api.apilayer.com/exchangerates_data/convertto=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
const data = await response.json();

let {info, date, query:{from,to,amount}, result} = data;

document.querySelector(".result").textContent = `As per Day:${date}, 1 ${from} to ${to}  rate is ${info.rate.toFixed(2)} ${to} and total amount of ${amount} ${from}  exchange is ${result.toFixed(2)} ${to}`

}catch(error){
console.log(error);
}finally{
    console.log("finally block")
}
  console.log("end of function")
})
document.querySelector("#currency-converter").addEventListener("submit", (event)=>{
    console.log("a regular synchronous function")
})
})