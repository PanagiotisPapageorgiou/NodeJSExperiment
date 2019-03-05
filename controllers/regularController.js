
var async = require('async');
var os = require('os');
var exec = require('child_process').exec;
var child;

// Display Regular Classic GET Form Page
exports.classic_get = function(req, res, next) {
  addr = req.query.addr;
  if (addr === undefined) {    
    res.render('regular_classic_get', { title: 'Regular Classic GET Form' });
  } else {
    console.log(os.type()); // "Windows_NT"
    console.log(os.release()); // "10.0.14393"
    console.log(os.platform()); // "win32"
    
    var exec_res = 'Failed to Run...';
    child = exec('/bin/ping -c 4 ' + addr,
        function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);

            exec_res = stdout;

            if (error !== null) {
                console.log('exec error: ' + error);
                exec_res = error;
            }
            res.render('regular_classic_get', { 
                title: 'Regular Classic GET Form', 
                ping_res: 'You submitted: ' + addr, 
                server_os: os.platform(),
                exec_res: exec_res
            });
        });
  }

};

// Handle Regular Classic on GET request.
exports.handle_classic_get = function(req, res, next) {
    addr = req.body.addr;
    console.log('Submitted Addr is: ' + addr);
};