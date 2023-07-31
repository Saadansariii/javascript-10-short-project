// function createHeart (){
//     const heart = document.createElement('div')
//     heart.classList.add('heart')

//     heart.style.left = Math.random() * 100 + "vw"
//     heart.style.animationDuration = Math.random() * 2 + 3 + "s"

//     heart.innerText = "💜"

//     document.body.appendChild(heart)

//     setTimeout(() => {
//         heart.remove()
//     }, 5000);
// }

// setInterval(createHeart, 300);

// crete a fn
function createHeart (){
// make var
    const heart = document.createElement('div')
// add in class
    heart.classList.add('heart')
// style by math fn
    heart.style.left = Math.random() * 100 + 'vw'
// animation
    heart.style.animationDirection = Math.random() * 2 + 3 * 's'
// add in dom
    heart.innerText = '💜'
// child
    document.body.appendChild(heart)
// set timeout
    setTimeout(() => {
        heart.remove()
    }, 5000);
}
// set interval
    setInterval(createHeart , 300)



