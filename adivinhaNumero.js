var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.guesses');
var ultimoResultado = document.querySelector('.lastResult');
var baixoOuAlto = document.querySelector('.lowOrHi');

var envioPalpite = document.querySelector('.guessSubmit');
var campoPalpite = document.querySelector('.guessField');

var contagemPalpites = 1;
var botaoReinicio;

campoPalpite.focus();

function conferirPalpite() {
	var palpiteUsuario = Number(campoPalpite.value);
	if (contagemPalpites === 1) {
		palpites.textContent = 'Palpites anteriores: ';
	} 
	palpites.textContent += palpiteUsuario + ' ';

	if (palpiteUsuario === numeroAleatorio) {
		ultimoResultado.textContent = 'Parabéns, você acertou!';
		ultimoResultado.style.backgroundColor = 'green';
		baixoOuAlto.textContent = '';
		configFimDeJogo();
	} else if (contagemPalpites === 10) {
		ultimoResultado.textContent = 'Você perdeu!';
		baixoOuAlto.textContent = '';
		configFimDeJogo();
	} else {
		ultimoResultado.textContent = 'Você errou!'
		ultimoResultado.style.backgroundColor = 'red';
		if (palpiteUsuario > numeroAleatorio) {
			baixoOuAlto.textContent = 'Palpite muito alto!';
		} else if (palpiteUsuario < numeroAleatorio) {
			baixoOuAlto.textContent = 'Palpite muito baixo!';
		}

		contagemPalpites++;
		campoPalpite.value = '';
		campoPalpite.focus();
	}
}
envioPalpite.addEventListener('click', conferirPalpite);

function configFimDeJogo() {
		campoPalpite.disabled = true;
		envioPalpite.disabled = true;
		botaoReinicio = document.createElement('button');
		botaoReinicio.textContent = 'Iniciar novo jogo';
		document.body.appendChild(botaoReinicio);
		botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
  contagemPalpites = 1;

  var reiniciarParas;
  reiniciarParas = document.querySelectorAll('.resultadoParas p');
  for (i = 0 ; i < reiniciarParas.length ; i++) {
    reiniciarParas[i].textContent = '';
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio);

  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = '';
  campoPalpite.focus();

  ultimoResultado.style.backgroundColor = 'white';

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}