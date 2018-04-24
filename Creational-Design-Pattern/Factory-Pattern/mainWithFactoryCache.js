var Task = require('./task');
var repoFactory = require('./repoFactoryWithCache');

var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));

var user = repoFactory.getRepo('user').get(1);
task1.user = user;

task1.save();