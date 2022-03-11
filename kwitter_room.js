const firebaseConfig = {
      apiKey: "AIzaSyBlKFy8LwOY85QwCoAypMJmtTTSt2kCBzY",
      authDomain: "kwitter-99364.firebaseapp.com",
      projectId: "kwitter-99364",
      storageBucket: "kwitter-99364.appspot.com",
      messagingSenderId: "68509975667",
      appId: "1:68509975667:web:00937746c637e1f2f69606"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
