import axios from "axios";

const fetchProducts = (route: string) => {
  return axios
    .get("http://localhost:3003/api/productos/tienda-libre", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((e: Error) => {
      console.log(e);
      return [];
    });
};

export default fetchProducts;
