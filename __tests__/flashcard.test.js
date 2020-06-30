import { Flashcard } from '../src/Flashcard.js'

describe('flashcard', () => {
  
  let reusableCard;

  beforeEach(function() {
    reusableCard = new Flashcard (1, 101, 1001, [1, 2]);
  });
  test('should match the id numbers between definitions and terms', () => {
    expect(reusableCard.cardId).toBe(1)
    expect(reusableCard.defId).toBe(101)
    expect(reusableCard.termId).toBe(1001)
    expect(reusableCard.phonyTermGrab).toHaveLength(2)
  })
});