var repo = function() {

    var called = 0;
    var save  = function(task) {
        called++;
        console.log('Saving ' + task + 'Called ' + called + ' times');
    }
    console.log('newing up task repo');
    return {
        save : save
    };
}
// when export below node module not cache, you need object for module cache
//module.exports = repo;
//you shoulden module export equivalent module.exports = new repo;
module.exports = repo();