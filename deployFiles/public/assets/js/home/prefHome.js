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

// checa se o cookie existe e coloca um para a politica de privacidade
if(!document.cookie.match(/^(.*;)?\s*cookiesAccepted\s*=\s*[^;]+(.*)?$/)) {
    
    var root = document.body; // pegar body
    
    //criar elementos
    var div = criaElemento({ element: "div", id: `pref`});
    div.classList.add("preferences", "px-0", "p-md-2")
    root.prepend(div); // inserir como o primeiro elemento da div (body no caso)
    
    let pref = `
        <div class="row px-0 px-md-2">
            <div class="col-xl-6 col-xxl-10"> 
                <p class="m-0 p-0 p-md-2 text-dark">Utilizamos cookies para otimizar a experiência de navegação de nossos usuários,
                para mais informações acesse nossas <a href="paginas/politica_privacidade" text-warning>Políticas de Privacidade</a></p> 
            </div>
            <div class="col-xl-6 col-xxl-2 d-flex justify-content-center align-items-center"> 
                <button id="accept" class="btn btn-dark text-light">Entendi</button>
            </div>
        </div>
    `;
    document.getElementById(`pref`).innerHTML = pref;
    document.getElementById('accept').addEventListener('click', () => {
        let node = document.getElementById('pref');
        document.cookie = "cookiesAccepted=true; max-age=60000; path=/";
        node.classList.add("hide_preferences");
    })
}