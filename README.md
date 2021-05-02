# Trivia with a Twist!

## Description

Our deployed application can be found by clicking this link: [Trivia with a Twist](https://shilohjones194.github.io/triviawithatwist).  
![Trivia with a Twist!](./assets/images/trivia-with-a-twist.gif)

### User Story

> AS A person looking to connect with friends online,  
> I WANT a trivia drinking game to play over Zoom, that gives me drink recipes and dynamically opens a trivia game at the click of a button,  
> SO THAT we can be together when we can't be together and see who gets the high score.

_Trivia with a Twist_ is a group project made by [Lily H.](https://github.com/lilyhi), [Luke J.](https://github.com/Shilohjones194), and [Pablo D.](https://github.com/pablodlc) Our premise for this application was to make an online trivia drinking game for friends to play together when they can't be together. The application requires a host and can be played through Zoom. The users must first have a drink. If they're looking for a random drink, they can find a recipe by clicking a button on the landing page. Once all players have a drink, the game starts. The host clicks the `Start Trivia!` button and a modal opens with a question and four possible answers. The high scores are recorded and displayed beneath the grapefruit cocktails to the right of the page.

## Process

### Requirements

-   Use at least two server-side APIs.
-   Have a polished UI.
-   Be interactive (i.e., accept and respond to user input).
-   Use a CSS framework other than Bootstrap.
-   Be responsive.
-   Does not use alerts, confirms, or prompts (use modals).
-   Use client-side storage to store persistent data.

### APIs

#### [The Cocktail DB](https://https://www.thecocktaildb.com/api.php)

The user can fetch a random drink recipe through the application by way of The Cocktail DB. By clicking the `Search!` button, the application opens a modal that displays the drink's name, a picture of the drink, the ingredients needed with measurements, and instructions. In the modal, there are two buttons, `Save Drink!` and `Find a Saved Drink!`. Clicking the `Save Drink!` button saves all of the generated data in the modal to local storage. Clicking `Find a Drink` clears the modal content, gets the data from local storage, then repopulates the modal with the saved data.

#### [Open Trivia Database](https://https://opentdb.com/)

The trivia game starts when the host clicks the `Start Trivia!` button. On the button click, a modal opens and it contains several elements, some of which are a question and four buttons, their text content an answer. The data received from the API is ordered such that the correct answer is always in the same place in the array. That means, for example, the correct answer would always be `A`, which is not fun. The application programmatically randomizes the order of the answers so that the user can't predict the correct answer because of it's assigned letter. In the Triva Modal, there are three additional elements at the bottom. The `Score` is incremented up one for a correct answer. `Missed` tallies the wrong answers, incrementing up one for a wrong answer. The last element, `Questions` keeps track of what question the player is on out of 5.

#### [Giphy](https://https://developers.giphy.com/)

You read that right, dear reader! A bonus API! This API is used to generate the gif at the top-left of the landing page on page load.

## UI

The user interface has a clean, fun look. Further technologies used here are [Google Fonts](https://fonts.google.com) and [Font Awesome](http://fontawesome.com). The application uses Google Fonts for its font, a rounded, playful font. Font Awesome is used in the `header` and `footer`, for a cocktail glass in the header and two glasses clinking in cheer in the footer. An extra fun addition is the use of a martini glass cursor from [cursors-4u.com](https://www.cursors-4u.com).
Our team settled on a nice color pallette that is used differently in the modals than the landing page, giving a pleasant variety with uniform colors.

## Interactivity

The first instance of interactivity is the first step the user is instructed to do, click the `Search!` button, which opens a modal displaying drink data. Also in that modal, there are two buttons. The `Save Drink!` button saves the current drink to local storage. The other button, `Find a Drink`, retrieves the drinks from local storage.  
The next series of interactive features starts with the `Start Trivia!` button. The user clicks that button which opens a modal containing a question and four buttons with the possible answers as their text content. The user must click one of the answer buttons to proceed through the five questions. As the user plays, their score, misses, and current question are all updated at the bottom of the modal.

## Responsive CSS Framework and Bulma Modals

Our team used [Bulma](https://bulma.io/) for our CSS framework. With Bulma, we made `columns`, `cards`, `buttons`, and `modals`. There are `media queries` in our style that set breakpoints so that our page looks nice and finished at multiple screen sizes. There are no alerts, confirms, or prompts in our application. We used modals to display content separately from the landing page in both the drink recipes and the trivia game.

## Local Storage

We have two future development ideas for our application that utilize local storage. What we have utilizing local storage now is in the Drink Modal. Clicking the `Save Drink!` button saves the current drink to local storage. The `Find a Drink` button calls the data from the last saved drink and displays it in the console. Our second local storage feature to be added is a high score section below the grapefruit cocktail picture.

The gif below demonstrates the local storage `setItem` and `getItem` functions happening in the background of the application. Please note the eraser button at the top of the page is a `confirm` to clear local storage quickly. This is a gif of the work in progress. The eraser button and `confirm` not part of the final application.
![Trivia With a Twist local storage usage](./assets/images/trivia-local-storage.gif)

## Technologies Used

-   [Bulma](https://bulma.io/)
-   [jQuery](https://jquery.com/)
-   [The Cocktail DB](https://www.thecocktaildb.com/api.php)
-   [Open Trivia Database](https://opentdb.com/)
-   [Giphy](https://developers.giphy.com/)
-   [Google Fonts](https://fonts.google.com)
-   [Font Awesome](http://fontawesome.com)
-   [cursors-4u.com](https://www.cursors-4u.com)

## Future Development

Our first priority in future development would be to complete the use of local storage in our application. The application successfully saves data, but it can't currently access the data to do anything useful to an average user. The update would include updating the function that triggers when `Find a Drink!` is clicked. The update would have the function clear the modal content, then display the saved drinks as buttons with the drink names as text content in the modal. When one of the drink buttons is clicked, the modal is again cleared and the drink name, picture, ingredients, and instructions of the clicked drink is repopulated.  
Another local storage feature addition would be to include a high score section. We didn't get to the point where we settled on a scoring system. We discussed using `Math.random` to give random scores between 1 and 1,000,000, making the points arbitrary. Then, at the end of the trivia game, the player gets to enter their name, and if their score is high enough, it gets displayed on the landing page.  
Other future development ideas were to add search features to the drink section, featuring a text input field, and buttons assigned to searching by liquor or drink name. The trivia can be expanded upon, as well. Possible improvements are letting the user choose the game length, options to choose trivia categories, options for the difficulty, and options for the type (multiple choice or true/false).  
Further improvements would be minor styling updates and figuring out how to get a random cocktail gif for the landing page.
