// By convention, module imports go at the top of a file
const fs = require('fs');

let allItems = [];

const csvFile = fs.readFileSync('../data/raw/education.csv', 'utf-8');

const csvRows = csvFile.split("\n");

// The JS data type has built-in forEach method.
// Want a challenge, rewrite this code using the built-in map method.

csvRows.forEach(createReportItem);

function createReportItem(csvRow) {
  const keyValue = csvRow.split(",");

  // make sure you only have a key and keyValue

  if (keyValue.length === 2) {
    const reportItem = {label: keyValue[0], value: keyValue[1]};
    allItems.push(reportItem);
  }

}

// Serialize and save
const reportJSON = JSON.stringify(allItems);
fs.writeFileSync('../data/processed/education.json', reportJSON);
