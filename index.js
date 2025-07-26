function fetchingJoke(response) {
  //let jokeSetUp = response.data.setup;
  // let jokeDelivery = response.data.delivery;
  // let fullJoke = `${jokeSetUp} ${jokeDelivery} `;

  new Typewriter("#joke", {
    strings: response.data.setup,
    autoStart: true,
    cursor: null,
  });

  new Typewriter("#jokeDelivery", {
    strings: response.data.delivery,
    autoStart: true,
    cursor: null,
    pauseFor: 1500,
  });

  //jokeElement.innerHTML = `${jokeSetUp}😃`;
  //deliveryElement.innerHTML = `${jokeDelivery} 😂🤣`;
}
function handleClick(event) {
  let apiUrl = "https://v2.jokeapi.dev/joke/Pun?type=twopart";
  jokeElement.innerHTML = "ready??";
  jokeDeliveryElement.innerHTML = "here we go!😃";
  axios.get(apiUrl).then(fetchingJoke);
}
let jokeButton = document.getElementById("jokeButton");
let jokeElement = document.getElementById("joke");
let jokeDeliveryElement = document.getElementById("jokeDelivery");

jokeButton.addEventListener("click", handleClick);
