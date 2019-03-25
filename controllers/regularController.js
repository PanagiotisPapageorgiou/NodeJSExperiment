
var async = require('async');
var os = require('os');
var exec = require('child_process').exec;
var child;

function ping_an_address(res, addr, template_name, template_title) {

  if (addr === undefined) {
    console.log('Page load for ' + template_name);    
    return res.render(template_name, { title: template_title });
  } else {
    console.log('User submitted addr: |' + addr + '|');
    console.log(os.type()); // "Windows_NT"
    console.log(os.release()); // "10.0.14393"
    console.log(os.platform()); // "win32"
    
    var exec_res = 'Failed to Run...';
    var ping_command = '/bin/ping -c 4 ';

    if (os.type().includes('Windows NT')) {
        ping_command = 'ping ';
    }

    child = exec(ping_command + addr,
        function (error, stdout, stderr) {
            if (error) {
                console.log(template_name + ' exec error: ' + error);
                return res.render(template_name, { title: template_title });
            }

            console.log('stdout: |' + stdout + '|');
            console.log('stderr: |' + stderr + '|');

            exec_res = null;

            if (stdout.includes('\n')) {
                var lines = stdout.split('\n');
                for (var i = 0; i < lines.length; i++) {
                    if (lines[i].includes('rtt min/avg/max/mdev =')) {
                        exec_res = lines[i];
                        break;
                    }
                }
            }
            
            if (exec_res == null) {
                console.log(template_name + ' Failed to locate of average results of ping!')
                return res.render(template_name, { title: template_title });
            }
            else {
                return res.render(template_name, { 
                    title: template_title,
                    exec_res: exec_res
                });
            }
        });
  }
}

function ping_an_address_b64(res, addr, template_name, template_title) {

  if (addr === undefined) {
    console.log('Page load for ' + template_name);    
    return res.render(template_name, { title: template_title });
  } else {
    console.log('User submitted addr: |' + addr + '|');
    console.log(os.type()); // "Windows_NT"
    console.log(os.release()); // "10.0.14393"
    console.log(os.platform()); // "win32"
    
    var exec_res = 'Failed to Run...';
    var ping_command = '/bin/ping -c 4 ';

    if (os.type().includes('Windows NT')) {
        ping_command = 'ping ';
    }

    addrDecoded = Buffer.from(addr, 'base64').toString('ascii');
    console.log('Addr Base64 decoded: ' + addrDecoded);
    addrReEncoded = Buffer.from(addrDecoded, 'ascii').toString('base64');
    console.log('Addr Base64 re-encoded: ' + addrReEncoded);

    if (addrReEncoded == addr) {
        child = exec(ping_command + addrDecoded,
            function (error, stdout, stderr) {
                if (error) {
                    console.log(template_name + ' exec error: ' + error);
                    return res.render(template_name, { title: template_title });
                }

                console.log('stdout: |' + stdout + '|');
                console.log('stderr: |' + stderr + '|');

                exec_res = null;

                if (stdout.includes('\n')) {
                    var lines = stdout.split('\n');
                    for (var i = 0; i < lines.length; i++) {
                        if (lines[i].includes('rtt min/avg/max/mdev =')) {
                            exec_res = lines[i];
                            break;
                        }
                    }
                }
                
                if (exec_res == null) {
                    console.log(template_name + ' Failed to locate of average results of ping!')
                    return res.render(template_name, { title: template_title });
                }
                else {
                    return res.render(template_name, { 
                        title: template_title,
                        exec_res: exec_res
                    });
                }
            });
    } else {
        return res.render(template_name, { 
            title: template_title,
            exec_res: 'Please encode your input to Base64 format.'
        });        
    }
  }
}

