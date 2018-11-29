import shell from 'shelljs';

shell.cd('~');
shell.cd('..'); 
shell.cd(); //home directory
shell.cd('test/resources'); //change directory to /test/resources
shell.cd('-'); // previous directory

let result = shell.chmod('755', `${somefile}/chmod/file1`).code === 0; //change the file permission
shell.touch("tmp"); //create a new file 

const result = shell.find('.'); //current path
const result = shell.find('test/resources/find'); //simple path
const result = shell.find('test/resources/find/dir1', 'test/resources/find/dir2'); // multiple paths
shell.find(['test/resources/find/dir1', 'test/resources/find/dir2']); // multiple paths as array
shell.env.PATH // path

// few realistic examples usecase
const killChromeBrowser = () => shell.exec('ps -aef | grep -i "Google Chrome" |  grep -v "grep" | awk \'{ print $2 }\' | xargs kill -9');

//start and stop nginx server in background
shell.exec(`sudo -S nginx -s stop > /dev/null 2>&1`);
shell.exec(` sudo -S nginx > /dev/null 2>&1`);
