export class Flashcard {
  constructor (cardId, defId, termId, phonyTermGrab) {
    this.cardId = cardId
    this.defId = defId; //definition orients card never changes (id = def01)
    this.termId = termId; // correct term id to match definition id (id = term101)
    this.phonyTermGrab = phonyTermGrab //will contain two random phony terms from real term Id's of other cards ([id = term105, term 110])
  }

  // phonyArray(phonyTerm) {
  //   this.phonyTermGrab.push(phonyTerm);
  // }
}
