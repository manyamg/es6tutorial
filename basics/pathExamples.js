const path = require('path');
const filename = path.basename('/Users/Refsnes/demo_path.js');
console.log(filename) // demp_path.js

const directories = path.dirname('/Users/Refsnes/demo_path.js');
console.log(directories); //'/Users/Refsnes/

const ext = path.extname('/Users/Refsnes/demo_path.js');
console.log(ext); //.js

var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }
var p = path.format(obj);
console.log(p); //C:\Users\Refsnes\demo_path.js


console.log(path.isAbsolute('/test/demo_path.js')); //true
console.log(path.isAbsolute('test/demo_path.js')); //false

var pathJoined = path.join('Users', 'Refsnes', 'demo_path.js');

console.log(pathJoined); //Users\Refsnes\demo_path.js

path.normalize('../../src/../src/node')  //'../../src/node'  gets rid of the extra ., .., etc. in the path.
path.normalize('/foo/bar//baz/asdf/quux/..');// Returns: '/foo/bar/baz/asdf'
path.normalize('C:\\temp\\\\foo\\bar\\..\\'); // Returns: 'C:\\temp\\foo\\' windows


path.resolve('../../src/../src/node') // resolves to full path '/Users/mtilley/src/node'

path.parse('/home/user/dir/file.txt');
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

path.sep // returns path of the platform MacOS / and windows \
'foo/bar/baz'.split(path.sep);// Returns: ['foo', 'bar', 'baz']