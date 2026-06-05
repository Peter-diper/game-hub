import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7005398740524cd1a3d10fb451f7fb95",
  },
});
