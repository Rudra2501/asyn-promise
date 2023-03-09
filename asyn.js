let posts=[]
function updateLastUserActivityTime(){
    return newPromise((resolve,reject)=>{
        setTimeout(()=>{
            let userstime=new Date().getMinutes()
            resolve(userstime)
        },1000)
    })
}
function createPost1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            postss.push({title:"post four"})
            resolve(postss)
        },1000)
    })
}
function deleted(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop()
        },3000)
    })
}
function userupdates(){
    Promise.all([createPost1(),updateLastUserActivityTime()]).then(([something,something1])=>{
        console.log(something.something1)
    })
}
userupdates()