let modalBtn = document.querySelector('.modal-btn');
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.modal-close');
let startTrivia = document.querySelector('#startTrivia');
let questionObjs = []
let currentQuestion = 0;
let score = 0;
let missed = 0;
let counter = 0
let modalState = false;
startTrivia.addEventListener('click', function () {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")

        .then(response => response.json())
        .then(data => {
            questionObjs = data.results;
            console.log(questionObjs);
            resetModal()
            renderQuestion()
            modalBg.classList.add('bg-active');
        })

})

function resetModal() {
  if(!modalState) {
    currentQuestion = 0;
    score = 0;
    missed = 0;
    counter = 0;
    console.log("RESETTING ALL THE VALUES",currentQuestion);
    displayScore()
  }
}

function renderQuestion() { 
    console.log(questionObjs[currentQuestion])
    document.querySelector(".question").innerHTML = questionObjs[currentQuestion].question
    let randomNumber = Math.floor(Math.random() * 3.2) // random number 0-3
    let choices = ["!", "!", "!", "!"]
    let j = 0
    choices[randomNumber] = questionObjs[currentQuestion].correct_answer;
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

modalClose.addEventListener('click', function () {
    console.log("the modal fired thank you")
    modalBg.classList.remove('bg-active');
    modalState = false;
    console.log("SETTING MODAL STATE TO FALSE ")

})

document.getElementById("a").addEventListener("click", checkAnswer)
document.getElementById("b").addEventListener("click", checkAnswer)
document.getElementById("c").addEventListener("click", checkAnswer)
document.getElementById("d").addEventListener("click", checkAnswer)

function checkAnswer() {
    let currentSelection = this.getAttribute("data-value")
    console.log(this, questionObjs.length)
    if(currentQuestion <= questionObjs.length - 1) {
      console.log(`THE CURRENT QUESTION IS ${currentQuestion}`)
      if (currentSelection == questionObjs[currentQuestion].correct_answer ) {
          if(counter < 5) {
            score++
            counter++
            displayScore()
            console.log("THIS IS THE COUNTER",counter)
            
          }
      } else {
          if(counter < 5) {
            missed++
            counter++
            displayScore()
            console.log("THIS IS THE COUNTER",counter)
          }
      }
      
      if (currentQuestion < questionObjs.length - 1) {
          ++currentQuestion;
          renderQuestion()
      } else {
        // console.log("what is this condition")
          // displayScore()

      }
    }
}


function displayScore() {
    // modalBg.classList.remove('bg-active');
    document.getElementById("score").innerHTML = `<h1>Score:${score}</h1> <p>Missed: ${missed}</p>`
    document.getElementById("question-number").innerHTML = `<h1>Question:${counter < 4 ? counter + 1: 5}/5</h1>`

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