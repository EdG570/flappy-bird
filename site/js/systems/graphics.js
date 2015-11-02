var GraphicsSystem = function(entities) {
  this.entities = entities;
  //canvas where we draw
  this.canvas = document.getElementById('main-canvas');
  //Context is what is drawn
  this.context = this.canvas.getContext('2d');
};

GraphicsSystem.prototype.run = function() {
    //Run the render loop
    window.requestAnimationFrame(this.tick.bind(this));
};

GraphicsSystem.prototype.tick = function() {
    //Set canvas to correct size if window resizes
    if(this.canvas.width != this.canvas.offsetWidth || 
       this.canvas.height != this.canvas.offsetHeight) {
       this.canvas.width = this.canvas.offsetWidth;
       this.canvas.height = this.canvas.offsetHeight;
    }

    //Clear the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.save();
    this.context.translate(this.canvas.width / 2, this.canvas.height);
    this.context.scale(this.canvas.height, -this.canvas.height);

    //Rendering goes here
    for (var i=0; i < this.entities.length; i++) {
      var entity = this.entities[i];
      if (!'graphics' in entity.components) {
        continue;
      }

      entity.components.graphics.draw(this.context);
    }

    this.context.restore();

      // Continue the render loop
      window.requestAnimationFrame(this.tick.bind(this));
};

exports.GraphicsSystem = GraphicsSystem;