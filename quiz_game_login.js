username1=localStorage.getItem("name1");
username2=localStorage.getItem("name2");

userscore1=0;
userscore2=0;

document.getElementById("userlabel1").innerHTML=username1+": ";
document.getElementById("userlabel2").innerHTML=username2+": ";

document.getElementById("userscore1").innerHTML=userscore1;
document.getElementById("userscore2").innerHTML=userscore2;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    correctans=parseInt(number1)*parseInt(number2);
    question_number="<h4>"+number1+" × "+number2+"</h4>";
    input="<br>Answer: <input type='text' id='inputcheck'>";
    checkbutton="<br><br><button onclick='check()' class='btn btn-info'>Check</button>";
    row=question_number+input+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

questionturn="player1";
answerturn="player2";

function check(){
    getanswer=document.getElementById("inputcheck").value;
    if(getanswer==correctans){
        if(answerturn="player1"){
            scoreupdate1=userscore1+1;
            document.getElementById("userscore1").innerHTML=scoreupdate1;
        }
        else{
            scoreupdate2=userscore2+1;
            document.getElementById("userscore2").innerHTML=scoreupdate2; 
        }
    }
    if(questionturn=="player1"){
        questionturn="player2";
        document.getElementById("userquestion").innerHTML="Question Turn - "+username2;
    }
    else{
        questionturn=="player1";
        document.getElementById("userquestion").innerHTML="Question Turn - "+username1;
    }
}