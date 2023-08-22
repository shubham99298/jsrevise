async function delay(time){
    return new Promise ((resolve,reject)=>{
     

            setTimeout(() => {
                resolve();
            }, 1000);
        })
}

async function user(val1){
    
     await delay(1000);
    console.log( val1);

}

async function server(val2){
    await delay(1000);
    console.log( val2);
    }

async function reciever(val3){
    await delay(1000);
    console.log( val3);
    
}

async function myfunc(){
console.log("user created");

val1="user send messge to server"
await user(val1);

console.log("server recieves message")
val2="server send messge to recievr "
await server(val2);
console.log("message recieved by reciever")
val3="process terminated"
await reciever(val3);

}
myfunc();