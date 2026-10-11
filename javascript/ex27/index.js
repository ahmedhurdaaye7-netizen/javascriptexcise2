
function FetchUserData() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {

            const sucess = true
            if (sucess) {
                reslove({ id: 1, name: 'nuur' })
            } else {
                reject('failed to fetch user data')
            }

        }, 2000);

    })

}
    async function getUserData() {
        try{
            const data = await FetchUserData()
            console.log('user data is ',data)

        } catch(errror){
            console.log(errror)
        }
        
    }
    getUserData()
