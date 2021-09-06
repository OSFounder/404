
function makeEmailCredential(email, password) {
  // [START auth_make_email_credential]
  var credential = firebase.auth.EmailAuthProvider.credential(email, password);
  // [END auth_make_email_credential]
   authWithCredential(credential);
}

function signOut() {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  // [END auth_sign_out]
}

function authStateListener() {
  // [START auth_state_listener]
     try {
         document.getElementById("email-field").classList.add("hidden");
         document.getElementById("pass-field").classList.add("hidden");
         document.getElementById("forgot-pass").classList.add("hidden");
         document.getElementById("log-out").classList.add("hidden");
         document.getElementById('log-in').classList.add("hidden");
         document.getElementById('register').classList.add("hidden");
         document.getElementById("uname").classList.remove("hidden");
         document.getElementById("sign-up").classList.remove("hidden");
         document.getElementById("sign-in").classList.remove("hidden");
      }
      catch(e) {
         console.error(e);
      }
  
      firebase.auth().onAuthStateChanged((user) => {
      if (user) {
         // User is signed in, see docs for a list of available properties
         // https://firebase.google.com/docs/reference/js/firebase.User
         var uid = user.uid;
         document.getElementById('email-field').value='';
         document.getElementById('pass-field').value='';
         try {
           document.getElementById("email-field").classList.add("hidden");
           document.getElementById("pass-field").classList.add("hidden");
           document.getElementById("forgot-pass").classList.add("hidden");
           document.getElementById("log-out").classList.remove("hidden");
           document.getElementById('log-in').classList.add("hidden");
           document.getElementById('register').classList.add("hidden");
           document.getElementById("uname").classList.remove("hidden");
           document.getElementById("sign-up").classList.remove("hidden");
           document.getElementById("sign-in").classList.remove("hidden");
         }
         catch(e) {
            console.error(e);
         }
         if (firebase.auth().currentUser.emailVerified) {
              userUrl = new URL('https://404soundandlighting.tech/profile');
              userUrl.searchParams.append('UID', uid);
              userUrl.searchParams.append('accountVerified', 'true');
              window.location.href = userUrl;
         }
         else {
             userUrl = new URL('https://404soundandlighting.tech/profile');
             userUrl.searchParams.append('UID', uid);
             userUrl.searchParams.append('accountVerified', 'false');
             window.location.href = userUrl;
             sendVerificationEmail();
         }
         

      }
      else {
         // User is signed out
         // ...
         try {
           document.getElementById("email-field").classList.remove("hidden");
           document.getElementById("pass-field").classList.remove("hidden");
           document.getElementById("forgot-pass").classList.remove("hidden");
           document.getElementById("log-out").classList.add("hidden");
           document.getElementById('log-in').classList.remove("hidden");
           document.getElementById('register').classList.remove("hidden");
           document.getElementById("uname").classList.remove("hidden");
           document.getElementById("sign-up").classList.remove("hidden");
           document.getElementById("sign-in").classList.remove("hidden");
         }
         catch(e) {
            console.error(e);
         }
      }
      });
  // [END auth_state_listener]
}

function authWithCredential(credential) {
  // [START auth_signin_credential]
  // Sign in with the credential from the user.
  firebase.auth()
    .signInWithCredential(credential)
    .then((result) => {
      // Signed in 
      // ...
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
       .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // ...
    });
  // [END auth_signin_credential]
}
