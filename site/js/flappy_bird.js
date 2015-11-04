var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');

var bird = require('./entities/bird');
var pipe = require('./entities/pipe');

//core flappy bird object
var FlappyBird = function() {
  this.entities = [new bird.Bird(), new pipe.Pipe({x:0.7, y:0}, {width: 0.1, height: 0.4}), new pipe.Pipe({x:0.7, y:0.7}, {width:0.1, height:0.4})];
  this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
  this.physics = new physicsSystem.PhysicsSystem(this.entities);
  this.input = new inputSystem.InputSystem(this.entities);
};

FlappyBird.prototype.run = function() {
  this.graphics.run();
  this.physics.run();
  this.input.run();
};

exports.FlappyBird = FlappyBird;


