import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { getFirestore, collection, getDocs, query, orderBy } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAKBI29mOU04tkD-h_5SKwtMNl6tFBdX6I",
    authDomain: "genzhubx-e637d.firebaseapp.com",
    projectId: "genzhubx-e637d",
    storageBucket: "genzhubx-e637d.firebasestorage.app",
    messagingSenderId: "665985857226",
    appId: "1:665985857226:web:d73f513f4fabb7c6ef6633",
    measurementId: "G-QKCS13P3NS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const postsContainer = document.getElementById("postsContainer");

async function loadPosts() {

  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  postsContainer.innerHTML = "";

  querySnapshot.forEach((doc) => {

    const post = doc.data();

    const postHTML = `
      <div style="border:1px solid #ccc; padding:15px; margin-bottom:10px;">
        <h3>${post.title}</h3>
        <p><b>Category:</b> ${post.category}</p>
        <p>${post.content}</p>
      </div>
    `;

    postsContainer.innerHTML += postHTML;
  });

}

loadPosts();
