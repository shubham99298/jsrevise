async function fetchdata(){

    try{
        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error ("Network respone was not ok")
        }

        const data=await response.json();
        console.log(data);
    }

    catch(error){
         console.error("Error fetching data", error)
    }
}
fetchdata();