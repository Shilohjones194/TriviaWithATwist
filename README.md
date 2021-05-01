# Trivia with a Twist!

## Description

Our deployed application can be found by clicking this link: [Trivia with a Twist](https://shilohjones194.github.io/triviawithatwist).

### User Story

> AS A  
> I WANT  
> SO THAT

_Trivia with a Twist_ is a group project made by [Lily H.](https://github.com/lilyhi), [Luke J.](https://github.com/Shilohjones194), and [Pablo D.](https://github.com/pablodlc) Our premise for this application was to make an online trivia drinking game for friends to play together when they can't be together. The application requires a host and can be played through Zoom. The users must first have a drink. If they're looking for a random drink, they can find a recipe by clicking a button on the landing page. Once all players have a drink, the game starts. The host clicks the `Start Trivia!` button and a modal opens with a question and four possible answers. The high scores are recorded and displayed beneath the grapefruit cocktails to the right of the page.

## Process

### Requirements

-   Use at least two server-side APIs.
-   Have a polished UI.
-   Use a CSS framework other than Bootstrap.
-   Be responsive.
-   Be interactive (i.e., accept and respond to user input).
-   Does not use alerts, confirms, or prompts (use modals).
-   Use client-side storage to store persistent data.

### APIs

We utilized three APIs for _Trivia with a Twist!_:

#### [The Cocktail DB](https://https://www.thecocktaildb.com/api.php)

The user can fetch a random drink recipe through the application by way of The Cocktail DB. By clicking the `Search!` button, the application opens a modal that displays the drink's name, a picture of the drink, the ingredients needed with measurements, and instructions. In the modal, there are two buttons, `Save Drink!` and `Find a Saved Drink!`. Clicking the `Save Drink!` button saves all of the generated data in the modal to local storage. Clicking `Find a Drink` clears the modal content, gets the data from local storage, then repopulates the modal with the saved data.

#### [Open Trivia Database](https://https://opentdb.com/)

The trivia game starts when the host clicks the `Start Trivia!` button. On the button click, a modal opens and it contains 5 elements, a question and four buttons, their text content an answer.
