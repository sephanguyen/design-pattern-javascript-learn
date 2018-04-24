var Repo = require('./taskRepository');

var Task = function(data) {
    // constructor shoulden add attribute
    this.name = data.name;
    this.completed = false;

    // this.complete = function() {
    //     console.log('completing task ' + this.name);
    //     this.completed = true;
    // }
    //when new four object, function save create four times in memory, use prototypes resolve it
    // this.save = function() {
    //     console.log('Saving task ' + this.name);
    // }
}
// use prototypes
// function shoulden prototype
Task.prototype.complete = function() {
    console.log('completing task ' + this.name);
    this.completed = true;
};

Task.prototype.save = function() {
    console.log('Saving task ' + this.name);
    Repo.save(this);
};

module.exports = Task;