

function addItem(){
const list = document.querySelector('#list')
const newItem = document.createElement('li')
newItem.innerText ='new item'
list.appendChild(newItem)

}

function removeItem(){
  list.removeChild(list.lastChild)



}



