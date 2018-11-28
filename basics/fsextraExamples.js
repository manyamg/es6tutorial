const fs = require('fs-extra')

// With Promises:
fs.copy('/tmp/myfile', '/tmp/mynewfile')
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example () {
  try {
    await fs.copy('/tmp/myfile', '/tmp/mynewfile')
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

example()

// copy file
fs.copySync('/tmp/myfile', '/tmp/mynewfile')

// copy directory, even if it has subdirectories or files
fs.copySync('/tmp/mydir', '/tmp/mynewdir')

const filterFunc = (src, dest) => {
    // your logic here
    // it will be copied if return true
  }
  
  fs.copySync('/tmp/mydir', '/tmp/mynewdir', { filter: filterFunc })


///Empty directory /
// With Promises:
fs.emptyDir('/tmp/some/dir')
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example () {
  try {
    await fs.emptyDir('/tmp/some/dir')
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

example()

//**********************ensureFile ****** */
// With Promises:
fs.ensureFile(file)
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example (f) {
  try {
    await fs.ensureFile(f)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

example(file)
//sync 
const file = '/tmp/this/path/does/not/exist/file.txt'
fs.ensureFileSync(file)

//************ensureDir - If the directory structure does not exist, it is created*/
// With Promises:
fs.ensureDir(dir)
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

//*************outfile  -like writing a file*/
// With Promises:
fs.outputFile(file, 'hello!')
.then(() => fs.readFile(file, 'utf8'))
.then(data => {
  console.log(data) // => hello!
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example (f) {
  try {
    await fs.outputFile(f, 'hello!')

    const data = await fs.readFile(f, 'utf8')

    console.log(data) // => hello!
  } catch (err) {
    console.error(err)
  }
}

example(file)


//****************outJson - write a file to json*/
const file = '/tmp/this/path/does/not/exist/file.json'
// With Promises:
fs.outputJson(file, {name: 'JP'})
.then(() => fs.readJson(file))
.then(data => {
  console.log(data.name) // => JP
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example (f) {
    try {
      await fs.outputJson(f, {name: 'JP'})
  
      const data = await fs.readJson(f)
  
      console.log(data.name) // => JP
    } catch (err) {
      console.error(err)
    }
  }
  
  example(file)

  //************path exists */
  // Promise usage:
fs.pathExists(file)
.then(exists => console.log(exists)) // => false

// With async/await:
async function example (f) {
const exists = await fs.pathExists(f)

console.log(exists) // => false
}

example(file)

//readJson
// With Promises:
fs.readJson('./package.json')
.then(packageObj => {
  console.log(packageObj.version) // => 0.1.3
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example () {
  try {
    const packageObj = await fs.readJson('./package.json')
    console.log(packageObj.version) // => 0.1.3
  } catch (err) {
    console.error(err)
  }
}

example()

//sync
const packageObj = fs.readJsonSync('./package.json')
console.log(packageObj.version) // => 2.0.0

//************removes directory like rm -rf */
// With Promises:
fs.remove('/tmp/myfile')
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example (src, dest) {
  try {
    await fs.remove('/tmp/myfile')
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

example()

// remove file
fs.removeSync('/tmp/myfile')

fs.removeSync('/home/jprichardson') // I just deleted my entire HOME directory.

//**************writeJson to file */
// With Promises:
fs.writeJson('./package.json', {name: 'fs-extra'})
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example () {
  try {
    await fs.writeJson('./package.json', {name: 'fs-extra'})
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

example()

//snyc
fs.writeJsonSync('./package.json', {name: 'fs-extra'})


//**************moves file across systems */
// With Promises:
fs.move(srcpath, dstpath)
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example (src, dest) {
  try {
    await fs.move(srcpath, dstpath)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

example(srcpath, dstpath)

fs.moveSync('/tmp/somefile', '/tmp/does/not/exist/yet/somefile')
fs.moveSync('/tmp/somedir', '/tmp/may/already/existed/somedir', { overwrite: true })