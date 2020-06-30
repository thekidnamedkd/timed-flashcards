import { Deck } from './../src/deck.js'

describe('Deck', () => {
  
  let reusableDeck;
  
  beforeEach(function() {
    reusableDeck = new Deck ();

  });

  test('should find a card at a position in the array', () => {
    expect(reusableDeck.deckArray).toBe("");
  });

  test('should pull the JSON key values in the deck array', () => {
    expect(reusableDeck.exampleObject.cards[0].id, reusableDeck.exampleObject.cards[0].definition, reusableDeck.exampleObject.cards[0].term, reusableDeck.exampleObject.cards[0].faketerm).toBe(0,"Node Package Module", "NPM", "JSON");
  });
});