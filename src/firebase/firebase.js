import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  
  firebase.initializeApp(config);
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  
  export {firebase,database,googleAuthProvider as default};
  
//   database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses = [];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     })
//     .catch(()=>{

//     });

    // database.ref('expenses')
    //         .on('value',(snapshot)=>{
    //             const expenses = [];
    //         snapshot.forEach((childSnapshot)=>{
    //         expenses.push({
    //             id: childSnapshot.key,
    //             ...childSnapshot.val()
    //         });
    //     });
    //     console.log(expenses);
    //     },(e)=>{
    //           console.log("Something went wrong" , e);
    //     });


//     database.ref('expenses')
//     .on('child_removed',(snapshot)=>{
//         console.log("On removing child" , snapshot.key, snapshot.value);
//     },(e)=>{
//           console.log("Something went wrong" , e);
//     });    

//     database.ref('expenses')
//     .on('child_changed',(snapshot)=>{
//         console.log("On changed child" , snapshot.key, snapshot.value);
//     },(e)=>{
//           console.log("Something went wrong" , e);
//     }); 

//     database.ref('expenses')
//     .on('child_added',(snapshot)=>{
//         console.log("On added child" , snapshot.key, snapshot.value);
//     },(e)=>{
//           console.log("Something went wrong" , e);
//     }); 


//     database.ref('expenses').push({
//     desc: 'Pani Puri',
//     note: 'Sunday',
//     amount: 60,
//     createAt: 1987643
// });

//   database.ref('expenses').push({
//       desc: 'food',
//       note: 'saturday',
//       amount: 60,
//       createAt: 12345
//   });

//   database.ref('expenses').push({
//     desc: 'Dinner',
//     note: 'saturday',
//     amount: 600,
//     createAt: 12345
// });

// database.ref('expenses').push({
//     desc: 'Games',
//     note: 'Sunday',
//     amount: 60,
//     createAt: 1987643
// });

//   database.ref('notes').push({
//       title: 'todo',
//       body: 'workout'
//   });
//   database.ref('notes').push({
//     title: 'study',
//     lang: 'react'
// });

// database.ref('notes/LEZFNKbGCqkoHV1BsV4').update({
//     body: 'buy food' 
// });


//   const firebaseNotes = {
//     notes: {
//         id1: {
//             title: 'tit',
//             bod: 'se'
//         },
//         id2: {
//             title: 'tit2',
//             bod: 'se2'
//         }

//     }
//   };


//   database.ref('location/city')
//           .once('value')
//           .then((snapshot)=>{
//             const val = snapshot.val();
//             console.log(val);
//           })
//           .catch(()=>{
//             console.log("Error");
//           });
// const onValueChange = database.ref().on('value',(snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// },(e)=>{
//     console.log('Error with data fetching ' , e);
// });        

  //   database.ref().set({
//       name: 'GB',
//       age: 31,
//       stressLevel: 6,
//       job: {
//           title: 'UX',
//           company: 'google'
//       },
//       isSingle: false,
//       location: {
//           city: 'sgp',
//           country: 'singapore',
//           pin: 560017
//       }
//   }).then(()=>{
//       console.log('Data is saved');
//   }).catch((e)=>{
//       console.log("ERROR occured" , e);
//   });

//   database.ref('age').set(30);
//   database.ref('location/city').set('Bengaluru');
//   database.ref('attributes').set({
//           height: 172,
//           weight: 720
// }).then(()=>{
//     console.log("Done with attribute");
// }).catch(()=>{
//     console.log("Error with attribute");
// });

// // database.ref('isSingle').remove().then(()=>{
// //     console.log('removed isSisngle');
// // }).catch(()=>{
// //     console.log('Error in removing isSisngle');
// // });

// // database.ref('age').set(null).then(()=>{
// //     console.log('removed isSisngle');
// // }).catch(()=>{
// //     console.log('Error in removing isSisngle');
// // });

// database.ref().update({
//     name: 'Garima',
//     age: 39,
    
//     isSingle: null,
//     'location/city': 'BPL'
    
// });

// database.ref().update({
//     stressLevel: 9,
    
//     'job/company': 'Amazon',
    
//     'location/city': 'Seatle'
    
// });

// setTimeout(()=>{
//     database.ref('age').set(30);
// },5000);

// setTimeout(()=>{
//    database.ref().off(onValueChange);
// },10000);

// setTimeout(()=>{
//     database.ref('age').set(50);
// },15000);


// const onSubValueChange = database.ref().on('value',(snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.location.city}`);
// },(e)=>{
//    console.log('Error with data fetching ' , e);
// });
