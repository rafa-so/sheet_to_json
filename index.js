var XLSX = require('xlsx');
var fs   = require('fs');

function main() {
    const root_path = "/path/anywhere";
    const path = `${root_path}/icones.xlsx`

    var workbook = XLSX.readFile(path);
    const sheet_name_list = workbook.SheetNames;

    let finalJson = [];

    for(let i = 0; i < sheet_name_list.length; i++) {
        const json = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheet_name_list[i]]
        );

        finalJson = [ ...finalJson, ...json ]
    }

    fs.writeFileSync(`${root_path}/icones.json`, JSON.stringify(finalJson));
}

main();