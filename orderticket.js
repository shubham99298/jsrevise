const bookticket=((callback)=>{
    setTimeout(()=>{
        callback();
    },2000)
})
const  Entryairport=((callback)=>{
    setTimeout(()=>{
        callback();
    },2000)
})
const  boardingpass=((callback)=>{
    setTimeout(()=>{
        callback();
    },2000)
})
const  secutitycheck=((callback)=>{
    setTimeout(()=>{
        callback();
    },2000)
})
const  selfcheck=((callback)=>{
    setTimeout(()=>{
        callback();
    },2000)
})

const  bus=((callback)=>{
    setTimeout(()=>{
        callback();
    },2000)
})
const  airplane=((callback)=>{
    setTimeout(()=>{
        callback();
    },2000)
})

const  fly=((callback)=>{
    setTimeout(()=>{
        callback();
    },2000)
})

const  Dest=((callback)=>{
    setTimeout(()=>{
        // callback();
    },2000)
})




console.log('booking  started');

bookticket(()=>{
   console.log("ticket booked");

     Entryairport(()=>{
    console.log("entering at airport");

      boardingpass(()=>{
        console.log("boarding started");

        secutitycheck(()=>{
            console.log("security check");

            selfcheck(()=>{
                console.log('self check done');

                bus(()=>{
                    console.log('Reaching to airplane throuhh bus');

                    airplane(()=>{
                       console.log("entered in airplane");

                       fly(()=>{
                        console.log(" takeoff");
                        
                        Dest(()=>{
                            console.log("reached to destination");
                        })
                        
                       })
                    })
                })
            })

            
        })
      })
   })
})