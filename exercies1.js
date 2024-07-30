const people = [
    {
      name: "John Doe",
      age: 25,
      email: "john.doe@example.com",
      address: "123 Main St, Springfield, IL"
    },
    {
      name: "Jane Smith",
      age: 30,
      email: "jane.smith@example.com",
      address: "456 Elm St, Springfield, IL"
    },
    {
      name: "Alice Johnson",
      age: 28,
      email: "alice.johnson@example.com",
      address: "789 Maple St, Springfield, IL"
    },
    {
      name: "Bob Brown",
      age: 35,
      email: "bob.brown@example.com",
      address: "101 Oak St, Springfield, IL"
    },
    {
      name: "Charlie Davis",
      age: 22,
      email: "charlie.davis@example.com",
      address: "202 Pine St, Springfield, IL"
    },
    {
      name: "Diana Evans",
      age: 32,
      email: "diana.evans@example.com",
      address: "303 Birch St, Springfield, IL"
    },
    {
      name: "Frank Green",
      age: 27,
      email: "frank.green@example.com",
      address: "404 Cedar St, Springfield, IL"
    },
    {
      name: "Grace Harris",
      age: 29,
      email: "grace.harris@example.com",
      address: "505 Walnut St, Springfield, IL"
    },
    {
      name: "Henry Martin",
      age: 31,
      email: "henry.martin@example.com",
      address: "606 Chestnut St, Springfield, IL"
    },
    {
      name: "Ivy Lee",
      age: 26,
      email: "ivy.lee@example.com",
      address: "707 Ash St, Springfield, IL"
    }
  ];





function getNames(arr){
    let names = []
    for(let i=0;i<arr.length;i++){
        names.push(arr[i].email)
    }

    return names
}


let results = getNames(people)
console.log(results);