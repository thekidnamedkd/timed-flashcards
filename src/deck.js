export class Deck {

  constructor(deckArray) {
    this.deckArray = deckArray; //will contain X number of populated flashcards 
  }

  addFlashcard(flashcard) {
    this.deckArray.push(flashcard);
  }
}