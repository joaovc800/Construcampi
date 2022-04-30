import anime from '../animeJS/lib/anime.es.js';

function criaElemento(param){ // cria um elemento DOM, necessita de parametros
	
	let element = document.createElement(param.element);
	
	if(param.id){
		element.setAttribute("id",param.id);
	}

	if(param.class){
		for (const key in param.class) {
			if (Object.hasOwnProperty.call(param.class, key)) {
				element.classList.add(param.class[key]);
			}
		}
	}
	
	if(param.text){
		var text = document.createTextNode(param.text);
		element.appendChild(text);
	}
	if(param.attribute){
		for (const key2 in param.attribute) {
			if (Object.hasOwnProperty.call(param.attribute, key2)) {
				element.setAttribute(key2,param.attribute[key2]);
			}
		}
	}
	return element
}


var root = document.body; // pegar body
root.classList.add("before_anim"); // adicionar a classe de overflow

//criar elementos para a animacao e adicionar classes
var div = criaElemento({ element: "div", id: `anim`});
div.classList.add("animacao", "text-center")
root.prepend(div); // inserir como o primeiro elemento < IMPORTANTE

let anim = `
	<div class="p-5 p-md-0 col-12 col-md-4">
		<img class="img-fluid image-spin" src="public/images/logo_animacao.png"></img>
	</div>
	<h1 class="heading h1 col-12 col-md-4 text-justify text-danger">Bem Vindo a Construcampi</h1>
	<h3 class="sub-heading col-12 col-md-4 text-light">Seu objetivo é o Nosso Principal Compromisso e Responsabilidade</h3>
	<div class="loader-wrapper">
	<div class="loader"></div>
	</div>
`;
document.getElementById(`anim`).innerHTML = anim;


document.addEventListener('DOMContentLoaded', () => {
	// Preparar animação
	anime.timeline({
		targets: ".animacao",
		easing: "easeOutExpo",
	})
	.add({
		opacity: ["0","1"],
		duration: 700
	})
	.add({
		delay: 2700,
		opacity: ["1","0"],
		duration: 1200,
		complete: function() {
			document.querySelector('.animacao').remove();
			document.querySelector('.before_anim').classList.remove("before_anim");
		}
	})
	
	//Animacao de carregamento (calcular delay (3400) de 300ms)
	anime({
		targets: ".loader",
		delay: 2000,
		duration: 1000,
		width: ["0", "100%"],
		easing: "easeInOutSine"
	});
	
	anime({
		targets: ".loader-wrapper",
		delay: 1500,
		duration: 1500,
		opacity: 1,
		easing: "easeOutExpo",
		complete: function() {
			anime({ 
				targets: [".loader-wrapper",".loader"],
				opacity: 0
			})
		}
	});
})
