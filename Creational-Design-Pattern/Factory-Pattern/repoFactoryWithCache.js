var repoFactory = function() {

    this.getRepo = function(repoType) {
        if(repoType === 'task') {
            if(!this.taskRepo) {
                this.taskRepo = require('./taskRepository')();
            };
            return this.taskRepo;
            
        }
        if(repoType === 'user') {
            if(!this.userRepo) {
                this.userRepo = require('./userRepository')();
            };
            return this.userRepo;
        }
    }
}

module.exports = new repoFactory;