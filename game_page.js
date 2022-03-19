player1_name = localStorage.getItem("p1_name");
player2_name = localStorage.getItem("p2_name");
question_turn = "player1";
answer_turn = "player2";
player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn: " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn:" + player2_name;

function send()
{
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    new_word = get_word.toLowerCase();
    console.log("word in lowercase =" + word);
    len=word.length;
    
    for(var i=2;i<len; )
    {
        temp=word.charAt(i);
        word=word.replace(temp,"_");
        i=i+2;
    }

    console.log(word);

    question_word = "<h4 id='word_display'> Q. "+word+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'></input>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case -" + answer);
    if(answer == new_word)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn -" + player2_name;
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}
