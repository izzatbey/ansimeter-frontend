export const postUrlList = async ([{ sentimen }]) => {
  try {
    const response = await axios.post(
      "/start",
      JSON.stringify({
        sentimen,
      })
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
