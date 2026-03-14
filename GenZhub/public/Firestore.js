import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { getFirestore, collection, addDoc } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

import { getAnalytics } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";



  const firebaseConfig = {
    apiKey: "AIzaSyAKBI29mOU04tkD-h_5SKwtMNl6tFBdX6I",
    authDomain: "genzhubx-e637d.firebaseapp.com",
    projectId: "genzhubx-e637d",
    storageBucket: "genzhubx-e637d.firebasestorage.app",
    messagingSenderId: "665985857226",
    appId: "1:665985857226:web:d73f513f4fabb7c6ef6633",
    measurementId: "G-QKCS13P3NS"
  };
 






  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log("Firebase Connected");

  // Import the functions you need from the SDKs you need
 

const db = getFirestore(app);

// async function testSave() {
//   try {
//     const docRef = await addDoc(collection(db, "posts"), {
//       title: "First Post Test",
//       category: "Anime",
//       createdAt: new Date()
//     });

//     console.log("Post Saved ID:", docRef.id);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// testSave();
import { getStorage, ref, uploadBytes, getDownloadURL }
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-storage.js";

const file = document.getElementById("imageFile").files[0];

let imageURL = "";

if(file){

  const imageRef = ref(storage, "postImages/" + Date.now() + "_" + file.name);

  await uploadBytes(imageRef, file);

  imageURL = await getDownloadURL(imageRef);

}

await addDoc(collection(db, "posts"), {
  title,
  category,
  content,
  image: imageURL,
  createdAt: new Date()
});

const storage = getStorage(app);

