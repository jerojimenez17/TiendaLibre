import axios from "axios";

const fetchProducts = (route: string) => {
  return axios
<<<<<<< HEAD
    .get(
      `https://tiendalibre-backend.onrender.com/api/productos/tienda-libre`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
=======
    .get("https://tiendalibre-backend.onrender.com/api/productos/tienda-libre", {
      headers: {
        "Content-Type": "application/json",
      },
    })
>>>>>>> e107fc4852bcc42130121a1f204e61293517a59f
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
