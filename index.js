import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref , push, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = {
    databaseURL: 'https://add-to-cart-app-b13ee-default-rtdb.firebaseio.com/'
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database,"shoppingList")

onValue()


console.log(app)

let inputEl = document.getElementById('input')
let addBtn = document.getElementById('add')
let list = document.getElementById('ulist')



addBtn.addEventListener('click', () =>{
    let inputValue = inputEl.value
    push(shoppingListInDB, inputValue)
    console.log(inputValue)

    clearInput();
    addListItem(inputValue);
}) 


const clearInput = () =>{
    inputEl.value = '';
}
const addListItem = (itemValue) =>{
    // let listItem = document.createElement('li')
    // listItem.innerHTML = inputValue
    // list.appendChild(listItem)

    list.innerHTML += `<li>${itemValue}</li>`
}

let ezat = {
    height: '6.4',
    weight:'195lb',
    from:'Palestine',
    likes:'Basketball'
}

console.log(Object.entries(ezat))