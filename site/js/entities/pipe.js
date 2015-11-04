var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");


var Pipe = function(position, pipeSize) {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position = position;
    physics.pipeSize = pipeSize;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this);

    
    this.components = {
      physics: physics,
      graphics: graphics,
    };
};

exports.Pipe = Pipe;