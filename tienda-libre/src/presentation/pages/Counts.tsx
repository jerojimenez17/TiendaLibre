import React, { useEffect, useState } from "react";
import fetchCounts from "../../services/CountsService";
import Product from "../../models/Product";
import CountRow from "../components/countRow";
import SearchInput from "../components/SearchInput";

const Counts = () => {
  const [counts, setCounts] = useState<Product[]>([]);
  const [searchName, setSearchName] = useState("");
  const [errorLoad, setErrorLoad] = useState(false);
  useEffect(() => {
    fetchCounts()
      .then((counts) => {
        setCounts(counts);
      })
      .catch((err) => {
        setCounts([]);
        setErrorLoad(true);
      });
  }, []);
  return (
    <div>
      <SearchInput handleChange={(value) => setSearchName(value)} />
      <div>
        {counts
          .filter((count) => {
            return count.cod
              ?.toString()
              .toLocaleLowerCase()
              .includes(searchName.toLocaleLowerCase());
          })
          .map((count) => (
            <div key={count.id}>
              <CountRow count={count} />
            </div>
          ))}
        <div className="text-lg font-semibold m-2 p-2">
          Total: $
          {counts?.reduce(
            (acc, count) =>
              count.id !== "f345" ? acc + Number(count.description) : acc,
            0
          )}
        </div>
      </div>
    </div>
  );
};

export default Counts;
