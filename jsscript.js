var fs = require("fs");
let randomNum = Math.floor(Math.random() * 100) % 50;
const devName = "Linda Giurca";
const github = "https://github.com/lindaaasd";

fs.writeFile(
  "./src/build-info.js",
  `
   window.mysettings = window.mysettings || {}; 
   window.mysettings.builNo = ${randomNum};
   window.mysettings.devBy='${devName}';
   window.mysettings.github='${github}';`,
  function (err) {
    if (err) throw err;
    console.log("File is created");
  }
);
