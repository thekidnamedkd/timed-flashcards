import { exampleObject } from './../src/exampleJSON.js'

let flashcard = new Flashcard(exampleObject) 
console.log(exampleObject.cards[0].id)

export class Flashcard {
  constructor (cards) {
    this.cardId = cardId;
    this.definition = definition; //definition orients card never changes (id = def01)
    this.term = term; // correct term id to match definition id (id = term101)
    this.fakeTerm = fakeTerm; // this.fake = phonyTermGrab will contain two random phony terms from real term Id's of other cards ([id = term105, term 110]);
    console.log(cardId);
    console.log(definition);
    console.log(term);
    console.log(fakeTerm);
  }


