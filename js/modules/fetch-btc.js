export default function initFetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btcPrice) => {
      const btcSpan = document.querySelector(".btc-preco");
      btcSpan.innerText = (1000 / btcPrice.BRL.sell).toFixed(6);
    })
    .catch((err) => {
      console.log(err);
    });
}
