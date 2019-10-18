console.log("Hi")



const wishLists = document.querySelector("#wishList")
console.log(wishLists)



const buttonListener = document.querySelector("#saveEntry")
buttonListener.addEventListener("click", () =>{
 const faveThing = document.querySelector("#favThing").value
//  console.log(faveThing)
 const whereToBuy = document.querySelector("#whereBuy").value
//  console.log(whereToBuy)
//Quality control--if user didn't enter any info, alert them 
//that they didn't. If they did, send it to the DOM. 
if(faveThing === "" || whereToBuy==="") {
    alert("Please enter some information.")
} else {
 wishLists.innerHTML = `
 
 I can buy ${faveThing} at ${whereToBuy}.
 `
}
})