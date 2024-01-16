import axios from "axios";

const fetchCounts = () => {
  return axios
    .get("https://tiendalibre-backend.onrender.com/api/counts", {
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

export default fetchCounts;
