// // https://reqres.in/api/users


// // Get request and how to handle the response
// fetch("https://reqres.in/api/users")
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
// })


// // Post Request
// fetch("https://reqres.in/api/users",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         name:"ajay",
//         email:"ajay@email.com"
//     })
// })
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
// })


// // asyn ways to handle the fetch

// async function fetchData() {
//     try {
//         let res = await fetch("https://reqres.in/api/users")
//         let data = await res.json()
//         console.log(data);
//     } catch (error) {
//             console.log(error);
//     }
// }

// fetchData()