var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
  console.log('Drawing a pipe');
  var position = this.entity.components.physics.position;

  context.save();
  context.translate(position.x, position.y);
  context.rect(0, 0.5, 0.5, 0.5);
  context.restore();
};


exports.PipeGraphicsComponent = PipeGraphicsComponent;