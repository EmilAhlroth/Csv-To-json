/** csv file
a,b,c
1,2,3
4,5,6
*/
const fs = require('fs');
const csvFilePath ='./exel.csv'
const csv = require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);

     var send = JSON.stringify (jsonObj);
    fs.writeFileSync('./resultat.json', send);
  })
