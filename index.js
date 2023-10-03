import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'

const appSettings = {
    databaseURL: 'https://add-to-cart-app-b13ee-default-rtdb.firebaseio.com/'
}
const app = initializeApp(appSettings);
console.log(app)

let inputEl = document.getElementById('input')
let addBtn = document.getElementById('add')


addBtn.addEventListener('click', () =>{
    let inputValue = inputEl
    console.log(inputValue)
})