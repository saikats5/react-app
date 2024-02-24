const express = require("express");
const app = express();
const port = 5500;
const mongoDB = require("./db");
mongoDB();
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
});
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
