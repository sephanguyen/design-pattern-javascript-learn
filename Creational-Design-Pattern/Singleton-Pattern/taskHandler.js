var myrepo = require('./Repo');

//when call repo() equal new repo and we dont have singleton
// var myrepo = repo();

var taskHandler = function() {
    return {
        save : function() {
            myrepo.save('Hi from taskHandler')
        }
    }
}

module.exports = taskHandler();