// console.log("Destructuring");

// const person = {
//     name: 'GB',
//     age: 30,
//     location: {
//         city : 'Bengaluru',
//         temp: 33
//     } 
// };

// // const name = person.name;
// // const age = person.age;

// const {name = "anonymous" , age} = person;

// console.log(`${name} is ${age}`);

// const {city, temp : temperature} = person.location;

// console.log(`It's ${temperature} degrees in ${city}`);

// const book = {
//     title: "APJ",
//     Author: "Kalam",
//     Publisher: {
//         name: "PG"
        
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.Publisher; 

// console.log(publisherName);


// -------------ARRAY DESTRUCTURING ------------

const address = ['A747', 'Ashoka Garden', 'Bhopal', 'MP', '462023'];
const [,area,,state = "New York"] = address;

console.log(`Address ${area} in ${state}`);

const item = ['Coffee(Iced)','2' , '2.5' , '2.75'];

const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);

