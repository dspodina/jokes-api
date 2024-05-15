const createJoke = (jokeData) => {
  // main container
  const container = document.createElement("div");
  container.id = "joke-container";
  container.classList.add("joke-container");

  // category
  const category = document.createElement("h2");
  category.id = "category";
  category.classList.add("category");
  category.innerText = jokeData.category;

  // underline
  const underline = document.createElement("div");
  underline.classList.add("underline");

  container.append(category, underline);

  //   check the type
  if (jokeData.type === "twopart") {
    // setup
    const setup = document.createElement("p");
    setup.id = "setup";
    setup.classList.add("setup");
    setup.innerText = jokeData.setup;

    // delivery
    const delivery = document.createElement("p");
    delivery.id = "delivery";
    delivery.classList.add("delivery");
    delivery.innerText = jokeData.delivery;
    container.append(setup, delivery);
  } else {
    // joke
    const joke = document.createElement("p");
    joke.id = "joke";
    joke.classList.add("joke");
    joke.innerText = jokeData.joke;
    container.append(joke);
  }

  //   flags
  const flags = document.createElement("ul");
  flags.id = "flags";
  flags.classList.add("flags");
  for (const flag in jokeData.flags) {
    const li = document.createElement("li");
    li.className = String(jokeData.flags[flag]);
    li.innerText = flag;
    flags.append(li);
  }

  //   lang
  //   const lang = document.createElement("p");
  //   lang.id = "lang";
  //   lang.classList.add("lang");
  //   lang.innerText = jokeData.lang;

  // safe
  const safe = document.createElement("ul");
  safe.id = "safe";
  if (jokeData.safe === true) {
    safe.classList.add("safe");
    safe.innerHTML = '<span id="green-dot">&#x2022;</span>Light-hearted humor';
  } else {
    safe.classList.add("unsafe");
    safe.innerHTML = '<span id="red-dot">&#x2022;</span>Warning: explicit content';
  }

  container.append(safe, flags);

  return container;
};

export default createJoke;
