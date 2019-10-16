console.log("Hi")

const wishLists = document.querySelector("#wishList")
console.log(wishLists)



const buttonListener = document.querySelector("#saveEntry")
buttonListener.addEventListener("click", () =>{
 const faveThing = document.querySelector("#favThing").value
//  console.log(faveThing)
 const whereToBuy = document.querySelector("#whereBuy").value
//  console.log(whereToBuy)
 wishLists.innerHTML = `
 
 I can buy ${faveThing} at ${whereToBuy}.
 `
})