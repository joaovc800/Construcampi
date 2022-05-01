import anime from '../animeJS/lib/anime.es.js';

function checarViewport() {
	/**
	 * Esta função checa se a página esta com o display mobile
	 */
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		return true;
	}
	return false
}

if(!document.cookie.match(/^(.*;)?\s*primeiroAcesso\s*=\s*[^;]+(.*)?$/)) {

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
				document.cookie = "primeiroAcesso=true; max-age=3600; path=/";
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
	document.querySelector('.animacao').remove();
	document.querySelector('.before_anim').classList.remove("before_anim");
	document.querySelector('.hide_content_anim').classList.remove("hide_content_anim");
	if (checarViewport()) document.querySelector('.hide_content_anim_mobile').classList.remove("hide_content_anim_mobile");
}
