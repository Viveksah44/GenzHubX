import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { getFirestore, collection, getDocs, query, where, orderBy } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

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

const container = document.getElementById("postsContainer");
const title = document.getElementById("categoryTitle");

// ⭐ URL Se Category Read
const urlParams = new URLSearchParams(window.location.search);
const CATEGORY = urlParams.get("cat");

// Title Show
title.innerText = CATEGORY + " Posts";

async function loadPosts() {

  const q = query(
    collection(db, "posts"),
    where("category", "==", CATEGORY),
    orderBy("createdAt", "desc")
  );

  const snap = await getDocs(q);

  container.innerHTML = "";

  snap.forEach(doc => {
    const p = doc.data();

   container.innerHTML += `

<div class="content-card">

   <img src="${p.image || 'images/default.jpg'}">


   <div class="card-body">

      <h3>${p.title}</h3>

      <p>
         ${p.content ? p.content.substring(0,120) + "..." : ""}
      </p>

     <a href="post.html?id=${doc.id}" class="btn">Read More</a>

   </div>

</div>



    `;
  });

}

loadPosts();
container.innerHTML += `
  <div class="content-card">

    <img src="${p.image || 'images/default.jpg'}">


    <div class="card-body">
      <h3>${p.title}</h3>

      <p class="category">${p.category}</p>

      <p class="desc">
        ${p.content ? p.content.substring(0, 120) + "..." : ""}
      </p>

      <<a href="post.html?id=${doc.id}" class="btn">Read More</a>
    </div>

  </div>
`;

