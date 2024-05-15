import getJokeHandler from "../handlers/getJokeHandler.js";

const loadEvent = () => {
  window.addEventListener("load", getJokeHandler);
};

export default loadEvent;
