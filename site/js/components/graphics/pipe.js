var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
  var position = this.entity.components.physics.position;
  var pipeSize = this.entity.components.physics.pipeSize;

  context.save();
  context.translate(position.x, position.y);
  context.fillStyle = "green";
  context.fillRect(0, 0, pipeSize.width, pipeSize.height);
  context.restore();

};


exports.PipeGraphicsComponent = PipeGraphicsComponent;