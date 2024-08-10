// https://icanhazdadjoke.com



async function fetchJoke(){
  try {
    const res = await fetch("https://icanhazdadjoke.com",{
        headers:{
            "Accept":"application/json"
        }
    })
    const data = await res.json()

    // console.log(data);

    document.getElementById("joke").innerText = data.joke
  } catch (error) {
    console.log("Error Occured");
    
  }
    
}

document.getElementById("btn").addEventListener("click",()=>{
    fetchJoke()
})