var player1name=localStorage.getItem("player_1name");
var player2name=localStorage.getItem("player_2name");


var player1score=0;
var player2score=0;


document.getElementById("player1_name").innerHTML=player1name+" : ";
document.getElementById("player2_name").innerHTML=player2name+" : ";


document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;

document.getElementById("player_question").innerHTML="Question Turn: "+player1name;
document.getElementById("player_answer").innerHTML="Answer Turn: "+player2name;

function send(){
   
    get_no=document.getElementById("no1").value;
    get_no2=document.getElementById("no2").value;
    console.log(get_no);
    console.log(get_no2);
    actual_ans= parseInt(get_no) * parseInt(get_no2);


    ques_no="<h4 id='number_display'>Q."+get_no+" X "+get_no2+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_btn="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= ques_no+input_box+check_btn;
    document.getElementById("output").innerHTML=row ;
    document.getElementById("no1").value="";
    document.getElementById("no2").value="";
}

ques_turn="player 1";
ans_turn="player 2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
   


    if(get_answer==actual_ans){
        if (ans_turn=="player 1"){
            player1score=player1score+1;
            document.getElementById("player1_score").innerHTML=player1score;

        }
        else{
            player2score=player2score+1;
            document.getElementById("player2_score").innerHTML=player2score;
        }
    }
    if (ques_turn=="player 1") {
        ques_turn="player 2";
        document.getElementById("player_question").innerHTML="Question Turn- "+player2name;
    } else {
        ques_turn="player 1";
        document.getElementById("player_question").innerHTML="Question Turn- "+player1name;        
    }
    if (ans_turn=="player 1") {
        ans_turn="player 2";
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player2name;
    } else {
        ans_turn="player 1";
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player1name;
    }
    document.getElementById("output").innerHTML="";
}
