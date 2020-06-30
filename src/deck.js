import { Flashcard } from './../src/flashcard.js';
import { exampleObject } from './../src/exampleJSON.js';
export class Deck {
  constructor(deckArray) {
    this.deckArray = deckArray; //will contain X number of populated flashcards
    
    let flashcard = new Flashcard
  }
}

 // addFlashcard() {
  //   for (let i = 0; i < exampleObject.cards.length; i++) {
  //     console.log(exampleObject.cards)
  //     let flashcard = new Flashcard (i, exampleObject.cards[i].definition, exampleObject.cards[i].term, exampleObject.cards[i].fakeTerm);
  //     this.deckArray.push(flashcard);
  //   }
  // }

// let deck  = new Deck (parameters)

// deck will be an object => deck = { deckArray: [], addFlashcard = function() }