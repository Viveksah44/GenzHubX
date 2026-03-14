document.querySelectorAll('.sidebar').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.hamburger-menu input').checked = false;
    });
});

document.addEventListener('click', function (e) {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger-menu');
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        document.querySelector('.hamburger-menu input').checked = false;
    }
});

function searchContent() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.content-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';

        document.querySelector('.content-grid').style.display = 'grid';

    }, );
});



const backToTopBtn = document.querySelector('.back-to-top');

backToTopBtn.addEventListener('click', () =>{
    window.scrollTo({top: 0, behavior : 'smooth'});

});

window.addEventListener('scroll', () =>{
    if(window.scrollY > 300){
        backToTopBtn.style.display ='block';
    } else{
        backToTopBtn.style.display ='none';
    }
});


// // Firebase config (apne project ka config daal)
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();
  
//   // Form submit logic
//   document.getElementById('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const formData = {
//       name: this.name.value,
//       email: this.email.value,
//       message: this.message.value,
//       timestamp: new Date()
//     };
  
//     db.collection('messages').add(formData)
//       .then(() => {
//         alert('Message sent successfully!');
//         this.reset();
//       })
//       .catch(error => {
//         console.error('Error sending message:', error);
//         alert('Error sending message.');
//       });
//   });



