import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { getFirestore, doc, getDoc } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyAKBI29mOU04tkD-h_5SKwtMNl6tFBdX6I",
    authDomain: "genzhubx-e637d.firebaseapp.com",
    projectId: "genzhubx-e637d",
    storageBucket: "genzhubx-e637d.firebasestorage.app",
    messagingSenderId: "665985857226",
    appId: "1:665985857226:web:d73f513f4fabb7c6ef6633",
    measurementId: "G-QKCS13P3NS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ⭐ GET POST ID FROM URL
const urlParams = new URLSearchParams(window.location.search);
const postID = urlParams.get("id");

async function loadPost(){

 if(!postID){
   document.getElementById("postsContainer").innerHTML = "Post not found";
   return;
 }

 const docRef = doc(db,"posts",postID);
 const docSnap = await getDoc(docRef);

 if(docSnap.exists()){

   const post = docSnap.data();

   document.getElementById("postsContainer").innerHTML = `
     <div class="single-post">
       <h1>${post.title}</h1>
       <p>${post.content}</p>

     </div>
     <div class="card-image">
 <img src="${post.image}">
</div>
   `;
 }
 else{
   document.getElementById("postsContainer").innerHTML = "Post not found";
 }

}

loadPost();