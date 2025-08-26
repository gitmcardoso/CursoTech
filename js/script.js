// animação
function animarContador(id, valorFinal, duracao) {
  const elemento = document.getElementById(id);
  let inicio = 0;
  const incremento = Math.ceil(valorFinal / (duracao / 16));
  const intervalo = setInterval(() => {
    inicio += incremento;
    if (inicio >= valorFinal) {
      elemento.textContent = valorFinal.toLocaleString("pt-BR");
      clearInterval(intervalo);
    } else {
      elemento.textContent = inicio.toLocaleString("pt-BR");
    }
  }, 16);
}

document.addEventListener("DOMContentLoaded", function () {
  animarContador("contador", 10000, 4000); 
});
