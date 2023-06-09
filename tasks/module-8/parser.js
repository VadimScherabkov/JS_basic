/**
 * 1. You need to write a parser, which takes the "./utils/test.json" file
 * and will create a new JSON file with the name "./parsed.json" (in current directory!) with the structure:
 * [
 *  {
 *    "docId": "http://doc.epam.com/077b1523-56f0-492a-b954-1269e3acc191"
 *  },
 *  {
 *    "docId": "http://doc.epam.com/077d3a4c-a2fe-4ab9-9046-89c0ce5c5b38"
 *  }
 *  .....
 * ]
 * where 077b1523-56f0-492a-b954-1269e3acc191 - is the value of the name attribute from the "./test.json" file
 * Please NOTE, that you should omit the ".html" extension
 *
 * Use the promise version of FS module.
 * DOCS:
 * 		fs.readFile: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromisesreadfilepath-options
 * 		fs.writeFile: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromiseswritefilefile-data-options
 *
 * 2. Check yourself by running "npm run test:nodejs"
 *
 */
const fs = require('fs/promises');

const jsonParser = async () => {
  //put your code here
  const jsonFile = require('./utils/test.json');
  const path = './tasks/module-8/parsed.json';

  const arr = jsonFile.list.entries;
  const url = 'http://doc.epam.com/';

  const newArr = arr.map(obj => {
    return { docId: url + obj.entry.name.slice(0, -5) };
  });

  await fs.writeFile(path, JSON.stringify(newArr, null, 2), err => {
    if (err) {
      console.log('Failed to write updated data to file');
      return;
    }
  });
};

module.exports = {
  jsonParser,
};
