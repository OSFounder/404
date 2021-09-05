   //initialize application
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

function makeGoogleCredential(googleUser) {
  // [START auth_make_google_credential]
  var credential = firebase.auth.GoogleAuthProvider.credential(
    googleUser.getAuthResponse().id_token);
  // [END auth_make_google_credential]
   authWithCredential(credential);
}

function makeFacebookCredential(response) {
  // [START auth_make_facebook_credential]
  var credential = firebase.auth.FacebookAuthProvider.credential(
    response.authResponse.accessToken);
  // [END auth_make_facebook_credential]
   authWithCredential(credential);
}

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
      firebase.auth().onAuthStateChanged((user) => {
      if (user) {
         // User is signed in, see docs for a list of available properties
         // https://firebase.google.com/docs/reference/js/firebase.User
         var uid = user.uid;
         document.getElementById('email-field').value='';
         document.getElementById('pass-field').value='';
         /*
         try {
            document.getElementById('email_field').classList.add('hiden');
            document.getElementById('pass_field').classList.add('hiden');
         }
         catch(e) {
            console.error(e);
         }
         try {
            document.getElementById('log-in').classList.add('hiden');
         }
         catch(e) {
            console.error(e);
         }
          try {
            document.getElementById('redirect').classList.add('hiden');
         }
         catch(e) {
            console.error(e);
         }
         try {
            document.getElementById('forgot-pword').classList.add('hiden');
         }
         catch(e) {
            console.error(e);
         }
         try {
            document.getElementById('formR').classList.add('hiden');
         }
         catch(e) {
            console.error(e);
         }
         */
         if (firebase.auth().currentUser.emailVerified) {
              userUrl = new URL('https://404soundandlighting.tech/');
              userUrl.searchParams.append('UID', uid);
              userUrl.searchParams.append('accountVerified', 'true');
              window.location.href = userUrl;
         }
         else {
             userUrl = new URL('https://nexuslive.tech/userPage.html');
             userUrl.searchParams.append('UID', uid);
             userUrl.searchParams.append('accountVerified', 'false');
             window.location.href = userUrl;
             sendVerificationEmail();
         }
         

      }
      else {
         // User is signed out
         // ...
         /*
         try {
            document.getElementById('email_field').classList.remove('hiden');
            document.getElementById('pass_field').classList.remove('hiden');
         }
         catch(e) {
            console.error(e);
         }
         try {
            document.getElementById('log-in').classList.remove('hiden');
         }
         catch(e) {
            console.error(e);
         }
         try {
            document.getElementById('redirect').classList.remove('hiden');
         }
         catch(e) {
            console.error(e);
         }
         try {
            document.getElementById('forgot-pword').classList.remove('hiden');
         }
         catch(e) {
            console.error(e);
         }
         try {
            document.getElementById('formR').classList.remove('hiden');
         }
         catch(e) {
            console.error(e);
         }
         document.getElementById('log-in').classList.remove('hiden');
         document.getElementById('redirect').classList.remove('hiden');
         document.getElementById('forgot-pword').classList.remove('hiden');
         document.getElementById('formR').classList.remove('hiden');
         }
         */
  });
  // [END auth_state_listener]
}

function setLanguageCode() {
  // [START auth_set_language_code]
  firebase.auth().languageCode = 'en';
  // To apply the default browser preference instead of explicitly setting it.
  // firebase.auth().useDeviceLanguage();
  // [END auth_set_language_code]
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

function signInRedirect(provider) {
  // [START auth_signin_redirect]
  firebase.auth().signInWithRedirect(provider);
  // [END auth_signin_redirect]
}
