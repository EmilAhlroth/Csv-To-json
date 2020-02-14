/** csv file
a,b,c
1,2,3
4,5,6
*/
const fs = require('fs');
const csvFilePath ='./exel.csv'
const csv = require('csvtojson')
var http = require('http');
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);

     var send = JSON.stringify (jsonObj);
    fs.writeFileSync('./resultat.json', send);
  })

  http.createServer(function (req, res) {
    //Open a file on the server and return its content:
    fs.readFile('resultat.json', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8080);
