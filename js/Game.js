/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;

    }

    startGame() {
        //reset all the UI

        // reset the keyboard
        $('#qwerty .key').each(function (index, btn) {
            $(this).prop('disabled', false);
            $(this).removeClass('chosen').removeClass('wrong');
        });
        // remove the previous phrase
        $('#phrase ul li').remove();
        //reset the hearts
        $('#scoreboard li img').each(function (index, image) {
            $(this).attr('src', 'images/liveHeart.png');
        });

        // make new game instance, choose phrase and add to the div. 
;
        game.activePhrase = game.getRandomPhrase();
        game.activePhrase.addPhraseToDisplay();
        $('#overlay').hide();
    }

    getRandomPhrase() {
        //returns a random phrase from the list of phrases in this class
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    handleInteraction(event) {
        // no matter what disable the button
        $(event.target).prop('disabled', true);

        // if we the user hit a matched letter reveal it
        if (this.activePhrase.checkLetter(event.target.innerText)) {
            // show those letters
            this.activePhrase.showMatchedLetter(event.target.innerText);
            //disable the letter button that was clicked
            $(event.target).addClass('chosen');
            // check if player won
            if (this.checkForWin() === true) {
                this.gameOver('win');
            };
        } else {
            $(event.target).addClass('wrong');
            this.removeLife();
        }


    }

    removeLife() {
        // remove a heart
        $('#scoreboard li img').eq(this.missed).attr('src', 'images/lostHeart.png');
        // increment the missed counter
        this.missed++;
        // if the counter reaches five the player has lost
        if (this.missed === 5) {
            this.gameOver('lose');
        }


    }
    checkForWin() {
        // iterates over the letters on screen and returns false if any of them are still hidden

        let game_won = true
        const letters_on_screen = $('#phrase ul li.letter');
        letters_on_screen.each(function () {

            if ($(this).hasClass('hide')) {
                game_won = false;
            }
        });
        // if we got to here none are hidden, game won. 
        return game_won;
    }

    gameOver(css_class) {

        //restore the original start screen

        $('#overlay').show();
        $('#overlay .title').addClass(css_class);
    }


    createPhrases() {
        // return a list of string that we use map to turn into Phrase objects before he return it
        return ['My hovercraft is full of eels', 'I will not buy this record', 'My kingdom for a horse', 'Mistakes were made', 'Luck to your house'].map(p => new Phrase(p))
        //return ['abcd'].map(p => new Phrase(p));
    }


}