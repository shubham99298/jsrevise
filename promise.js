const placeorder=()=>{
    return new Promise ((reject,resolve)=>{
            setTimeout(() => {
                resolve();
            }, 1000);
        })
}

const startproduction=()=>{
    return new Promise ((reject,resolve)=>{
            setTimeout(() => {
                resolve();
            }, 1000);
        })
}

const printID=()=>{
    return new Promise ((reject,resolve)=>{
            setTimeout(() => {
                resolve();
            }, 1000);
        })
}

const productname=()=>{
    return new Promise ((reject,resolve)=>{
            setTimeout(() => {
                resolve();
            }, 1000);
        })
}

const productdesc=()=>{
    return new Promise ((reject,resolve)=>{
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
        console.log("product is in production")

        return printID();

    })
    .then(()=>{
        console.log("product is in production")

        return productname();

    })
    .then(()=>{
        console.log("product is in production")

        return productdesc();

    })
    .catch((error)=>{
        console.log('error',error)
    })

