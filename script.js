//CALCULADORA DE PORCENTAGEM 
const valorEl = document.getElementById('valor');
const resultadoEl = document.getElementById('resultado');
const valueEl = resultadoEl.querySelector('.value');
const descEl = resultadoEl.querySelector('.desc');

function show(text, val) {
  descEl.textContent = text;
  valueEl.textContent = `R$ ${val.toFixed(2).replace('.', ',')}`;
  resultadoEl.classList.remove('show');
  void resultadoEl.offsetWidth;
  resultadoEl.classList.add('show');
}

function calcularPorcentagem(p) {
  const valor = parseFloat(valorEl.value);

  if (isNaN(valor) || valor <= 0) {
    show('⚠️ Insira um valor válido.', 0);
    return;
  }

  let final;
  if (p === 30) {
    final = valor * 0.7;
    show(`DESCONTO DE ${p}%: Valor final`, final);
  } else if (p === 50) {
    final = valor * 0.5;
    show(`${p}% de R$ ${valor.toFixed(2).replace('.', ',')}`, final);
  }
}

document.getElementById('btn50').addEventListener('click', () => calcularPorcentagem(50));
document.getElementById('btn30').addEventListener('click', () => calcularPorcentagem(30));

// ➕ Quando apertar Enter, faz o cálculo de 50% por padrão
valorEl.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    calcularPorcentagem(50); //pode trocar para 30 se quiser
  }
});


// CALCULADORA DE GIRO 
const valorGiroEl = document.getElementById('valorGiro');
const resultadoGiroEl = document.getElementById('resultadoGiro');
const valueGiroEl = resultadoGiroEl.querySelector('.value');
const descGiroEl = resultadoGiroEl.querySelector('.desc');
function showGiro(text, val) {
  descGiroEl.textContent = text;
  valueGiroEl.textContent = val.toFixed(3);
  resultadoGiroEl.classList.remove('show');
  void resultadoGiroEl.offsetWidth;
  resultadoGiroEl.classList.add('show');
}
function calcularGiro() {
  const valor = parseFloat(valorGiroEl.value);

  if (isNaN(valor) || valor <= 0) {
    showGiro('⚠️ Insira um valor válido.', 0);
    return;
  }

  const resultado = valor * 30;
  showGiro(`O giro desse produto é`, resultado);
}

document.getElementById('btnGiro').addEventListener('click', calcularGiro);

// ➕ Quando apertar Enter, faz o cálculo do giro automaticamente
valorGiroEl.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    calcularGiro();
  }
});
