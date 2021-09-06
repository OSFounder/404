const firebaseConfig = {
  apiKey: "AIzaSyAA8rnyKErsIZCN2itWfZMD5iu1WK-Odls",
  authDomain: "sal-b2f24.firebaseapp.com",
  projectId: "sal-b2f24",
  storageBucket: "sal-b2f24.appspot.com",
  messagingSenderId: "239998194766",
  appId: "1:239998194766:web:7e7e7800e9000c025b9f1f",
  measurementId: "G-YM1VPPHRVT"
};
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
/*
try {
var db = firebase.firestore();
}
catch {
  console.error('error loading firestore')
}
*/

const txtEmail = document.getElementById('email-field');
const txtPword = document.getElementById('pass-field');
const binSignIn = document.getElementById('log-in');
const binSignUp = document.getElementById('sign-up');
const binForgot = document.getElementById('forgot-pass');
const binSignOut = document.getElementById('log-out');
const binRedirect = document.getElementById('register');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
var dname = document.getElementById('dname');

function signInWithEmailPassword() {                    
  var email = txtEmail.value;
  var email = email.toLowerCase();
  var password = txtPword.value;
  // [START auth_signin_password]
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      var email = txtEmail.value;
      var password = txtPword.value;
      makeEmailCredential(email, password);
      authStateListener();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Password or Email wrong, try again');
    });
  // [END auth_signin_password]
}

const sendVerificationEmail = () => {
   firebase.auth().currentUser.sendEmailVerification()
   .then(() => {
   })
   .catch( error => {
          console.error('error');
          })
}


function signUpWithEmailPassword() {
  var email = txtEmail.value;
  var password = txtPword.value;
  // [START auth_signup_password]
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = firebase.auth().currentUser;
      var email = txtEmail.value;
      var password = txtPword.value;
      makeEmailCredential(email, password);
      sendVerificationEmail()
      authStateListener();
     
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_signup_password]
}


function sendPasswordReset() {
  const email = txtEmail.value;
  // [START auth_send_password_reset]
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
      window.alert('Email sent, check your inbox (the email may be in your spam files)');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_send_password_reset]
}
try {
   binSignIn.addEventListener('click', e=> {
      signInWithEmailPassword();
   });
}
catch {
   console.error('ERROR 404: Sign In not found.');
}

try {
   binSignUp.addEventListener('click', e=> {
      signUpWithEmailPassword();
   });
   }
 catch(e) {
   console.error(e);
 }
try {
  binRedirect.addEventListener('click', e=> {
    binForgot.classList.add("hidden");
    binSignOut.classList.add("hidden");
    binSignIn.classList.add("hidden");
    binRedirect.classList.add("hidden");
    document.getElementById("uname").classList.remove("hidden");
    document.getElementById("sign-up").classList.remove("hidden");
    document.getElementById("sign-in").classList.remove("hidden");
  }); } catch {
    console.error("ERROR 404: Redirect not found.");
  }
try {
  document.getElementById("sign-in").addEventListener('click', e=> {
    binForgot.classList.remove("hidden");
    binSignIn.classList.remove("hidden");
    binRedirect.classList.remove("hidden");
    binSignOut.classList.add("hidden");
    document.getElementById("uname").classList.add("hidden");
    document.getElementById("sign-up").classList.add("hidden");
    document.getElementById("sign-in").classList.add("hidden");
  }); } catch {
    console.error("ERROR 404: Redirect not found.");
  }

try {
   binForgot.addEventListener('click', e=> {
      sendPasswordReset();
   });
}
catch {
   console.log('ERROR 404: Forgot not located.')
}
try {
   document.getElementById('log-out').addEventListener('click', e=> {
       signOut();
       authStateListener();
   });
}
catch {
   console.log('ERROR 404: Sign Out not located.')
}
