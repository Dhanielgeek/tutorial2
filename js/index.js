// alert("hello World!!")
// let stUdent = ["daniel","david","oche","obi","grace"]
// console.log(stUdent)

//   let username = prompt("what's your name? ")
// console.log(`welcome to my page ${username}`)

 //console.log(document)
 //console.log(document.location.pathname)
//  document.getElementById("name").innerText= `welcome ${username}!!`
//  document.getElementById("name2").innerHTML= "<table><th><td>Trying my tags omg!!!</td></th></table>"
// let numbo =Number (prompt("Input your value"))
//  let num1= document.getElementById("myNums")
//  for(let i =0 ; i < numbo ; i++){
//     num1.innerHTML += `this a value ${i}` + "<br>"
//  }

// let showNumber = document.getElementById("myNums")
// const Randomval = ()=>{
//     let davinCi = Math.floor(Math.random()* 10)
//     showNumber.innerHTML = davinCi
// }


// let randomName = ["daniel","david","tabe","percy"]
// let showName = document.getElementById("myNames")
// const randomNam = ()=>{
//     let disName = Math.floor(Math.random()* randomName.length)
//     showName.innerHTML = randomName[disName]
// }

//let randomName = ["daniel","david","tabe","percy"]



 //console.log(document.getElementById("name"))
 //console.log(document.getElementsByClassName("name2"))
 //console.log(document.getElementsByTagName("span"))


 //global objectsynatx 
//  setInterval(() => {
//     console.log("hello class!!")
//  }, 2000);

// let j = document.getElementById("disnigga")
// let user= prompt("input your value")
// for(let i = 0 ; i < user; i++){
//     j.innerHTML += i + "<br>"
// }
// "./img/baking.webp"

//  let count = document.getElementById("countdown")
//  let initialCount = count.innerHTML
//  let imgDrop = document.getElementById("imgcount")
// let imgDopper = imgDrop.src 
// console.log(imgDopper)
//  setInterval(()=>{
//     initialCount = initialCount > 0 ? initialCount-1 : 0
// count.innerHTML= initialCount
// let changeImg = initialCount % 2 === 0 ? "./img/blu.jpeg" : "./img/baking.webp"

// imgDrop.src = changeImg
//  },1000)

//  let dv = document.querySelector(".teedy .tabo").innerText= "nickoloden"
// console.log(dv)


// let allImage = ["./img/baking.webp","./img/blu.jpeg","./img/pro2.png","./img/pro4.png"]
// let myBut = document.getElementById("imgBut")
// let butInt = 0
//  let addo = document.getElementById("addButton")
//  let nega = document.getElementById("negaButton")

//  addo.addEventListener("click",()=>{
// butInt+= 1
// myBut.src=  allImage[butInt % allImage.length]
//  })

//  nega.addEventListener("click",()=>{
    
//     if(butInt <= 0){
//         butInt = allImage.length
//     }else{
//         butInt-=1
//     }
//     myBut.src=  allImage[butInt % allImage.length]
//  })
// let colorBank = ["red","pink","purple","orange"]
//  let getcoloe = document.getElementById("colordiv")
//  let borderBank = ["yellow","blue","dark-blue","black"]
// //  getcoloe.style.background= "grey"
// //  getcoloe.style.border= "2px solid blue"

//  let Btn = document.getElementById("myBts")

// let changeColor = ()=>{
//     let Rando = Math.floor(Math.random()* colorBank.length )
//     getcoloe.style.background = colorBank[Rando]
//     getcoloe.style.border = `5px solid ${borderBank[Rando]}`
// }

//  

let myDate = new Date()
console.log(myDate)


console.log(myDate.getDate())
console.log(myDate.getFullYear())
console.log(myDate.getTime())

// let getto = myDate.getTime()
// console.log(Math.floor(getto/31536000000))
// console.log(Math.floor(getto/86400000)* 3)


// let newDate = new Date(2022,07,13)
// console.log(newDate)

