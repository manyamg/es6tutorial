//Process is a global object in Node 

// print process.argv
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });

//run the program 
  //node process-args.js one two=three four
//o/p as 
// 0: /usr/local/bin/node
// 1: /Users/mjr/work/node/process-args.js
// 2: one
// 3: two=three
// 4: four
//The process.chdir() method changes the current working directory of the node process
console.log(`Starting directory: ${process.cwd()}`);
try {
  process.chdir('/tmp');
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}

//The process.cwd() method returns the current working directory of the Node.js process.
console.log(`Current directory: ${process.cwd()}`);

Process.env // prints all the process environment variables.

//node -e 'process.env.foo = "bar"'
console.log(process.env.foo); //'bar';

//delete the process env 
process.env.TEST = 1;
delete process.env.TEST;
console.log(process.env.TEST); // => undefined

process.execPath ///usr/local/bin/node'  absolute pathname of the executable that started the Node.js process.

console.log(`This platform is ${process.platform}`); // returns the platform 

// Currently possible values are:

// 'aix'
// 'darwin'
// 'freebsd'
// 'linux'
// 'openbsd'
// 'sunos'
// 'win32'