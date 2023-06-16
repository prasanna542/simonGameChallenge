
var buttonColors= ["red","blue","green","yellow"];
var cpuSequence=[];
var userClickedPattern=[];

var levelNo=0;
var started= false;

gameStart();

function gameStart(){
    $("body").keypress(function(){
        if(levelNo===0){
            levelNo= levelNo+1;
            $("h1").text("level "+ levelNo);
            started= true;
            nextSequence();
            
        }})
}

$(".btn").click(function(){
    if (started === true){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("/sounds/"+userChosenColour+".mp3");
    audio.play();

    checkPattern();
    }
});

function checkPattern() {
    if(userClickedPattern[(userClickedPattern.length)-1]=== cpuSequence[(userClickedPattern.length-1)]){
        if(userClickedPattern.length===cpuSequence.length){
            levelNo=levelNo+1;
            $("h1").text("level "+ levelNo);
            userClickedPattern=[];
            // delay(100);
            nextSequence();
        }
    }
    else{
        startOver();
    }
};

function startOver(){
    levelNo=0;
    started= false;
    userClickedPattern=[];
    cpuSequence=[];
    $("h1").text("start again by pressing any key");
    $(".btn").click(gameStart());
 
}


function nextSequence(){
    var randomNo= Math.random();
    randomNo= Math.floor(randomNo * 4);
    // return r;
    var randomChosenColor = buttonColors[randomNo];
    cpuSequence.push(randomChosenColor);

    $("#" + randomChosenColor).delay(300).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("/sounds/"+randomChosenColor+".mp3");
    audio.play();

    

}

