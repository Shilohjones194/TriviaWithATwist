var randoBtnEl = $("#randoBtn");
var randoURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
var drinkName = "";
var nameBtnEl = $("#nameBtn");
var currentDrink = 0;
// var randoURL = "www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName;

// Modal Script
var modal = document.getElementById("drinkModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Modal Script end

function saveDrink(array) {
    localStorage.setItem("drinks", JSON.stringify(drinkStorageArray));
}

function getDrink() {
    var savedDrinks = localStorage.getItem("drinks");
    var roundTwo = JSON.parse(savedDrinks);
    console.log(roundTwo);
}

function drinkFetcher() {
    fetch(
        randoURL
    )
        .then(function (response) {
            // Error handler in case response takes too long
            if (response.status !== 200) {
                console.log("There was a problem successfully loading your drink. Code: " +
                    response.status);
                return;
            }

            response.json().then(function (data) {
                displayCocktail(data);
            });
        }
        )
        .catch(function (err) {
            console.log("Fetch error", err);
        });
}

function displayCocktail(cocktail) {
    $("#drink-title-container").empty();
    $("#card-image").empty();
    $("#modal-title-container").empty();
    $("#modal-image-container").empty();

    // updating `drinkTitle` to the name of the drink returned from the API then updating the DOM with it
    drinkTitle = cocktail.drinks[0].strDrink;
    $("#drink-title-container").append("<h5>" + drinkTitle + "</h5>");
    $("#modal-title-container").append("<h5>" + drinkTitle + "</h5>");

    // Updating the image using the API data then putting it on the page
    var drinkImg = document.createElement("img");
    drinkImg.src = cocktail.drinks[0].strDrinkThumb;
    $("#card-image").append(drinkImg);

    var drinkImg = document.createElement("img");
    drinkImg.src = cocktail.drinks[0].strDrinkThumb;
    $("#modal-image-container").append(drinkImg);

    $("#ingredients-list").empty();
    $("#instructions-list").empty();

    var ingredientObject = [];

    // There's some mathmatical offsetting being done in this for loop.  The indredients array starts at 1, not the index of 0.  So `i` starts at  1.  Also, we don't know how many ingredients each will have, but we know 15 is the max.  That means we loop through less than 16 times.
    for (var i = 1; i < 16; i++) {
        if (cocktail.drinks[0][`strIngredient${i}`] == null) {
            break;
        }
        var ingredient = document.createElement("li");
        // using a template literal to grab the ingredients as we iterate through them
        ingredient.innerHTML = (cocktail.drinks[0][`strMeasure${i}`] + ": " + cocktail.drinks[0][`strIngredient${i}`] + "<br />");
        $("#ingredients-list").append(ingredient);

    }
    for (var j = 1; j < 16; j++) {
        if ((cocktail.drinks[0][`strIngredient${j}`] == null) && (cocktail.drinks[0][`strMeasure${j}`] == null)) {
            break;
        }
        var measure = cocktail.drinks[0][`strMeasure${j}`]
        var ingrs = cocktail.drinks[0][`strIngredient${j}`]
        var combined = measure + ": " + ingrs;
        ingredientObject.push(combined);
    }


    var instructions = document.createElement("p");
    var instructionsToSave = [];
    instructions.innerHTML = (cocktail.drinks[0].strInstructions + "<br />");
    $("#instructions-list").append(instructions);
    instructionsToSave.push(cocktail.drinks[0].strInstructions);

    drinkStorageArray = [drinkTitle, drinkImg.src, ingredientObject, instructionsToSave];
    return drinkStorageArray;
}


$(randoBtnEl).click(function (event) {
    event.preventDefault();
    drinkFetcher();
    modal.style.display = "block";
});

$("#saveDrinkBtn").click(function (event) {
    event.preventDefault();
    saveDrink();
    console.log(drinkStorageArray);
});

$("#getDrinkBtn").click(function (event) {
    event.preventDefault();
    getDrink();
});

function gifGrab() {
    fetch(
        'https://api.giphy.com/v1/gifs/search?q=cocktail&api_key=W1Byjf3yzHSrqwWY2xZyUV9zb93154ls'
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {

            // Create a variable that will select the <div> where the GIF will be displayed
            var cardImageContainer = $("#card-image");

            // Empty out the <div> before we append a GIF to it
            $("#card-image").innerHTML = '';

            var gifImg = document.createElement("img");
            gifImg.src = (response.data[0].images.fixed_height.url);
            $("#card-image").append(gifImg);
        });
}

$("#clearBtn").click(function () {
    var clear = confirm("Would you like to clear all items?");
    if (clear) {
        localStorage.clear();
        location.reload();
    }
})

$(document).ready(function () {
    gifGrab();
});