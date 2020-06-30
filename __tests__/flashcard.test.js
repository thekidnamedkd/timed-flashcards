import { Flashcard } from '../src/Flashcard.js'

describe('flashcard', () => {
  
  let reusableCard;

  beforeEach(function() {
    reusableCard = new Flashcard (1, 101, 0);
  });
  test('should match the id numbers between definitions and terms', () => {
    expect(reusableCard.cardId).toBe(1)
    expect(reusableCard.definition).toBe(101)
    expect(reusableCard.termId).toBe(1001)
  })
});