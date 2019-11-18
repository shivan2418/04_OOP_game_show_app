/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let phrase_section = $('#phrase ul');
        let phrase_list = '';

        this.phrase.split('').forEach(letter => {

            if (letter === ' ') {
                phrase_list += "<li class='hide space'> </li>"
            } else {
                phrase_list += `<li class="hide letter ${letter}">${letter}</li>`
            }
        });
        phrase_section.append(phrase_list);
    }

    checkLetter(letter) {
        // returns true if the letter is in the active phrase
        // by using the indexOf, returns -1 if index not found otherwise returns the index

        return this.phrase.indexOf(letter) > -1;
    }
    showMatchedLetter(letter) {
        const letters_on_screen = $('#phrase ul li.letter');
        letters_on_screen.each(function(index,l){
            //found a letter that this method was asked to show a letter.
            if ( l.innerText === letter){
                $(this).removeClass('hide').addClass('show');
            }
        })
    }

}
