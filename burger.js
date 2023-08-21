const addvegies=(callback)=>{
    
    const veggies="🥔";
    setTimeout(() => {
        console.log("veggies prepared",veggies)
        callback(veggies);
    },1000);
}

const addtikki=(veggies,callback)=>{
    
    const tikki=veggies+"🧈";
    setTimeout(() => {
        console.log("tikki prepared",tikki)
        callback(tikki)
    },1000);
}

const makeburger=(veggies, tikki,callback)=>{
    
    const burger=veggies+tikki+"🍔";
    setTimeout(() => {
        console.log("burger prepared",burger)
        callback(burger)
    },1000);
}



console.log("Preparing a burger");


    addvegies( (veggies)=>{

        console.log('preparing for tikki')


        addtikki(veggies,(tikki)=>{
            console.log('preparing f or burger started')

          makeburger(veggies,tikki,(burger)=>{
                console.log("burger is served")
            })
          })
        })

     