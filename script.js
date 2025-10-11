const valorEl = document.getElementById('valor');
const resultadoEl = document.getElementById('resultado');
const valueEl = resultadoEl.querySelector('.value');
const descEl = resultadoEl.querySelector('.desc');

function show(text, val) {
  descEl.textContent = text;
  valueEl.textContent = `R$ ${val.toFixed(2).replace('.', ',')}`;
  resultadoEl.classList.remove('show');
  void resultadoEl.offsetWidth; // força reflow para reiniciar a animação
  resultadoEl.classList.add('show');
}

function calcularPorcentagem(p) {
  const valor = parseFloat(valorEl.value);

  if (isNaN(valor) || valor <= 0) {
    show('⚠️ Insira um valor válido.', 0);
    return;
  }

  if (p === 30) {
    const final = valor * 0.7;
    show(`DESCONTO DE ${p}%: Valor final`, final);
  } else if (p === 50) {
    const parte = valor * 0.5;
    show(`${p}% de R$ ${valor.toFixed(2).replace('.', ',')}`, parte);
  }
}

document.getElementById('btn50').addEventListener('click', () => calcularPorcentagem(50));
document.getElementById('btn30').addEventListener('click', () => calcularPorcentagem(30));
