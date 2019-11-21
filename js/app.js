/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// click startbtn click handler
$('#btn__reset').on('click', function (event) {
    console.log('event cliked');
    game = new Game();
    game.startGame();
});

//handle click to keyboard
$('#qwerty .key').on('click', function (event) {
    game.handleInteraction(event);
});

