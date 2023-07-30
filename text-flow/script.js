// const text = "hey guys my name is saad and i'm 19 yrs old now sorrry 20 yrs "

// let index = 0

// function writeText () {
//     document.body.innerText = text.slice(0 , index)
    
//     index++

//     if (index > text.length){
//         index = 0
//     }
// }

// setInterval(writeText , 100)






// make a text
const text = "one day salmani win's the heard of muskan but that time muskan have two to three  child...!"
let index = 0
function writeText () {
    document.body.innerText = text.slice(0 , index)

    index++

    if(index > text.length){
        index = 0
    }
}
    setInterval(writeText , 100)
