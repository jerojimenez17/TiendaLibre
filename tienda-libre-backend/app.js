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
    [0, 2, 4, 1, 5],
    "./excel-files/tienda-libre.xlsx"
  );

  res.send(products.map((product) => ({ ...product, price: product.price })));
});

// start server
const port = process.env.PORT | 3003;
app.listen(port, () => {
  console.log("Listening in port" + port);
});
