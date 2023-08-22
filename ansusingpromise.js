const user=()=>{
    return new Promise ((resolve,reject)=>{
        console.log("user send message to server ");

            setTimeout(() => {
                resolve();
            }, 1000);
        })
}
const server=()=>{
    return new Promise ((resolve,reject)=>{
        console.log("server send message to reciever");

            setTimeout(() => {
                resolve();
            }, 1000);
        })
}

const reciever=()=>{
    return new Promise ((resolve,reject)=>{
            setTimeout(() => {
                resolve();
            }, 1000);
        })
}

console.log("user created");
user()
.then(()=>{
    console.log("server recieves message")
    return server();
})
.then(()=>{
    console.log("message recieved by reciever")
    return reciever();
})
.catch((error)=>{
    console.log('error',error)
})