function ping_an_address_hex(res, addr, template_name, template_title) {

  if (addr === undefined) {
    console.log('Page load for ' + template_name);    
    return res.render(template_name, { title: template_title });
  } else {
    console.log('User submitted addr: |' + addr + '|');
    console.log(os.type()); // "Windows_NT"
    console.log(os.release()); // "10.0.14393"
    console.log(os.platform()); // "win32"
    
    var exec_res = 'Failed to Run...';
    var ping_command = '/bin/ping -c 4 ';

    if (os.type().includes('Windows NT')) {
        ping_command = 'ping ';
    }

    addrDecoded = Buffer.from(addr, 'hex').toString('ascii');
    console.log('Addr Hex decoded: ' + addrDecoded);
    addrReEncoded = Buffer.from(addrDecoded, 'ascii').toString('hex');
    console.log('Addr Hex re-encoded: ' + addrReEncoded);

    if (addrReEncoded == addr) {
        child = exec(ping_command + addrDecoded,
            function (error, stdout, stderr) {
                if (error) {
                    console.log(template_name + ' exec error: ' + error);
                    return res.render(template_name, { title: template_title });
                }

                console.log('stdout: |' + stdout + '|');
                console.log('stderr: |' + stderr + '|');

                exec_res = null;

                if (stdout.includes('\n')) {
                    var lines = stdout.split('\n');
                    for (var i = 0; i < lines.length; i++) {
                        if (lines[i].includes('rtt min/avg/max/mdev =')) {
                            exec_res = lines[i];
                            break;
                        }
                    }
                }
                
                if (exec_res == null) {
                    console.log(template_name + ' Failed to locate of average results of ping!')
                    return res.render(template_name, { title: template_title });
                }
                else {
                    return res.render(template_name, { 
                        title: template_title,
                        exec_res: exec_res
                    });
                }
            });
    } else {
        return res.render(template_name, { 
            title: template_title,
            exec_res: 'Please encode your input to Hexademical format.'
        });        
    }
  }
}

function ping_an_address_quote(res, addr, template_name, template_title) {

  if (addr === undefined) {
    console.log('Page load for ' + template_name);    
    return res.render(template_name, { title: template_title });
  } else {
    console.log('User submitted addr: |' + addr + '|');
    console.log(os.type()); // "Windows_NT"
    console.log(os.release()); // "10.0.14393"
    console.log(os.platform()); // "win32"
    
    var exec_res = 'Failed to Run...';
    var ping_command = '/bin/ping -c 4 ';

    if (os.type().includes('Windows NT')) {
        ping_command = 'ping ';
    }

    child = exec(ping_command + "'" + addr + "'",
        function (error, stdout, stderr) {
            if (error) {
                console.log(template_name + ' exec error: ' + error);
                return res.render(template_name, { title: template_title });
            }

            console.log('stdout: |' + stdout + '|');
            console.log('stderr: |' + stderr + '|');

            exec_res = null;

            if (stdout.includes('\n')) {
                var lines = stdout.split('\n');
                for (var i = 0; i < lines.length; i++) {
                    if (lines[i].includes('rtt min/avg/max/mdev =')) {
                        exec_res = lines[i];
                        break;
                    }
                }
            }
            
            if (exec_res == null) {
                console.log(template_name + ' Failed to locate of average results of ping!')
                return res.render(template_name, { title: template_title });
            }
            else {
                return res.render(template_name, { 
                    title: template_title,
                    exec_res: exec_res
                });
            }
        });
  }
}

