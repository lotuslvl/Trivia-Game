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

var question4 = {
    questiontext:"How can Toph see?", 
    answerA:"Earthbending", 
    answerB:"Echolocation", 
    answerC:"Vibrations in the Air",
    answerD:"Badgermoles",
    correctAnswer: "A",
    correctChoice: "Earthbending",
    };

var question5 = {
    questiontext:"What is Asami not good at?", 
    answerA:"Bending", 
    answerB:"Fighting", 
    answerC:"Running a Business",
    answerD:"Engineering",
    correctAnswer: "A",
    correctChoice: "Bending",
    };

var question6 = {
    questiontext:"What is Uncle Iroh's favorite drink?", 
    answerA:"Firenation Wine", 
    answerB:"Jasmine Tea", 
    answerC:"Coffee",
    answerD:"Bison Milk",
    correctAnswer: "B",
    correctChoice: "Jasmine Tea",
    };

    var question7 = {
        questiontext:"What element does Korra have trouble bending?", 
        answerA:"Water", 
        answerB:"Fire", 
        answerC:"Earth",
        answerD:"Air",
        correctAnswer: "D",
        correctChoice: "Air",
        };
    
    var question8 = {
        questiontext:"What does Sokka NOT fight with?", 
        answerA:"Boomerang", 
        answerB:"Sword", 
        answerC:"Catapult",
        answerD:"War Ballon",
        correctAnswer: "C",
        correctChoice: "Catapult",
        };
    
    var question9 = {
        questiontext:"What is the name of the theatre troupe Zuko used to see as a kid?", 
        answerA:"Kyoshi Island Review", 
        answerB:"Dragon Wind Players", 
        answerC:"Ember Island Players",
        answerD:"Fire Nation Comedy Troupe",
        correctAnswer: "C",
        correctChoice: "Ember Island Players",
        };

    var question10 = {
        questiontext:"What is the best cartoon in the world?", 
        answerA:"Steven Universe", 
        answerB:"Simpsons", 
        answerC:"Pokemon",
        answerD:"Avatar the Last Airbender",
        correctAnswer: "A",
        correctChoice: "Steven Universe",
        };

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

            if (stopwatch.time<1){
                $(".result").text(" The clock timed out!");
                scoreforAnswers.push(false);
                stopwatch.stop();
                
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
            
            
                    if(totalscore < 60){
                        $(".gameovermessage").text(" You need to brush up on your Avatar knowledge");
                
                        }
                
                        else if(totalscore >= 60 && totalscore< 80 ){
                            $(".gameovermessage").text(" Pretty Good!");
                    
                            }
                
                        else {
                            $(".gameovermessage").text(" You are an Avatar Master!");
                    
                            }
                    stopwatch.stop();
                        
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
                    setTimeout(function(){displayQuestion()},5000);
            
                                
            
                    
                }
            
    
            }

            // DONE: increment time by 1, remember we cant use "this" here.
            stopwatch.time--;
            console.log(stopwatch.time);
               
            // DONE: Use the variable we just created to show the converted time in the "display" div.
            $("#display").text(stopwatch.time);

            console.log(stopwatch.time);
          },

    }


var questionlist=[question1,question2,question3,question4,question5,question6,question7,question8,question9,question10];

var questioncounter=0;

var userAnswers=[];
var scoreforAnswers=[];

var totalcorrectanswers=0;
var totalincorrectanswers=0;
var totalscore=0;



function calculateScore() {

 for (var i=0; i<=scoreforAnswers.length;i++) {

    if (scoreforAnswers[i]===true) {

        totalcorrectanswers=totalcorrectanswers+1;

    }

    else if (scoreforAnswers[i]===false) {

        totalincorrectanswers=totalincorrectanswers+1;

    }

 
}
totalscore= (totalcorrectanswers/questionlist.length)*100;

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
        $(".totalincorrectanswers").text("Total Wrong Answers: " + totalincorrectanswers);

        setTimeout(function(){$(".QuestionResultDisplay").hide()}, 5000);
        setTimeout(function(){$(".FinalScore").show()}, 5000);


        if(totalscore < 60){
            $(".gameovermessage").text(" You need to brush up on your Avatar knowledge");
    
            }
    
            else if(totalscore >= 60 && totalscore< 80 ){
                $(".gameovermessage").text(" Pretty Good!");
        
                }
    
            else {
                $(".gameovermessage").text(" You are an Avatar Master!");
        
                }
        stopwatch.stop();
            
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
        setTimeout(function(){displayQuestion()},5000);

                    

        
    }


    
});


    
});