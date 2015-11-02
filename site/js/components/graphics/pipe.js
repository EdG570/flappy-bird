var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
};

var vertMove = 200;
var horMove = 500;

PipeGraphicsComponent.prototype.draw = function(context) {
    context.beginPath();
    context.fillRect(horMove, vertMove, 100, 100);
    context.fill();
    context.fillStyle = "orange";

    horMove += 1;
    vertMove += 1;

};

exports.PipeGraphicsComponent = PipeGraphicsComponent;