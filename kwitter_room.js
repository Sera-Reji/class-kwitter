const firebaseConfig = {
      apiKey: "AIzaSyAGmBqb71B21nmoY1faeU5GHsex4-E2bZA",
      authDomain: "kwitter-b4683.firebaseapp.com",
      databaseURL: "https://kwitter-b4683-default-rtdb.firebaseio.com",
      projectId: "kwitter-b4683",
      storageBucket: "kwitter-b4683.appspot.com",
      messagingSenderId: "835929386129",
      appId: "1:835929386129:web:4e2357c2c706269238a330"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!";

    function addRoom(){
          var room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
          localStorage.setItem("room_name",room_name);
          window.location="kwitterpage.html";
    }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name = "+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("name",name);
      window.location="kwitterpage.html";
}
