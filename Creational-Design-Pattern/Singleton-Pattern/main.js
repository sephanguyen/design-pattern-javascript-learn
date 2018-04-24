var taskHandler = require('./taskHandler')
var myrepo = require('./Repo');
//when call repo() equal new repo and we dont have singleton
//var myrepo = repo();

myrepo.save('fromMain');
myrepo.save('fromMain');
myrepo.save('fromMain');

taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();