const app = require("../app");

const db = require("../models/db");

const PORT = process.env.PORT || 3000;

db.then(() => {
  app.listen(PORT, () => {
  });
}).catch((e) => {
  console.log(`Error: ${e.message}`);
});
