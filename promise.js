const placeorder=()=>{
    return new Promise ((resolve,reject)=>{
            setTimeout(() => {
                resolve();
            }, 1000);
        })
}

const startproduction=()=>{
    return new Promise ((resolve, reject)=>{
            setTimeout(() => {
                resolve();
            }, 1000);
        })
}

const printID=()=>{
    return new Promise ((resolve,reject)=>{
            setTimeout(() => {
                resolve();
            }, 1000);
        })
}

const productname=()=>{
    return new Promise ((resolve,reject)=>{
            setTimeout(() => {
                resolve();
            }, 1000);
        })
}

const productdesc=()=>{
    return new Promise ((resolve,reject)=>{
            setTimeout(() => {
                resolve(); 
            }, 1000);
        })
}
console.log("order is going to take place ");

placeorder()
    .then(()=>{
        console.log("product is in production")

        return startproduction();
    })

    .then(()=>{
        console.log("ID printing started")

        return printID();

    })
    .then(()=>{
        console.log("product item started printing")

        return productname();

    })
    .then(()=>{
        console.log("product description started ")

        return productdesc();

    })
    .catch((error)=>{
        console.log('error',error)
    })

