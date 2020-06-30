import { Flashcard } from './../src/flashcard.js'
import exampleObject from "./../src/exampleJSON";

export class Deck {
  constructor(deckArray) {
    this.deckArray = deckArray; //will contain X number of populated flashcards 
  }

  addFlashcard(flashcard) {
    for (let i = 0; i < exampleObject.cards.length; i++) {
      let flashcard = new Flashcard (i, exampleObject.cards[i].definition,  exampleObject.cards[i].term, exampleObject.cards[i].fakeTerm)
      this.deckArray.push(flashcard);
    }
  }
}

// let deck  = new Deck (parameters)

// deck will be an object => deck = { deckArray: [], addFlashcard = function() }