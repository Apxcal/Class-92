function adduser(){
    var user1=document.getElementById("user1").value;
    var user2=document.getElementById("user2").value;
    localStorage.setItem("name1", user1);
    localStorage.setItem("name2", user2);
    window.location.replace("quiz_game.html");
}