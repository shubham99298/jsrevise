const user=((callback)=>{
    console.log("user send message to server ");
    setTimeout(() => {
        callback();
    }, 1000);
})

const server=((callback)=>{
    console.log("server send message to reciever");
    setTimeout(() => {
        callback();
    }, 2000);
})

const reciever=((callback)=>{
    setTimeout(() => {
        callback();
    }, 3000);
})


console.log("user created");

user(()=>{
  
    console.log("server recieves message")

      server(()=>{
        console.log("message recieved by reciever")
         reciever(()=>{
             console.log("----process terminated-----")
         })

        
    })
})