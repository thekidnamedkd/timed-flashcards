import { Deck } from './../src/deck.js'

describe('Deck', () => {
  
  let reusableDeck;
  
  beforeEach(function() {
    reusableDeck = new Deck ([1, 2, 3]);

  });

  test('should find a card at a position in the array', () => {
    expect(reusableDeck.deckArray).toHaveLength(3);
  });
});