const Enmap = require("enmap");
const colors = require("colors");

module.exports = (client) => {
  client.kingdom = new Enmap({
    name: "kingdom",
    dataDir: "./databases/kingdom",
  });

  console.log("[DATABASE] Successfully loaded all databases.".green)

};
