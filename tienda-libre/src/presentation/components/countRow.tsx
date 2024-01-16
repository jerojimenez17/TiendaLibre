import React from "react";
import Product from "../../models/Product";
import { Paper } from "@mui/material";
interface props {
  count: Product;
}
const CountRow = ({ count }: props) => {
  return (
    <Paper>
      <div className="rounded p-4 bg-white shadow-sm m-1 row max-w-full text-xs sm:text-md md:text-lg">
        <div className="flex items-center justify-around gap-2 align-middle">
          <div className="col w-1/4">
            <p>
              {count.price
                ? new Date(
                    (count.price - (25567 + 2)) * 86400 * 1000
                  ).toLocaleDateString()
                : "-"}
            </p>
          </div>
          <div className="col w-1/4">{count.cod}</div>
          <div className="col w-1/4">
            <p>${count.description}</p>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default CountRow;
