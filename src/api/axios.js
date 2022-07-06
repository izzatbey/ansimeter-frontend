import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.1.120:105",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
