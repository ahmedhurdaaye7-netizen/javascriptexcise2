



function FetchUserData(){
 return new Promise((reslove,reject) =>{
 setTimeout(() => {
    
 const sucess = true
 if(sucess){
    reslove({id:1,name:'nuur'})
 }else{
    reject('failed to fetch user data')
 }



    
 }, 2000);




 })


}
FetchUserData()
.then((data)=> console.log('user data',data))
.catch((err)=> console.log(err))
