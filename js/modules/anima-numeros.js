export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((numero) => {
      const value = +numero.innerText;
      const incremento = Math.floor(value / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;

        numero.innerText = start;

        if (start > value) {
          numero.innerText = value;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector(".numeros");

  observer.observe(observerTarget, { attributes: true });
}
