export const getDataToShow = (url:string) => {
    return fetch(`https://engineering-task.elancoapps.com/api/${url}`).then((res) => {
        if(!res.ok){
            throw new Error('Something went Wrong!!')
        }
        return res.json()
    })
}