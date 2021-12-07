

var firebaseConfig = {
      apiKey: "AIzaSyALPtenOI07lijErGgAGT4xRQYNHkc_Ty8",
      authDomain: "kwitter-4045a.firebaseapp.com",
      databaseURL: "https://kwitter-4045a-default-rtdb.firebaseio.com",
      projectId: "kwitter-4045a",
      storageBucket: "kwitter-4045a.appspot.com",
      messagingSenderId: "898424278002",
      appId: "1:898424278002:web:5550a33bdb9f5dcbeaf96b",
      measurementId: "G-NNTGSGHK8G"
    };
     firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();
user_name=localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "Welcome " + user_name+"!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose :"adding room name"
});
localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.HTML";
}
function getData() {
firebase.database().ref("/").on('value',function(snapshot) {
document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
Room_names=childKey;
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
 });
});
}
getData()



function redirectToRoomName(name)
{ 
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}