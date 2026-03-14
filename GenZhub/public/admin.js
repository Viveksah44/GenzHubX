import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { getFirestore, collection, addDoc } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

import { getStorage, ref, uploadBytes, getDownloadURL }
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-storage.js";

const firebaseConfig = { 
    apiKey: "AIzaSyAKBI29mOU04tkD-h_5SKwtMNl6tFBdX6I",
    authDomain: "genzhubx-e637d.firebaseapp.com",
    projectId: "genzhubx-e637d",
    storageBucket: "genzhubx-e637d.firebasestorage.app",
    messagingSenderId: "665985857226",
    appId: "1:665985857226:web:d73f513f4fabb7c6ef6633",
    measurementId: "G-QKCS13P3NS" };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const form = document.getElementById("postForm");

form.addEventListener("submit", async (e) => {

 e.preventDefault();

 const title = document.getElementById("title").value;
 const category = document.getElementById("category").value;
 const content = document.getElementById("content").value;

 const file = document.getElementById("imageFile").files[0];

 let imageURL = "";

 if(file){
   imageURL = await uploadImageToImgBB(file);
 }

 await addDoc(collection(db,"posts"),{
   title,
   category,
   content,
   image: imageURL,
   createdAt: new Date()
 });

 alert("Post uploaded");

});

async function uploadImageToImgBB(file){

 const apiKey = "0a09997901f5984cd85403f3254d568b";

 const formData = new FormData();

 formData.append("image", file);

 const response = await fetch(
   `https://api.imgbb.com/1/upload?key=${apiKey}`,
   {
     method: "POST",
     body: formData
   }
 );

 const data = await response.json();

 return data.data.url;

}