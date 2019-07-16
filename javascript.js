
var question1 = {
    questiontext:"Who was the Avatar before Aang?", 
    answerA:"Kyoshi", 
    answerB:"Roku", 
    answerC:"Yengchen",
    answerD:"Korra",
    correctAnswer: "B",
    correctChoice: "Roku",
    };

var question2 = {
    questiontext:"Who was the first Avatar?", 
    answerA:"Wan", 
    answerB:"Aang", 
    answerC:"Sozin",
    answerD:"Bumi",
    correctAnswer: "A",
    correctChoice: "Wan",
    };

var question3 = {
    questiontext:"What nation was Pipsqueak from?", 
    answerA:"Fire", 
    answerB:"Water", 
    answerC:"Air",
    answerD:"Earth",
    correctAnswer: "D",
    correctChoice: "Earth",
    };

var questionlist=[question1,question2,question3];

var questioncounter=0;

var userAnswers=[];
var scoreforAnswers=[];

var totalcorrectanswers=0;
var totalincorrectanswers=0;
var totalscore=0;

$(document).ready(function(){

function displayQuestion() {

    $(".question").text(questionlist[questioncounter].questiontext)
    $("#A").text(questionlist[questioncounter].answerA);
    $("#B").text(questionlist[questioncounter].answerB);
    $("#C").text(questionlist[questioncounter].answerC);
    $("#D").text(questionlist[questioncounter].answerD);

}

function calculateScore() {

 for (var i=0; i<=scoreforAnswers.length;i++) {

    if (scoreforAnswers[i]==true) {

        totalcorrectanswers=totalcorrectanswers+1;

    }

    else if (scoreforAnswers[i]==false) {

        totalincorrectanswers=totalincorrectanswers+1;

    }

 
}

totalscore= (totalcorrectanswers/questionlist.length)*100;

return totalscore;
}


$(".QuestionDisplay").hide();
$(".QuestionResultDisplay").hide();
$(".FinalScore").hide();
$(".StartScreen").show();

    
$(".startgame").on("click", function(event) {

    $(".QuestionDisplay").show();
    $(".QuestionResultDisplay").hide();
    $(".StartScreen").hide();
    displayQuestion();

    
});



$(".answerbutton").on("click", function(event) {

    var currentAnswer=$(this).attr("data-type");
    alert(currentAnswer);

    userAnswers.push(currentAnswer);

    
    
    if (currentAnswer===questionlist[questioncounter].correctAnswer) {
        scoreforAnswers.push(true);
        $(".result").text(" You were right!");


    }


    else {
        $(".result").text(" You were wrong!");
        scoreforAnswers.push(false);

    }

    if(questioncounter===(questionlist.length-1)) {

        $(".QuestionDisplay").hide();
        $(".QuestionResultDisplay").hide();

        $(".correctanswer").text(" The correct answer was " + questionlist[questioncounter].correctChoice );
        questioncounter = questioncounter+1;
        $(".QuestionDisplay").hide();
        $(".QuestionResultDisplay").show();

        calculateScore();

        $(".finalscorenumber").text(totalscore + "%");
        $(".totalcorrectanswers").text("Total Correct Answers: " + totalcorrectanswers);
        $(".totalincorrectanswers").text("Total Wrong Answers: " +totalcorrectanswers);

        setTimeout(function(){$(".QuestionResultDisplay").hide()}, 5000);
        setTimeout(function(){$(".FinalScore").show()}, 5000);
       
        
        
            
    }

    else {

        $(".correctanswer").text(" The correct answer was " + questionlist[questioncounter].correctChoice );
        questioncounter = questioncounter+1;
        $(".QuestionDisplay").hide();
        $(".QuestionResultDisplay").show();
        setTimeout($(".QuestionDisplay").show, 10000);
        setTimeout(function(){$(".QuestionDisplay").show()}, 5000);
        setTimeout(function(){$(".QuestionResultDisplay").hide()}, 5000);
        displayQuestion();
    }


    
});


    
});