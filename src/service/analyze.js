export const postAnalyzeTokped = async (data) => {
  try {
    const response = await axios.post("/analyze-tweets", JSON.stringify(data));
    console.log(response);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
