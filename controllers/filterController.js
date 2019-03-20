
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

exports.lax_domain_name = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regex for domain name validation' });
  } else { // Form submitting
      var addr = req.body.addr;

      if (addr !== undefined) {
        var my_res = addr.match("^\\w+\\..*\\w+\\.\\w+$");
        if (addr.match("^\\w+\\..*\\w+\\.\\w+$") == null) {
          return res.render('regular_classic_post', { title: 'Regex for domain name validation', exec_res: 'Invalid domain format' });
        }
      } else {
        return res.render('regular_classic_post', { title: 'Regex for domain name validation', exec_res: 'Invalid domain format' });
      }

      return ping_an_address(res, addr, 'regular_classic_post', 'Regex for domain name validation');
  }
};

exports.multiple_os_commands_blacklisting = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regex filter for OS commands (Windows / *nix)' });
  } else { // Form submitting
      var addr = req.body.addr;

      if (addr !== undefined) {
        if (os.type().includes('Windows NT')) {
            if (addr.match("powershell|cmd") != null) {
              return res.render('regular_classic_post', { title: 'Regex for domain name validation', exec_res: 'Hack attempt detected!' });
            }
        } else {
            if (addr.match("echo|wget|nc|whoami|cat|ncat") != null) {
              return res.render('regular_classic_post', { title: 'Regex for domain name validation', exec_res: 'Hack attempt detected!' });
            }
        }
      }

      return ping_an_address(res, addr, 'regular_classic_post', 'Regex filter for OS commands (Windows / *nix)');
  }
};
