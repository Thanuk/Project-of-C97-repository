function addStudent(){
    Student_name = document.getElementById("Student_Login").value;

    localStorage.setItem("Student_name", Student_name);

    Teacher_name = document.getElementById("Teacher_Login").value;

    localStorage.setItem("Teacher_name", Teacher_name)

    window.location = "Project_room.html";
}