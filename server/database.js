const csv = require('csvtojson');
const path = require('path');


const database = {
    employee : [],
    stock : []
}
const filePath = path.join(__dirname, 'mock_data');

Object.keys(database).forEach(key => {
    csv()
    .fromFile(`${filePath}/${key}.csv`)
    .then(jsonObj => {
        database[key] = jsonObj;
    });
});

module.exports = database;
// module.exports = {url : filePath};