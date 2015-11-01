var graphicsComponent = require("../components/graphics/pipe.js")

var Pipe = function() {
    console.log("Creating Pipe entity");

    var graphics = new graphicsComponent.PipeGraphicsComponent(this);
    this.components = {
      graphics: graphics
    };
};

exports.Pipe = Pipe;