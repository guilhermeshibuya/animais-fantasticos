export default function fetchBtc(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((btcPrice) => {
      const btcSpan = document.querySelector(target);
      btcSpan.innerText = (1000 / btcPrice.BRL.sell).toFixed(6);
    })
    .catch((err) => console.log(err));
}
