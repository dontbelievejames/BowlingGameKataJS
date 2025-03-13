const { expect } = chai;

describe('Array', function () {
    // To do - separate code and test
    var game = { roll, function(pins) { },
                score, function() { return 0}}

    for (let i = 0; i < 20; i++) {
        game.roll(0)
      }

  it('test gutter game', function () {
    expect(game.score()).to.equal(1);
  });
});