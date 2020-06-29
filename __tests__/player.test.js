import { Player } from './../src/player.js'

describe('Player', () => {
  
  let reusablePlayer;

  beforeEach(function() {
    reusablePlayer = new Player (10, 10000);
  });

  test('should have a gameTimer and gameScore.', () => {
    expect(reusablePlayer.gameTimer).toEqual(10000);
    expect(reusablePlayer.gameScore).toEqual(10);
  });
});