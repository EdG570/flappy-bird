var graphicsSystem = require('./systems/graphics');
var bird = require('./entities/bird');
var pipe = require('./entities/pipe');

//core flappy bird object
var FlappyBird = function() {
  this.entities = [new bird.Bird()];
  this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
};

FlappyBird.prototype.run = function() {
  this.graphics.run();
};

//core pipe object 
var GreenPipe = function() {
  this.entities = [new pipe.Pipe()];
  this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
};

GreenPipe.prototype.run = function() {
  this.graphics.run();
};

exports.FlappyBird = FlappyBird;
exports.GreenPipe = GreenPipe;

