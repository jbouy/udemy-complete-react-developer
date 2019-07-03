import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

// database.ref().set({
//   name: "James Bouy",
//   age: 39,
//   isSingle: false,
//   location: {
//     city: "Addis",
//     country: "United States"
//   }
// });

// //database.ref().set("This is my data.");

// database.ref("age").set(40);
// database.ref("location/city").set("Baton Rouge");

// database.ref("attributes").set({
//   height: 71,
//   weight: 180
// });
