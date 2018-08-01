var writeFile = require('write');
var inquirer = require('inquirer');
const fs = require('fs');

let sass = fs.readFileSync('template/template.scss', 'utf8');
let main = fs.readFileSync('template/Template.js', 'utf8');

inquirer.prompt([
  {
    type: "text",
    message: "Component Name?",
    name: "name",
  }
]).then(function(inquirerResponse) {

  let low = inquirerResponse.name.toLowerCase();
  var up = low.charAt(0).toUpperCase() + low.substr(1)

  console.log(low);
  console.log(up);

  sass = sass.replace("%name%", low);
  main = main.replace("%name%", low);
  main = main.replace("%name%", low);
  main = main.replace("%name%", low);
  main = main.replace("%Name%", up);
  main = main.replace("%Name%", up);
  main = main.replace("%Name%", up);
  main = main.replace("%Name%", up);
  main = main.replace("%Name%", up);


  // console.log(res);

  writeFile('output/'+up+'/'+up+'.js', main, function(err) {
    if (err) console.log(err);
  });

  writeFile('output/'+up+'/'+low+'.scss', sass, function(err) {
    if (err) console.log(err);
  });



});
