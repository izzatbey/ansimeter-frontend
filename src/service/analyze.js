export const postAnalyzeTokped = async () => {
  try {
    const response = await axios.post(
      "/start",
      JSON.stringify({
        name,
        url,
        operator,
        period,
        description,
        skill,
        motive,
        opportunity,
        population,
        discovery,
        exploit,
        awareness,
        intrusion,
        confidentality,
        integrity,
        availability,
        accountability,
        financial,
        reputation,
        compliance,
        privacy,
      })
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
