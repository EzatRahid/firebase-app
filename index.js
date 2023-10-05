import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref , push } from 'https://www.gstatic.com/firebasejs/firebase-database.js'

const appSettings = {
    databaseURL: 'https://add-to-cart-app-b13ee-default-rtdb.firebaseio.com/'
}
const app = initializeApp(appSettings)
const database = getDatabase(app)


console.log(app)

let inputEl = document.getElementById('input')
let addBtn = document.getElementById('add')


addBtn.addEventListener('click', () =>{
    let inputValue = inputEl
    push(moviesInDb(inputValue))
    console.log(inputValue)
}) 
}) 
}) 