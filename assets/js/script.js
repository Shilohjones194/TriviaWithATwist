// var modalBtn = document.querySelector('modal-btn');
// var modalBg = document.querySelector('.modal-bg');
// var modalClose =document.querySelector('.modal-close');

// modalBtn.addEventListener('click', function () {
//     modalBg.classList.add('bg-active');
// });
// modalClose.addEventListener('click',function() {
//     modalBg.classList.remove('bg-active');
// })

// var questionEl = document.querySelector('.question')


//Shuffle//
// function shuffle(array) {
//     var currentIndex = array.length;
//     var temporaryValue;
//     var randomIndex;

//     while (0 !== currentIndex) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = array[randomIndex];
//         array[currentIndex] = [randomIndex];
//         array[randomIndex] = temporaryValue;

//     return array;
//     }
// }

fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")

    .then(response => response.json())
    .then(data => {
        var questionObjs = data.results;
        console.log(data);

        for (var i = 0; i < questionObjs.length; i++) {
            var question = questionObjs[i].question;
            var choices = questionObjs[i].incorrect_answers;
            var correctAnswer = questionObjs[i].correct_answer;

            choices.push(correctAnswer);
            //choices = shuffle(choices);

            questionEl.innerHTML = question;

            document.querySelector('#a').innerHTML = choices[0]
            document.querySelector('#b').innerHTML = choices[1]
            document.querySelector('#c').innerHTML = choices[2]
            document.querySelector('#d').innerHTML = choices[3];

        }
    })
                // // need to still make following elements
//  var scoreEl= document.querySelector('#score');
//  var questionNumberEl =document.querySelector('#questionNumber');

                // // need to make save score functional:
//  function saveHS() {
//      var name = nameEl.value.trim();

            //// Saving HighScores to local drive
//      if(name !== "") {
//          //Save HighScores
//          var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
//          var newScore= {
//              score: amount,
//              name: name
//          };
//          highScores.push(newScore);
//          window.localStorage.setItem("highscores", JSON.stringify(highScores));
//          
//      }
//  }





//for loop through both incorrect and correct answers within for loop.


    //create it,    modify it,    append it//
    //Loop through it all to keep track of high score//