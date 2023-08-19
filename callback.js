
function calculate(a,b,val){
  
    return val(a,b);

}

function add(a, b){
    return a+b;
}
function mul(a,b){
    return a*b;
}
  


const addval=calculate(3,4,add);
const mulval=calculate(4,5,mul);
console.log(addval)
console.log(mulval)

// call back hell

const placeorder=((callback)=>{
    setTimeout(()=>{
        console.log("order placed");
        callback();
    },2000)
})

const startproduction=((callback)=>{
    setTimeout(()=>{
        console.log("production started");
        callback();
    },2000)
})

const printID=((callback)=>{
    setTimeout(()=>{
        console.log("id printed");
        callback();
    },2000)
})

const productname=((callback)=>{
    setTimeout(()=>{
        console.log("production printed");
        callback();
    },2000)
})

const productdesc=((callback)=>{
    setTimeout(()=>{
        console.log("productdesc");
       callback();
    },1000)
})


console.log('ordering product...');
placeorder(()=>
{
    console.log('in production');

      startproduction(()=>
      {
        console.log('printing items started');
        printID(()=>{
            productname(()=>{
                productdesc(()=>{
                    console.log('day ended')

                })
                
            })
        })


        
      })
})
