// Promise in Javascript

// Synchronous vs. Asynchronous

// console.log("Task 1");

// setTimeout(()=>{
//     console.log("Task 2 will take some time ");
// },0)

// console.log("Task 3");
// console.log("Task 4 ");




// Callbacks



// console.log("Task 1"); // 1 sec
// console.log("Task 2 "); // 2 sec
// console.log("Task 3 "); // 3 sec

// setTimeout(() => {
//     console.log("Task 1");
//     setTimeout(() => {
//         console.log("Task 2");
//         setTimeout(() => {
//             console.log("Task 3");
//             setTimeout(() => {
//                 console.log("Task 3");
//                 setTimeout(() => {
//                     console.log("Task 3");
//                 }, 3000);
//             }, 3000);

//         }, 0);
//     }, 0);

// }, 1000);





// Promises


// Pending
// fulfiled
// rejected



// const promise = new Promise((res,rej)=>{
//     let result = true
//     if (result){
//         res("Resolved")
//     }else{
//         rej("Rejected")
//     }
// })


// promise
// .then((value)=>{
//     console.log(value);
//     return "something"
// })
// .then((value)=>{
//     console.log(value);
// console.log("1");
// })
// .then((value)=>{
//     console.log("2");
// })
// .catch((err)=>{
//     console.log(err);
// })





// task 1 ,2,3 
// Task 3 depends on 2,1
// task 2 depends on 1


// const promiseTask1 = new Promise((res,rej)=>{
    
//     setTimeout(()=>{
//             let data = "Task 1 data"
//             console.log("Task 1 is completed...");
//             res(data)
//     },5000)
// })


// promiseTask1
// .then((task1Data)=>{
//     console.log(task1Data);
//     const promise2 = new Promise((res,rej)=>{
//         setTimeout(() => {
//             let data = "Task 2 data"
//                 console.log("Task 2 is completed...");
//                 res(data)
//         }, 1000);
//     })
//     return promise2
// })
// .then((task2Data)=>{
//     console.log(task2Data);
//     const promise3 = new Promise((res,rej)=>{
//         setTimeout(() => {
//             let data = "Task 3 data"
//                 console.log("Task 3 is completed...");
//                 res(data)
//         }, 1000);
//     })
//     return promise3
// })
// .then((task3Data)=>{
//     console.log(task3Data);
// })
// .catch((err)=>{
//     console.log(err);
// })









// async / await


// async function asynTask() {
//     const promise1 = new Promise((res,rej)=>{
//         setTimeout(() => {
//             let data = "Task 1 data"
//                 console.log("Task 1 is completed...");
//                 res(data)
//         }, 5000);
//     })
//     const task1 = await promise1
//     console.log(task1);



//     const promise2 = new Promise((res,rej)=>{
//         setTimeout(() => {
//             let data = "Task 2 data"
//                 console.log("Task 2 is completed...");
//                 res(data)
//         }, 1000);
//     })
//     const task2 = await promise2
//     console.log(task2);



//     const promise3 = new Promise((res,rej)=>{
//         setTimeout(() => {
//             let data = "Task 3 data"
//                 console.log("Task 3 is completed...");
//                 res(data)
//         }, 1000);
//     })
//     const task3 = await promise3
//     console.log(task3);
   
    
// }

// asynTask()






// async function asyncTask() {
//     const promise = new Promise((res,rej)=>{
//         rej("error")
//     })

//     try{
//         // working code

//         const result = await promise
//         console.log(result);

//     }catch(err){
//         // error
//         console.log(err);
//     }


// }

// asyncTask()