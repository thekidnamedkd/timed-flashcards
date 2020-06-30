import exampleObject from './../src/exampleJSON'

export class Flashcard {
  constructor (cardId, definition, term, fakeTerm) {
    this.cardId = cardId;
    this.definition = definition; //definition orients card never changes (id = def01)
    this.term = term; // correct term id to match definition id (id = term101)
    this.fakeTerm = fakeTerm; // this.fake = phonyTermGrab will contain two random phony terms from real term Id's of other cards ([id = term105, term 110])
  }

  fillFlashcard() {
    exampleObject.terms[0].push(Flashcard);
  }
} 

  // exampleObjec(phonyTerm) {
  //   this.phonyTermGrab.push(phonyTerm);
  // }
  // setDisplay() {
  //   setInterval(() => {
  //     this.cardDisplay--;
  //   }, 10000);
  // }
  //   }, 10000);
  // }