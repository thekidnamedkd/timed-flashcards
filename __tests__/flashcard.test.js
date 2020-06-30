import { Flashcard } from '../src/Flashcard.js'

describe('flashcard', () => {
  
  let reusableCard;
  
  beforeEach(function() {
    reusableCard = new Flashcard (cardId, definition, term, fakeTerm);

  });
  test('should match the id numbers between definitions and terms', () => {
    expect(reusableCard.cardId).toEqual(1)
    expect(reusableCard.definition).toEqual(101)
    expect(reusableCard.term).toEqual(1001)
    expect(reusableCard.fakeTerm).toEqual(10001)
  });
});