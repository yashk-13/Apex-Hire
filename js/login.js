// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "########################",
  authDomain: "Pawsperity-login.firebaseapp.com",
  projectId: "Pawsperity-login",
  storageBucket: "Pawsperity-login.appspot.com",
  messagingSenderId: "575186258493",
  appId: "1:575186258493:web:0ec358e56f20ec2dd97854",
  measurementId: "G-6LBJR582E3"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            location.href = 'index.html';
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            location.href = 'index.html';
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}