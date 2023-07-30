const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click' , () =>{
    createNotification();
});

function createNotification(){
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = 'what wrong with u bitch...!';

    container.appendChild(notif);

    setTimeout(() =>{
        notif.remove();
    }, 3000);
}


// create a varieable
// const btn = document.getElementById('btn');
// const container = document.getElementById('container');

// // add a lisner
// btn.addEventListener('click', () =>{
//     createNotification();
// });

// // create a function

// function createNotification(){
//     const notif = document.createElement('div');
//     notif.classList.add('toast');

//     notif.innerText = 'what r u doing mannnn...!';

//     setTimeout(() => {
//         notif.remove();
//     }, 3000);
// }

// create a varieble

// add a classlist

// add into dom

// set a timeout es6