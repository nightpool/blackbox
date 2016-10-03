
$(function(){
  window.game = new Game(4);
});

function Game(size) {
	this.size = size;
	this.board = new Board(this);
}

function Board(game) { 
	this.game = game;
	this.tiles = _.range(game.size * game.size).map(_ => new Tile);

}