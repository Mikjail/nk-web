const fs = require("fs-extra");

fs.writeFile("./docs/CNAME", "anastasiiakiias.com", function (err) {
  if (err) throw err;
  console.log("CNAME file created successfully.");
});
