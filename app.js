//asynchronous function

function main(m,n){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isNaN(m) || isNaN(n)){
                return reject()
            }
            for(let i=m;i<=n;i++){
                console.log(i);
                
            }
            return resolve()
        },5000)
    })
    .then(()=>console.log("promise is resolved"))
    .then(()=>console.log(10*10)
    )
    .catch(()=>console.log("error occured"))
}
main(1,10)
//main(1,"1a")

function sample(){
    console.log("no's printed");
}
sample()

window.setTimeout(()=>{
    console.log("I'm settimeout");
    
},5000)

window.setInterval(()=> {
    console.log("I'm setInterval");
    
},3000)



let online=window.navigator.onLine

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(online===true){
            return resolve()
        }else{
            return reject()
        }
    },2000)
})
.then(()=> console.log("online....."))
.catch(()=>console.log("ofline....")
)
