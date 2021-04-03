const xlsx = require('xlsx');
const fs = require('fs');


const file = xlsx.readFile(__dirname+"/data.xlsx");

// console.log(file);
// console.log(file.SheetNames);

const ws = file.Sheets['Sheet1'];

let data = [];

for(var i=0;i<file.SheetNames.length;i++){
    let sheetname = file.SheetNames[i];
    let workSheet =  file.Sheets[sheetname];
    let value = xlsx.utils.sheet_to_json(workSheet)
    data.push(value);
}
console.log(data);

fs.writeFile(__dirname+"/excel-to-json", '',function(err){
    if (err) throw err;
    console.log("data removed!");
});

fs.writeFile(__dirname+"/excel-to-json", JSON.stringify(data,null,2),function(err){
    if (err) throw err;
    console.log("Done!");
})






 
