const user = (  (callback)=>{

    console.log("user login");
    setTimeout(() => {
        callback();
    },1000);
}  )

const login = (  (callback)=>{

    console.log("this is a user");
    setTimeout(() => {
        callback();
    },1000);
}  )

const password = (  (callback)=>{

    console.log("process terminated");
    setTimeout(() => {
        callback();
    },1000);
}  )




console.log("this is a user");



user( ()=>{
    console.log("user enters password");

    login(()=>{
        console.log("this is a admin");
        password(()=>{
        })
    })
})