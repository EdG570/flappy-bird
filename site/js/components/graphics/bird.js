var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    console.log('Drawing a bird');
    context.beginPath();
    context.fillRect(10, 10, 100, 100);
    context.fill();
    context.fillStyle = "red";
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;