//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

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


    function gameOverChecker(){

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
            $(".totalincorrectanswers").text("Total Wrong Answers: " + totalincorrectanswers);
    
            setTimeout(function(){$(".QuestionResultDisplay").hide()}, 5000);
            setTimeout(function(){$(".FinalScore").show()}, 5000);
           
            questioncounter=0;
    
            userAnswers=[];
            scoreforAnswers=[];
    
            totalcorrectanswers=0;
            totalincorrectanswers=0;
            totalscore=0;
            
                
        }
    
        else {
    
            $(".correctanswer").text(" The correct answer was " + questionlist[questioncounter].correctChoice );
            questioncounter = questioncounter+1;
            $(".QuestionDisplay").hide();
            $(".QuestionResultDisplay").show();
            setTimeout($(".QuestionDisplay").show, 10000);
            setTimeout(function(){$(".QuestionDisplay").show()}, 5000);
            setTimeout(function(){$(".QuestionResultDisplay").hide()}, 5000);
            setTimeout(function(){stopwatch.stop()},5000);
            setTimeout(function(){stopwatch.reset()},5000);
            setTimeout(function(){stopwatch.start()},5000);
            setTimeout(function(){displayQuestion()},5000);
    
    
            
        }
    }
    
    var stopwatch=
    {
        time: 5,

        start: function() {
            console.log("stopwatch started");

            // DONE: Use setInterval to start the count here and set the clock to running.
            if (!clockRunning) {
              intervalId = setInterval(stopwatch.count, 1000);
              clockRunning = true;
            }
          },
          reset: function() {

            stopwatch.time = 5;
        
            // DONE: Change the "display" div to "00:00."
            $("#display").text("5");
        
            // DONE: Empty the "laps" div.
        
          },
          stop: function() {

            // DONE: Use clearInterval to stop the count here and set the clock to not be running.
            clearInterval(intervalId);
            clockRunning = false;
          },
          count: function() {

            if (stopwatch.time<0){
                stopwatch.stop();
                stopwatch.reset();
                $(".result").text(" Out of Time!");
                scoreforAnswers.push(false);
                gameOverChecker();
                

            }

            // DONE: increment time by 1, remember we cant use "this" here.
            stopwatch.time--;
            console.log(stopwatch.time);
               
            // DONE: Use the variable we just created to show the converted time in the "display" div.
            $("#display").text(stopwatch.time);

            consolelog(stopwatch.time);
          },

    }


var questionlist=[question1,question2,question3];

var questioncounter=0;

var userAnswers=[];
var scoreforAnswers=[];

var totalcorrectanswers=0;
var totalincorrectanswers=0;
var totalscore=0;

$(document).ready(function(){

function displayQuestion() {
    console.log("starting stopwatch is starting");

    //starttime
    stopwatch.start();

    $(".question").text(questionlist[questioncounter].questiontext)
    $("#A").text(questionlist[questioncounter].answerA);
    $("#B").text(questionlist[questioncounter].answerB);
    $("#C").text(questionlist[questioncounter].answerC);
    $("#D").text(questionlist[questioncounter].answerD);

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

    stopwatch.stop();
    stopwatch.reset();

 

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

    gameOverChecker();

});


    
});