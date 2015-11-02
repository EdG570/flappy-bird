var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
};


PipeGraphicsComponent.prototype.draw = function(context) {
    console.log('Drawing a pipe');
    context.beginPath();
    context.fillRect(50, 10, 100, 100);
    context.fill();
    context.fillStyle = "orange";

};

exports.PipeGraphicsComponent = PipeGraphicsComponent;