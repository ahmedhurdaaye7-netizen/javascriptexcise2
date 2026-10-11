async function fetchUserData(){
const response = await fetch('https://jsonplaceholder.typicode.com/posts')
 const data = await response.json()
 console.log('user data',data)

}
fetchUserData()