//if a product is ordered on march ,26,2020 and delivery on april ,02 ,2020 how many days does it takes to deliver



// let ordeDay = new Date(2020,02,26)
// let delivDay = new Date(2020,03,02)
// console.log(delivDay/86400000 - ordeDay/86400000)



// let orderDate = new Date(2020,02,26)
//console.log(orderDate)
// let deliveryDate = new Date(2020,03,02)
//console.log(deliveryDate)
// console.log((deliveryDate - orderDate))
// console.log(orderDate/86400000)
// console.log(deliveryDate/86400000)
// console.log((deliveryDate/86400000) - (orderDate/86400000))


// let bagDay = new Date()
// let newBag = (bagDay /86400000) 
// let disYear = new Date(newBag * 86400000 + 172800000)
// console.log(disYear)



// let dayofOrder = new Date()
// let dayofDelive = dayofOrder/86400000
// let disTime = new Date(dayofDelive * 86400000 + 604800000)
// // console.log(disTime)

// let placeOrder = prompt("whats ur order");

// let shoppingList = ["bag","shoe","shampoo","skinny dress","lipstick"]


// if(shoppingList.includes(placeOrder)===true){
//     console.log(`your package will be available ${disTime}`)
// }else{
//     console.log(`${placeOrder} is not available in our store!!!`)
// }
// let deliDay = new Date(2022,02,02)
// let ordAy = new Date()

// for(let i = 0; i<shoppingList.length; i++){
//     if(i === shoppingList.length){
//         console.log(`${placeOrder} new Date(ordAy*86400000 + 604800000`)
//     }
// }console.log(`${placeOrder} new Date(ordAy * 86400000 +604800000 )`)

// 31536000000 is the miliseconds in oneyear     ??\\ 86400000 is millisecond in a day 

// let disGuY = document.getElementById("datTime")

 setTimeout(() => {
 console.log("hello Francis!!")
 },3000)
// console.log("welcome to class!!")
// disGuY.innerHTML= ("Welcome to class!!")
// },3000)

// // let Bttn = document.getElementById("checkButton")
// // let loadIng = document.getElementById("checkingLoad")

// document.getElementById("checkButton").onclick= ()=>{
//   document.getElementById("checkingLoad").style.display = "block"
// }
// setTimeout(()=>{
// document.getElementById("checkingLoad").style.display = "none"
// },3000)

// let myTime = new Date()
// let myhour = myTime.getHours()
// let myMinute = myTime.getMinutes() 
// let mySecound = myTime.getSeconds()
// console.log(myhour,myMinute,mySecound)

// document.getElementById("Hour").innerHTML= myhour
// document.getElementById("Minute").innerHTML = myMinute
// document.getElementById("second").innerHTML = mySecound

// const addingZero = (x)=>{
// if(x < 10){
//   return "0" + x.toString()
// }else{
//   return x.toString()
// }
// }

setInterval(()=>{

    let thisTime = new Date()
    let disHour = thisTime.getHours()
    let disMin = thisTime.getMinutes()
    let thisSec = thisTime.getSeconds()
    
    
    document.getElementById("hours").innerHTML= addZero(disHour)
    document.getElementById("min").innerHTML = addZero(disMin)
    document.getElementById("sec").innerHTML = addZero(thisSec)
},1000)

const addZero = (x)=>{
if (x < 10){
    return"0" + x.toString()
}else{
    return x.toString()
}
}

// setInterval(()=>{

  
//     let myTime = new Date()
//     let myhour = myTime.getHours()
//     let myMinute = myTime.getMinutes() 
//     let mySecound = myTime.getSeconds()
//     console.log(myhour,myMinute,mySecound)
    
//     document.getElementById("Hour").innerHTML=addingZero( myhour) 
//     document.getElementById("Minute").innerHTML = addingZero(myMinute)
//     document.getElementById("second").innerHTML = addingZero(mySecound)
// },1000)
