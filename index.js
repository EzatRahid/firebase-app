import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref , push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = {
    databaseURL: 'https://add-to-cart-app-b13ee-default-rtdb.firebaseio.com/'
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database,"shoppingList")


console.log(app)

let inputEl = document.getElementById('input')
let addBtn = document.getElementById('add')


addBtn.addEventListener('click', () =>{
    let inputValue = inputEl.value
    push(shoppingListInDB, inputValue)
    console.log(inputValue)
    inputValue.value = ''
}) 
