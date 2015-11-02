var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
};


PipeGraphicsComponent.prototype.draw = function(context) {
    console.log('Drawing a pipe');
    context.beginPath();
    context.fillRect(100, 100, 100, 100);
    context.fill();
    context.fillStyle = "green";

};

exports.PipeGraphicsComponent = PipeGraphicsComponent;