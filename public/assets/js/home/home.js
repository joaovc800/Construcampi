// Utilizado para remover a div do modal ao sair do video


$(function(){

  window.exit_modal = function exit_modal() { // sair do modal
    $("div_modal_video").modal("hide");
    var nodeModal = document.getElementById("div_modal_video");
    if(nodeModal){
      nodeModal.remove();
    }
  }

  // Modal com video
  const videoButton = document.getElementById("video_player_home");
  videoButton.addEventListener('click', createVideoModal);
  
  function createVideoModal() {
    // remove o modal antigo
    var nodeModal = document.getElementById("div_modal_video");
    if(nodeModal){
      nodeModal.remove();
    }
    var div = criaElemento({ element: "div", id: "div_modal_video"});
    div.classList.add("modal");
    document.body.prepend(div);

    const modal = `
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content" style="background-color:#222222; z-index:"20000;">
          <div class="modal-header" style="border-bottom:1px solid #ae9625">
            <h5 class="modal-title h4" id="exampleModalFullscreenLabel">CONSTRU</a>C<span style="color:#f00">A</span>MPI</h5>
            <button type="button" class="btn-close btn-close-white" onclick="exit_modal()" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body" id="modal-body" style="position:relative;">
          <video preload="auto" autoplay loop style="position:absolute;left:0;right:0;width:100%;">
            <source src="./public/videos/video_site_completo.mp4">
          </video>
          </div>
          <div class="modal-footer" style="border-top:1px solid #ae9625; justify-content:space-between;">
            <h5 style="color:#eeeeee;">&copy; Construcampi 2022. All rights reserved.</h5>
            <button type="button" class="btn btn-secondary" onclick="exit_modal()" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
    </div>
    `
    document.getElementById("div_modal_video").innerHTML = modal;
    $("#div_modal_video").modal("show");  
  }

  // Criar elemento do modal
  function criaElemento(param){
      
    element = document.createElement(param.element);
    
    if(param.id){
      element.setAttribute("id",param.id);
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

  //Arrow para voltar ao inicio da pagina
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $("#back").fadeIn();
    }else{
      $("#back").fadeOut();
    }
  });

  $("#back").click(function(){
    $("body,html").animate({
      scrollTop: 0
    },100);
    return false;
  });
})
