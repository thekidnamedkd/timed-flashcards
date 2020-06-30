import { Deck } from './../src/deck.js'

describe('Deck', () => {
  
  let reusableDeck;
  
  beforeEach(function() {
    reusableDeck = new Deck ([1, 2, 3]);

  });

  test('should find a card at a position in the array', () => {
    expect(reusableDeck.deckArray).toHaveLength(3);
  });

  test('should pull the JSON key values in the deck array', () => {
    expect(resusableDeck.exampleObject.cards[0].id, resusableDeck.exampleObject.cards[0].definition, resusableDeck.exampleObject.cards[0].term, resusableDeck.exampleObject.cards[0].faketerm).toBe(0,'Node Package Module', 'NPM', 'JSON');
  });
});