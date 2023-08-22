function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
        }, time);

    })
}

async function placeorder(){
    await delay(2000);
    console.log("order taken");
 }

 async function startproduction(){
    await delay(2000);
    console.log("production started");
 }

 async function printID(){
    await delay(2000);
    console.log("");
 }

 
 async function productname(){
    await delay(2000);
    console.log("");
 }
 async function productdesc(){
    await delay(2000);
    console.log("");
 }


async function main(){ 

    console.log("order is going to take place ");
    await placeorder();
    console.log("");
    await startproduction();
    console.log("");
    await printID();
    console.log("");
    await productname();
    console.log("");
    await productdesc();

}

main();