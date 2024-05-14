import getJokeApi from "../../apis/getJokeApi.js";

const getJokeHandler = async () => {
  //  fetch joke data
  const data = await getJokeApi();
  // render the data
};

export default getJokeHandler;
