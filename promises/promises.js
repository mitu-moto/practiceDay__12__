let moneylended = 10_000;
let promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        // resolve(8000)// get my promies 
        reject(new Error("I lied, you're not getting your money back"))
    }, 2000) //represent two day
});

// promise.then((money)=>{
//     if(money === moneylended){
//         console.log("Yay!, I got my money back")
//     return money}
// }).then(amountRecived => {
//     console.log("amount recived ", amountRecived)
// }).catch((error => {
//     console.error("😭", error.message)
// }))

// promise.then((money)=>{
//     // if(money === moneylended){
//         console.log("Yay!, I got my money back")
//     // }
//     return money 
//   },error => {
//         console.error("😭", error.message)
//     })

promise.then((money)=>{
    // if(money === moneylended){
        console.log("Yay!, I got my money back")
    // }
    return money 
  })
.then(moneyRecived)
.then(extraMoney => {
    if(extraMoney){
        console.log("Wow, my friend is generous.then I will buy some thing from ", extraMoney)
    }
    console.log("Despite the lended amount back to the back")
})
.catch(error => {
      console.error("😭", error.message)
  })
  .finally(()=>{
    console.log("It will be called irrespective of the outcomes")
  })
// states related to promises :-
// fullfilled state - successful outcome
// rejected state - rejected outcome, error
// pending state- neither fullfilled nor rejected
// settled state - it represents - fullfilled state or rejected state

function moneyRecived(amountRecived) {
    return new Promise((resolve, reject)=>{
        if(amountRecived > moneylended){
            resolve(amountRecived - moneylended);
        }else if(amountRecived < moneylended){
            reject(new Error("Oh wait, I have recived the entire amount"));
        }else{
            resolve(0);
        }
    })
}