
const binSignIn = document.getElementById("modal-form-submit");
try {
var db = firebase.firestore();
}
catch {
  console.error('error loading firestore')
}

authStateListener();

function signInWithEmailPassword(email, password) {                    
  // [START auth_signin_password]
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
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
      //verified
      window.alert('Verification sent, check your inbox (may be in your spam files)');
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

      db.collection("users").add({
          first: fname,
          last: lname,
          displayName: dname
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.uid);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
     
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
 binSignIn.addEventListener("click", e=> {
      signInWithEmailPassword();
      var email = document.getElementById("email-field").value;
      email = email.toLowerCase();
      var password = document.getElementById("pass-field").value;
      makeEmailCredential(email, password);
      authStateListener();
}); } catch(e) {
  console.error(e);
}

try {
   binSignUp.addEventListener('click', e=> {
      signOut();
      signUpWithEmailPassword();
      var email = txtEmail.value;
      var password = txtPword.value;
      makeEmailCredential(email, password);
      document.getElementById('email_field').value;
      document.getElementById('pass_field').value;
      sendVerificationEmail()
      authStateListener();
   });
   }
 catch(e) {
   console.error(e);
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
   document.getElementById('logOut').addEventListener('click', e=> {
       signOut();
       authStateListener();
       window.location.href = 'https://404soundandlighting.tech/';
   });
}
catch {
   console.log('ERROR 404: Sign Out not located.')
}
