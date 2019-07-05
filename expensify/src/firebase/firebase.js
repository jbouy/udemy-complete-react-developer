import * as firebase from "firebase";
import moment from "moment";

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref("expenses").on("child_removed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("expenses").on("child_changed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "Test 1 Description",
//   note: "Test 1",
//   amount: 1,
//   createdAt: moment().valueOf()
// });

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React Native, Angular, Python"
// });

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// setTimeout(() => {
//   database.ref().update({
//     "job/company": "Google"
//   });
// }, 3500);

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "James Bouy",
//     age: 39,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google"
//     },
//     location: {
//       city: "Addis",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved.");
//   })
//   .catch(error => {
//     console.log("This failed", error);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Removed `isSingle`");
//   })
//   .catch(error => {
//     console.log("Could not remove `isSingle`", error);
//   });
