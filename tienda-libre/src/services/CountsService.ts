import axios from "axios";

const fetchCounts = () => {
  return axios
    .get("http://localhost:3003/api/counts", {
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
