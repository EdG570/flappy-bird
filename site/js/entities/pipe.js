var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/pipe");
var collisionComponent = require("../components/collision/rect");


var Pipe = function(position, pipeSize) {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position = position;
    physics.pipeSize = pipeSize;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this);
    var collision = new collisionComponent.RectCollisionComponent(this, 0.1);
    collision.onCollision = this.onCollision.bind(this);
    
    this.components = {
      physics: physics,
      graphics: graphics,
      collision: collision
    };
};

Pipe.prototype.onCollision = function(entity) {
  console.log("Pipe collided with entity", entity);
};

exports.Pipe = Pipe;