export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioFuncionamento = funcionamento.dataset.horario
    .split(",")
    .map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const diaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horarioAgora >= horarioFuncionamento[0] &&
    horarioAgora < horarioFuncionamento[1];

  if (diaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
