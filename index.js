function fetchingJoke(response) {
  let deliveryString = response.data.delivery;
  console.log(deliveryString);
  new Typewriter("#joke", {
    strings: response.data.setup,
    autoStart: true,
    cursor: null,
    delay: 30,
  });
  deliveryButton.style.visibility = "visible";
  deliveryButton.addEventListener("click", () =>
    displayDelivery(deliveryString)
  );
}
function displayDelivery(string) {
  new Typewriter("#jokeDelivery", {
    strings: `${string}😂🤣`,
    autoStart: true,
    cursor: null,
    delay: 30,
  });
}
function handleClick(event) {
  event.preventDefault();
  let apiUrl = "https://v2.jokeapi.dev/joke/Pun?type=twopart";
  jokeElement.innerHTML = "ready??";
  jokeDeliveryElement.innerHTML = "here we go!😃";
  axios.get(apiUrl).then(fetchingJoke);
}
let jokeButton = document.getElementById("jokeButton");
let jokeElement = document.getElementById("joke");
let jokeDeliveryElement = document.getElementById("jokeDelivery");
let deliveryButton = document.querySelector("#deliveryButton");

jokeButton.addEventListener("click", handleClick);
