document.addEventListener("DOMContentLoaded", () => {
	const cartas = [
		{
		  name:'cachorro',
		  img:'image/cachorro.png',
		},
		{
		  name:'cavalo',
		  img:'image/cavalo.png',
		},
		{
		  name:'gato',
		  img:'image/gato.png',
		},
		{
		  name:'leao',
		  img:'image/leao.png',
		}, 
		{
		  name:'pato',
		  img:'image/pato.png',
		},
		{
		  name:'urso',
		  img:'image/urso.png',
		},
		{
		  name:'cachorro',
		  img:'image/cachorro.png',
		},
		{
		  name:'cavalo',
		  img:'image/cavalo.png',
		},
		{
		  name:'gato',
		  img:'image/gato.png',
		},
		{
		  name:'leao',
		  img:'image/leao.png',
		},
		{
		  name:'pato',
		  img:'image/pato.png',
		},
		{
		  name:'urso',
		  img:'image/urso.png',
		},
	]

	cartas.sort(() => 0.5 - Math.random(0, 1));

	const baralho = document.querySelector('.baralho')
	const textoResultado = document.querySelector('#resultado')
	let cartasEscolhidas = []
	let cartasEscolhidasId = []
	let cartasEncontradas = []

	function criarBaralho() {
		for (let i = 0; i < cartas.length; i++) {
		  const card = document.createElement('img')
		  card.setAttribute('src', 'image/verso.png')
		  card.setAttribute('data-id', i)
		  card.addEventListener('click', virarCarta)
		  baralho.appendChild(card)
		}
	}

	function checkForMatch() {
		const cartas = document.querySelectorAll('img')
		const escolhaUmId = cartasEscolhidasId[0]
		const escolhaDoisId = cartasEscolhidasId[1]

		if(escolhaUmId == escolhaDoisId) {
		  cartas[escolhaUmId].setAttribute('src', 'image/verso.png')
		  cartas[escolhaDoisId].setAttribute('src', 'image/verso.png')
		  alert('Escolha outra carta!')
		}
		else if (cartasEscolhidas[0] === cartasEscolhidas[1]) {
		  alert('Combinação encontrada!')
		  cartas[escolhaUmId].removeEventListener('click', virarCarta)
		  cartas[escolhaDoisId].removeEventListener('click', virarCarta)
		  cartasEncontradas.push(cartasEscolhidas)
		} else {
		  cartas[escolhaUmId].setAttribute('src', 'image/verso.png')
		  cartas[escolhaDoisId].setAttribute('src', 'image/verso.png')
		  alert('Que pena, tente novamente!')
		}
		cartasEscolhidas = []
		cartasEscolhidasId = []

		textoResultado.textContent = 'Pares: '+cartasEncontradas.length
		if  (cartasEncontradas.length === cartas.length/2) {
		  textoResultado.textContent = 'Você venceu! Todos os pares foram encontrados!'
		}
	}

	function virarCarta() {
		let cartaId = this.getAttribute('data-id')
		cartasEscolhidas.push(cartas[cartaId].name)
		cartasEscolhidasId.push(cartaId)
		this.setAttribute('src', cartas[cartaId].img)
		if (cartasEscolhidas.length == 2) {
		  setTimeout(checkForMatch, 50)
		}
	}

	criarBaralho()
})
