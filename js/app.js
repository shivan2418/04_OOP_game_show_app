/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();

 // click startbtn click handler
$('#btn__reset').on('click', game.startGame);

//handle click to keyboard
$('#qwerty .key').on('click', function (event) {
    game.handleInteraction(event);
    game.activePhrase.checkLetter(event.target.innerText);

});
