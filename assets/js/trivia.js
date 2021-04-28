var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
var startTrivia = document.querySelector('#btnStartTrivia');
var questionObjs = []
var currentQuestion = 0;
var score = 0;
var missed = 0;
startTrivia.addEventListener('click', function () {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")

        .then(response => response.json())
        .then(data => {
            questionObjs = data.results;
            console.log(questionObjs);
            renderQuestion()
        })

})

function renderQuestion() {
    console.log(questionObjs[currentQuestion])
    document.querySelector(".question").innerHTML = questionObjs[currentQuestion].question
    var ind = Math.floor(Math.random() * 3.2) // random number 0-3
    var choices = ["!", "!", "!", "!"]
    var j = 0
    choices[ind] = questionObjs[currentQuestion].correct_answer;
    for (let i = 0; i < 4; i++) {
        if (choices[i] === "!") {
            choices[i] = questionObjs[currentQuestion].incorrect_answers[j]
            j++
        }
    }
    console.log(choices)
    document.querySelector('#a').innerHTML = choices[0]
    document.querySelector('#b').innerHTML = choices[1]
    document.querySelector('#c').innerHTML = choices[2]
    document.querySelector('#d').innerHTML = choices[3];
    document.querySelector('#a').setAttribute("data-value", choices[0])
    document.querySelector('#b').setAttribute("data-value", choices[1])
    document.querySelector('#c').setAttribute("data-value", choices[2])
    document.querySelector('#d').setAttribute("data-value", choices[3])
}
modalBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
})

document.getElementById("a").addEventListener("click", checkAnswer)
document.getElementById("b").addEventListener("click", checkAnswer)
document.getElementById("c").addEventListener("click", checkAnswer)
document.getElementById("d").addEventListener("click", checkAnswer)

function checkAnswer() {
    var currentSelection = this.getAttribute("data-value")
    console.log(this, currentSelection)
    if (currentSelection == questionObjs[currentQuestion].correct_answer) {
        score++
    } else {
        missed++
    }
    if (currentQuestion < questionObjs.length - 1) {
        currentQuestion++;
        renderQuestion()
    } else {
        displayScore()

    }
}


function displayScore() {
    modalBg.classList.remove('bg-active');
    document.getElementById("score").innerHTML = `<h1>Score:${score}</h1> <p>Missed: ${missed}</p>`
}


                // // need to make save score functional:
 function saveHS() {
     var name = nameEl.value.trim();

            // Saving HighScores to local drive
     if(name !== "") {
         //Save HighScores
         var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
         var newScore= {
             score: amount,
             name: name
         };
         highScores.push(newScore);
         window.localStorage.setItem("highscores", JSON.stringify(highScores));
         
     }
 }



    //create it,    modify it,    append it//
    //Loop through it all to keep track of high score//