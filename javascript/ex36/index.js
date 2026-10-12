
 const color = document.querySelector('#color')
const list = document.querySelector('#list')

  color.addEventListener('input',function(){
    const result= document.createElement('li')
    result.textContent = color.value
    result.style.color = color.value
    list.appendChild(result)


    
  })

function clearHistory(){
    if(list.lastChild){
         list.removeChild(list.lastChild)

    }
  



}
