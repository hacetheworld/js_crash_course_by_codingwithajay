

// function greet(){

//   console.log("Hii Ajay.")

// }

// Function Calling

// greet()




// Parameter and arguments

// function greet(name="Unkown"){
//   console.log(`Hii ${name}`)

// }


// greet("Ajay")
// greet()



// Return


// function add(a=0,b=0){
// let result = 0
// result = a+b
// return result
// }


// let res = add(2,3)

// console.log(res);




// console.log("Hii this is ajay");




// Function expression


// let greet = function(name){
//   console.log(`Hii ${name}`);
// }


// greet("ajay")




// Arrow Function


// let greet = ()=>{
//   console.log("Hi from arrow function");
// }
// greet()





// CallBack Functions


// function Byy(){
//   console.log("Byy There :)");
// }

// function greet(name,fn){
//   console.log(`Hello My Name Is ${name}`);
//   fn()
// }


// greet("Ajay",()=>{
//   console.log("BYY THERE ....");
// })







// SCOPE 

let global_var = 1

function a(){
  function b(){
    console.log(global_var);
  }
  b()
}


a()























