import { Game } from './../src/timed-flashcards.js'

describe('game', () => {
  let reusableGame;

  beforeEach(() => {
    reusableGame = new Game("Steve", [1, 2, 3]);
  });
  test('should have a player and deck property', () => {
    expect(reusableGame.player).toEqual("Steve", [1, 2, 3])
  });
});