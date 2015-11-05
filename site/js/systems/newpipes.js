var pipe = require('../entities/pipe');

var NewPipesSystem = function(entities) {
    this.entities = entities;
};

NewPipesSystem.prototype.run = function() {
    // Run the update loop
    window.setInterval(this.tick.bind(this), 5000);
};

NewPipesSystem.prototype.tick = function() {

    var pipeOne = Math.random() * (0.7 - 0.1) + 0.1;
    var pipeTwo = (1 - pipeOne) - 0.2;
    
    this.entities.push(new pipe.Pipe({x:0.7, y:0}, {width: 0.1, height: pipeOne}));
    this.entities.push(new pipe.Pipe({x:0.7, y: (1 - pipeTwo)}, {width: 0.1, height: pipeTwo}));
};

exports.NewPipesSystem = NewPipesSystem;