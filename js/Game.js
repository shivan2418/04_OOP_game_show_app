/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);

    }

    startGame() {
        const game = new Game();
        $('#overlay').hide();
    }

    getRandomPhrase() {
        //returns a random phrase from the list of phrases in this class
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }

    handleInteraction(letter) {
        // if we the user hit a matched letter reveal it
        if (this.activePhrase.checkLetter(letter)){
            this.activePhrase.showMatchedLetter(letter);
        }


    }

    removeLife() {
        null;
    }
    checkForWin() {
        null;
    }

    gameOver() {
        null;
    }


    createPhrases() {
        // return a list of string that we use map to turn into Phrase objects before he return it
        return ['My hovercraft is full of eels', 'I will not buy this record', 'My kingdom for a horse', 'Mistakes were made', 'Luck to your house'].map(p => new Phrase(p))

    }


}