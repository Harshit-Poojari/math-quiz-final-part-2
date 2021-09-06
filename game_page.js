questionturn = "player1";
answerturn = "player2";
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ": " ;
document.getElementById("player2_name").innerHTML = player2_name + ": " ;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn -" + player2_name;



function send() {
    number1 = document.getElementById("number1").value
   number2 = document.getElementById("number2").value;
  actualanswer = parseInt(number1)*parseInt(number2);
  
    console.log(actualanswer);
   
 
    questionNumber = "<h4>" + number1+ 'x'+number2+"</h4>";
    inputBox = "<br>Answer : <input type='text' id='inputcheckbox'>";
    checkButton = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button> ";
    row = questionNumber + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}
function check() {
  getanswer = document.getElementById("inputcheckbox").value;

 if(getanswer == actualanswer) {

    if (answerturn == "player1") 
    {
  update_player1_score = player1_score +1;
  document.getElementById("player1_score").innerHTML = update_player1_score;
    }
    else
    {
        update_player2_score = player2_score+1;
        document.getElementById("player2_score").innerHTML = update_player2_score;

    }  
  }
  if(questionturn == "player1") {
    questionturn = "player2";
    document.getElementById("player_question").innerHTML = "Question turn -" + player2_name;
  }
  else {
      questionturn = "player1";
      document.getElementById("player_question").innerHTML ="Question turn -" + player1_name;
  }
  if (answerturn == "player2") {
      answerturn = "player1";
      document.getElementById("player_answer").innerHTML = "Answer turn -" + player1_name;
  }
  else {
      answerturn = "player2";
      document.getElementById("player_answer").innerHTML = "Answer turn -" + player2_name;
     }
    }