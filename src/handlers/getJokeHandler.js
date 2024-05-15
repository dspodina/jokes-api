import getJokeApi from "../../apis/getJokeApi.js";
import createJoke from "../components/createJoke.js";
import dom from "../dom.js";

const getJokeHandler = async () => {
  //  fetch joke data
  const jokeData = await getJokeApi();

  // render the data
  const jokeDom = createJoke(jokeData);

  dom.root.innerHTML = "";

  //   append dom element
  dom.root.append(jokeDom);
};

export default getJokeHandler;
