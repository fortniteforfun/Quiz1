question_turn="player1"
answer_turn="player2"
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualanswer=parseInt(number1)*parseInt(number2);
    questionnumber="<h4>"+number1+'X'+number2+"</h4>";
    inputbox="<br>Answer:<input type='text' id='inputcheckbox'>";
    checkbutton="<br><br><button class='btn btn-info onclick='check()'>Check</check>";
    row=questionnumber+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
function check(){
    get_answer=document.getElementById("inputcheckbox").value;
    if (get_answer==actualanswer) {
        if (answerturn=="player1") {
           player1_score=player1score+1;
           document.getElementById("player1_score").innerHTML=player1_score;

           answer_turn="player2"
           document.getElementById("player_answer".innerHTML="Answer turn-"+player2name);
           
        }
        else{
            
           player2_score=player2score+1;
           document.getElementById("player2_score").innerHTML=player2_score;

           answer_turn="player1"
           document.getElementById("player_answer".innerHTML="Answer turn-"+player1name);
        }
    
    if (question_turn=="player1") {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn-"+player2name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn-"+player1name   ;
    }
}}