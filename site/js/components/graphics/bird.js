var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    console.log('Drawing a bird');

    context.save();
    context.translate(5, 5);
    context.scale(5, 5);
    context.beginPath();
    context.arc(0, 0, 1, 0, 2 * Math.PI);
    context.fill();
    context.restore();

};

exports.BirdGraphicsComponent = BirdGraphicsComponent;