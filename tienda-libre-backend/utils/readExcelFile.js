const xslx = require("xlsx");

module.exports = function readExcelFile(
  initRows,
  columns,
  filePath,
  sheetNumber
) {
  try {
    let obj = [];
    const workbook = xslx.readFile("" + filePath);

    const sheet = workbook.Sheets[workbook.SheetNames[sheetNumber]];
    const products = [];
    let product = {};
    let i = 0;

    const range = xslx.utils.decode_range(sheet["!ref"]);

    // iterate over rows
    for (let rowNum = initRows; rowNum <= range.e.r; rowNum++) {
      // get cell[r,c] value where r = row, c = column
      const codeCell =
        sheet[xslx.utils.encode_cell({ r: rowNum, c: columns[0] })];
      const descriptionCell =
        sheet[xslx.utils.encode_cell({ r: rowNum, c: columns[1] })];
      const amountCell =
        sheet[
          xslx.utils.encode_cell({
            r: rowNum,
            c: columns[2] != -1 ? columns[2] : columns[0],
          })
        ];
      const talleCell =
        sheet[
          xslx.utils.encode_cell({
            r: rowNum,
            c: columns[3],
          })
        ];
      const priceCell =
        sheet[xslx.utils.encode_cell({ r: rowNum, c: columns[4] })];
      // create new product
      if (codeCell || descriptionCell) {
        product = {
          id: filePath.split("/")[2][0] + i++,
          cod: codeCell?.v,
          description: descriptionCell?.v,
          talle: columns[3] != -1 ? talleCell?.v : "",
          price: priceCell?.v,
          amount: amountCell?.v,
        };
        // add product to list
        products.push(product);
      }
    }
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
};
