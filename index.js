import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'

const app = initializeApp(appSettings);
console.log(app)
const appSettings = {
    databaseURL: 'https://add-to-cart-app-b13ee-default-rtdb.firebaseio.com/'
}

let inputEl = document.getElementById('input')
let addBtn = document.getElementById('add')


addBtn.addEventListener('click', () =>{
    let inputValue = inputEl
    console.log(inputValue)
})