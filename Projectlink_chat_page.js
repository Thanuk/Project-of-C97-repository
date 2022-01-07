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

     Student_name = localStorage.getItem("Student_name");
     Teacher = localStorage.getItem("Teacher_name");
     room_name = localStorage.getItem("Room Name");

function send()
{
      msg_from_the_input = document.getElementById("msg_input").value;
      project_input = document.getElementById("project_input").value;
       firebase.database().ref(room_name).push({
            Teacher:Teacher,
            Name:Student_name,
            Project:project_input,
            Message:msg_from_the_input,
            Like:0
      });

      document.getElementById("msg_input").value = "";
}

 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
            console.log(message_data);

            name = message_data['Name'];
            Teacher_name=message_data['Teacher'];
            Message = message_data['Message'];
            Like = message_data['Like'];
            Project = message_data['Project']

         username_with_tag = "<h4> Student: " +name+ "</h4>";
         Teachername_with_tag="<h4> Teacher: "+Teacher_name+"</h4>";
         project_with_tag = "<h4>"+Project+"</h4>";
         message_with_tag = "<h4 class = message_h4>"+Message+"</h4>";
         like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+Like+" onclick = 'updateLike(this.id)'>";
            span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like : "+Like+"</span></button><hr>";
         row = username_with_tag + Teachername_with_tag + message_with_tag + project_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;   
//End code
      } });  }); }
 getData();

function updateLike(message_id){
      console.log("like button clicked : " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log("Updated Likes = " + updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            Like:updated_likes
      });
}

function logout(){
      localStorage.removeItem("Teacher_name");
      localStorage.removeItem("Student_name");
      localStorage.removeItem("Room Name");
      
      window.location = "index.html";
}

