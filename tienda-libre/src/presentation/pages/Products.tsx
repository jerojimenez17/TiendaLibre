import { Refresh } from "@mui/icons-material";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Cart from "../components/cart/Cart";
import ProductGrid from "../components/ProductGrid";
import Product from "../../models/Product";
import { fetchProductsFromFB, saveProducts } from "../../services/FireBase";
import fetchProducts from "../../services/ProductService";

interface ProductProps {
  openCart: boolean;
}
const Products = ({ openCart }: ProductProps) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [allProductsFB, setAllProductsFB] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsListName, setProductListName] = useState<string>("taladro");
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    fetchProducts(productsListName).then((productsWS: Product[]) =>
      setAllProducts(productsWS)
    );
  }, []);

  // const loadMore = () => {
  //   if (rowsPerPage + 10 < allProducts.length) {
  //     setRowsPerPage(rowsPerPage + 10);
  //     console.log(rowsPerPage);
  //   } else {
  //     setHasMore(false);
  //   }
  // };
  const handleRefresh = () => {};
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
  };
  const handleSearch = (e: any) => {
    if (e.target.value === "") {
      setSearch("");
    }
  };
  const handleSaveProducts = async () => {
    saveProducts(productsListName, allProducts);
  };
  return (
    <>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        className="search-select-container"
        sx={{ m: 1 }}
      >
        <TextField
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            maxWidth: "25%",
            minWidth: "25%",
            maxHeight: "60px",
            height: "50px",
            ml: 4,
          }}
          variant="outlined"
          label="Buscar"
          color="primary"
          onKeyDown={handleKeyPress}
          onChange={handleSearch}
        />

        {/* </Box>
      </Box> */}
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={openCart ? 6 : 12}>
          {/* <InfiniteScroll
          dataLength={products.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<h4>Cargando...</h4>}
        >
          <ProductsTable
            products={allProducts}
            rowsPerPage={rowsPerPage}
            searchText={search}
          />
        </InfiniteScroll> */}
          <ProductGrid
            openCart={openCart}
            products={allProducts.filter((product) => {
              return (
                product.description
                  ?.toString()
                  .toLocaleLowerCase()
                  .includes(search.toLowerCase()) ||
                product.cod
                  ?.toString()
                  .toLocaleLowerCase()
                  .includes(search.toLowerCase()) ||
                product.amount
                  ?.toString()
                  .toLocaleLowerCase()
                  .includes(search.toLowerCase())
              );
            })}
          />
        </Grid>
        <Grid
          item
          xs={openCart ? 12 : 0}
          md={openCart ? 6 : 0}
          hidden={!openCart}
        >
          <Cart />
        </Grid>
      </Grid>
    </>
  );
};

export default Products;
