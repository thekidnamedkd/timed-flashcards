import { Deck } from './../src/deck.js'

describe('Deck', () => {
  
  let reusableDeck;

  beforeEach(function() {
    reusableDeck = new Deck ();
  });

  test('should find a card at a position in the array', () => {
    expect(reusableDeck.deckArray).toHaveLength();
  });
});

// [1, 2, 3]