const getJokeApi = async () => {
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any");
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data;
    }
    throw new Error("Failed to fetch the joke");
  } catch (err) {
    console.log(err);
  }
};

export default getJokeApi;
