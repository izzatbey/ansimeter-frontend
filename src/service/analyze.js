import axios from "../api/axios"

export const postAnalyze = async (data) => {
  try {
    const response = await axios.post("/analyze-tweets", JSON.stringify(data));
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
