import * as firebase from "firebase";
//import list from "./list.json";

const firebaseConfig = {
  apiKey: "AIzaSyCI7mrx8yr0k59j9UstYTKG1PlvomMd17c",
  authDomain: "to-do-list-whis-firebase.firebaseapp.com",
  databaseURL: "https://to-do-list-whis-firebase.firebaseio.com",
  projectId: "to-do-list-whis-firebase",
  storageBucket: "to-do-list-whis-firebase.appspot.com",
  messagingSenderId: "1030079460733",
  appId: "1:1030079460733:web:1d2a181bd19587c1"
};

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");

// todosRef.on("value", snapshot => {
//   console.log(snapshot.val());
// });

var db = firebase.firestore();
// Create a reference to the cities collection
var dbPersonList = db.collection("db");

console.log("dbPersonList", dbPersonList);
// dbPersonList
//   .doc("db")
//   .set(list)
//   .then(function() {
//     console.log("Document successfully written!");
//   });

// Create a query against the collection.
// var query = citiesRef
//   .where("title", "==", "first new task")
//   .get()
//   .then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//       return doc.data();
//     });
//   })
//   .catch(function(error) {
//     console.log("Error getting documents: ", error);
//   });

dbPersonList.where("name", "==", "Alex").onSnapshot(function(querySnapshot) {
  console.log("querySnapshot", querySnapshot);
  querySnapshot.forEach(function(doc) {
    // binded to the UI
    // allItems.push(doc.data().name);
    console.log(doc.data().name);
    return doc.data();
  });
});
