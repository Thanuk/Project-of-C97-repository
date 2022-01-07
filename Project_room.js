
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBRN2B2kE_5fnJXX4jSzu4OhjEb1e4-YYo",
  authDomain: "independent-app-db.firebaseapp.com",
  databaseURL: "https://independent-app-db-default-rtdb.firebaseio.com",
  projectId: "independent-app-db",
  storageBucket: "independent-app-db.appspot.com",
  messagingSenderId: "1020996949693",
  appId: "1:1020996949693:web:f5216705cbcc3be4ba09d4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    Teacher = localStorage.getItem("Teacher_name");
    Student = localStorage.getItem("Student_name");                                         
    actual_Student = Student.toUpperCase();

function addRoom(){
    room = document.getElementById("Add_Room_input").value;
	localStorage.setItem("Room Name", room);
	firebase.database().ref("/").child(room).update({
		Room_Name:room
	});
	window.location = "Projectlink_chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
    console.log("Room Names Enter in Kwitter are" + Room_names);
    row = "<div class='room_name' id="+Room_names +" onclick='redirectToRoomName(this.id)'> #"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
   //End code
   });
  });
 }
 getData();
 
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("Room Name", name);
  window.location = "Projectlink_chat_page.html";
} 
function logout(){
  localStorage.removeItem("Teacher_name");
  localStorage.removeItem("Student_name");
  localStorage.removeItem("Room Name");
  
  window.location = "index.html";
}

