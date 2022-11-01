const fsP = require('fs/promises');
//[one.txt]
const argv = process.argv.slice(2);

async function cat(path) {
  try {
    const contents = await fsP.readFile(`./${path[0]}`, 'utf8');
    console.log(contents);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

cat(argv);