function ping_an_address_double_quote(res, addr, template_name, template_title) {

  if (addr === undefined) {
    console.log('Page load for ' + template_name);    
    return res.render(template_name, { title: template_title });
  } else {
    console.log('User submitted addr: |' + addr + '|');
    console.log(os.type()); // "Windows_NT"
    console.log(os.release()); // "10.0.14393"
    console.log(os.platform()); // "win32"
    
    var exec_res = 'Failed to Run...';
    var ping_command = '/bin/ping -c 4 ';

    if (os.type().includes('Windows NT')) {
        ping_command = 'ping ';
    }

    child = exec(ping_command + '\"' + addr + '\"',
        function (error, stdout, stderr) {
            if (error) {
                console.log(template_name + ' exec error: ' + error);
                return res.render(template_name, { title: template_title });
            }

            console.log('stdout: |' + stdout + '|');
            console.log('stderr: |' + stderr + '|');

            exec_res = null;

            if (stdout.includes('\n')) {
                var lines = stdout.split('\n');
                for (var i = 0; i < lines.length; i++) {
                    if (lines[i].includes('rtt min/avg/max/mdev =')) {
                        exec_res = lines[i];
                        break;
                    }
                }
            }
            
            if (exec_res == null) {
                console.log(template_name + ' Failed to locate of average results of ping!')
                return res.render(template_name, { title: template_title });
            }
            else {
                return res.render(template_name, { 
                    title: template_title,
                    exec_res: exec_res
                });
            }
        });
  }
}

exports.classic_get = function(req, res, next) {
  addr = req.query.addr;
  return ping_an_address(res, addr, 'regular_classic_get', 'Regular Classic GET Form'); 
};

exports.classic_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regular Classic POST Form' });
  } else { // Form submitting
      addr = req.body.addr;
      return ping_an_address(res, addr, 'regular_classic_post', 'Regular Classic POST Form');
  }
};

exports.classic_b64_get = function(req, res, next) {
  addr = req.query.addr;
  return ping_an_address_b64(res, addr, 'regular_classic_get', 'Regular Classic Base64 GET Form'); 
};

exports.classic_b64_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regular Classic Base64 POST Form' });
  } else { // Form submitting
      addr = req.body.addr;
      return ping_an_address_b64(res, addr, 'regular_classic_post', 'Regular Classic Base64 POST Form');
  }
};

exports.classic_hex_get = function(req, res, next) {
  addr = req.query.addr;
  return ping_an_address_hex(res, addr, 'regular_classic_get', 'Regular Classic Hex GET Form'); 
};

exports.classic_hex_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regular Classic Hex POST Form' });
  } else { // Form submitting
      addr = req.body.addr;
      return ping_an_address_hex(res, addr, 'regular_classic_post', 'Regular Classic Hex POST Form');
  }
};

exports.classic_quote_get = function(req, res, next) {
  addr = req.query.addr;
  return ping_an_address_quote(res, addr, 'regular_classic_get', 'Classic single-quote example'); 
};

exports.classic_quote_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Classic single-quote example' });
  } else { // Form submitting
      addr = req.body.addr;
      return ping_an_address_quote(res, addr, 'regular_classic_post', 'Classic single-quote example');
  }
};

exports.classic_double_quote_get = function(req, res, next) {
  addr = req.query.addr;
  return ping_an_address_double_quote(res, addr, 'regular_classic_get', 'Classic double-quote example'); 
};

exports.classic_double_quote_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Classic double-quote example' });
  } else { // Form submitting
      addr = req.body.addr;
      return ping_an_address_double_quote(res, addr, 'regular_classic_post', 'Classic double-quote example');
  }
};

exports.classic_non_space_get = function(req, res, next) {
  addr = req.query.addr;

  if (addr !== undefined) {
    if (addr.match("\\s+") != null) {
      return res.render('regular_classic_post', { title: 'Classic non-space example', exec_res: 'No white spaces are allowed!' });
    }
  }

  return ping_an_address(res, addr, 'regular_classic_get', 'Classic non-space example'); 
};

exports.classic_non_space_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Classic non-space example' });
  } else { // Form submitting
      addr = req.body.addr;

      if (addr !== undefined) {
        if (addr.match("\\s+") != null) {
          return res.render('regular_classic_post', { title: 'Classic non-space example', exec_res: 'No white spaces are allowed!' });
        }
      }
      
      return ping_an_address(res, addr, 'regular_classic_post', 'Classic non-space example');
  }
};
