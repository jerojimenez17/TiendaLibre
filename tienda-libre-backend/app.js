const express = require("express");
const bodyParser = require("body-parser");
const readExcelFile = require("./utils/readExcelFile");
var cors = require("cors");

const app = express();
app.use(cors());

// body parser to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API ROUTES

// app.post("/postFile",(req,res)=>{
//     const data=req.body;
// });

// ["code", "description", "amount", "talle", "price"]

app.get("/api/productos/tienda-libre", (req, res) => {
  const products = readExcelFile(
    1,
    [0, 2, 3, 1, 5],
    "./excel-files/tienda-libre.xlsx",
    4
  );

  res.send(products);
});
app.get("/api/counts", (req, res) => {
  const counts = readExcelFile(
    0,
    [0, 1, -1, -1, 2],
    "./excel-files/ficheroTiendaLibre.xlsx",
    0
  );

  res.send(counts);
});

// start server
const port = process.env.PORT | 3003;
app.listen(port, () => {
  console.log("Listening in port" + port);
});
