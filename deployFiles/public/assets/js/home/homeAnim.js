import anime from '../animeJS/lib/anime.es.js';
// <img class="img-fluid image-spin" alt="Construcampi Logo" src="public/images/logoAnim/logo_anim_no_bg_lowest.png"></img>
// Carregar a logo primeiro
var logo = new Image();
logo.src = 'public/images/logoAnim/logo_anim_no_bg_lowest.png';
logo.classList.add("img-fluid","image-spin");
logo.alt = "Construcampi Logo";

function checarViewport() {
	/**
	 * Esta função checa se a página esta com o display mobile
	 */
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		return true;
	}
	return false
}

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


let x = document.cookie;
console.log("esse é o cookie", x);

if(!document.cookie.match(/^(.*;)?\s*primeiroAcesso\s*=\s*[^;]+(.*)?$/)) {

	var root = document.body; // pegar body
	root.classList.add("before_anim"); // adicionar a classe de overflow
	
	//criar elementos para a animacao e adicionar classes
	var div = criaElemento({ element: "div", id: `anim`});
	div.classList.add("animacao", "text-center")
	root.prepend(div); // inserir como o primeiro elemento < IMPORTANTE

	
	let anim = `
		<div id="loaded_image" class="p-5 p-md-0 col-12 col-md-4">
			
		</div>
		<h1 class="heading_anim h1 col-12 col-md-4 text-justify text-danger">Bem Vindo a Construcampi</h1>
		<h3 class="sub-heading_anim col-12 col-md-4 text-light">Seu objetivo é o Nosso Principal Compromisso e Responsabilidade</h3>
		<div class="loader-wrapper">
		<div class="loader"></div>
		</div>
	`;
	document.getElementById(`anim`).innerHTML = anim;
	document.getElementById(`loaded_image`).appendChild(myImage);
	
	document.addEventListener('DOMContentLoaded', () => {
		// Preparar animação
		anime.timeline({
			targets: ".animacao",
			easing: "easeOutExpo",
		})
		.add({
			opacity: ["0","1"],
			duration: 1400
		
		})
		.add({
			delay: 2700,
			opacity: ["1","0"],
			duration: 500,
			complete: function() {
				document.querySelector('.before_anim').classList.remove("before_anim"); // Div do body para conter animacao
				// caso for mobile
				document.cookie = "primeiroAcesso=true; expires=Fri, 18 Dec 2023 12:00:00 UTC; path=/";
				console.log('setado!');
				document.querySelector('.animacao').remove();
			}
		})
		
		// Girar a imagem
		anime({
			targets: ".image-spin",
			opacity: 1,
			rotate: {
				value: 360,
				duration: 1400,
				easing: 'easeInOutSine'
			},
			translateY: {
				value: ["-500px", "0px"],
				duration: 1400,
				easing: 'easeInOutQuart'
			},
			translateX: {
				value: ["-100px", "0px"],
				duration: 1900,
				easing: 'easeInOutBounce'
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
				document.querySelector('.hide_content_anim').classList.remove("hide_content_anim"); // div do content
				// roda caso for mobile para mostrar o menu
				if (checarViewport()) document.querySelector('.hide_content_anim_mobile').classList.remove("hide_content_anim_mobile");
			}
		});
	})
} else {
	document.querySelector('.before_anim').classList.remove("before_anim");
	document.querySelector('.hide_content_anim').classList.remove("hide_content_anim");
	if (checarViewport()) document.querySelector('.hide_content_anim_mobile').classList.remove("hide_content_anim_mobile");
}
