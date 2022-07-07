import axios from "../api/axios"

export const postCountSentiment = async (data) => {
  try {
    const response = await axios.post(
      "/count-sentiment",
      JSON.stringify(data)
    );
    console.log(response.data)
    return response.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
