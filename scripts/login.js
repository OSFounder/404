
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

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function sendProfile() {
  window.location.href = userUrl;
}

function openAcord() {
  if (document.getElementById("login-accordian").classList.contains("hidden")) {
    document.getElementById("login-accordian").classList.remove("hidden");

    sleep(120000).then(() => {
         document.getElementById("login-accordian").classList.add("hidden");
    });
}
else {
  document.getElementById("login-accordian").classList.add("hidden");
 }
}
window.onclick = function(event) {
  document.getElementById("login-accordian").classList.add("hidden");
}

function authStateListener() {
  // [START auth_state_listener]
  
      firebase.auth().onAuthStateChanged((user) => {
      if (user) {
         var uid = user.uid;
         try {
           document.getElementById("profile").classList.remove("hidden");
           document.getElementById("login-button").classList.add("hidden");
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
         }
         else {
             userUrl = new URL('https://404soundandlighting.tech/profile');
             userUrl.searchParams.append('UID', uid);
             userUrl.searchParams.append('accountVerified', 'false');
         }
         

      }
      else {
         // User is signed out
         // ...
         try {
           document.getElementById("login-accordian").classList.add("hidden");
           document.getElementById("profile").classList.add("hidden");
           document.getElementById("login-button").classList.remove("hidden");
           document.getElementById("email-field").classList.remove("hidden");
           document.getElementById("pass-field").classList.remove("hidden");
           document.getElementById("forgot-pass").classList.remove("hidden");
           document.getElementById("log-out").classList.add("hidden");
           document.getElementById('log-in').classList.remove("hidden");
           document.getElementById('register').classList.remove("hidden");
           document.getElementById("uname").classList.add("hidden");
           document.getElementById("sign-up").classList.add("hidden");
           document.getElementById("sign-in").classList.add("hidden");
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
      if (document.getElementById("tickbox").checked) {
        setPersistenceSessionHigh();
      } else {
        setPersistenceSessionLow();
      }
        
});
}
