// Modal com video
const videoButton = document.getElementById("video_player_home");
videoButton.addEventListener('click', createVideoModal)

function exit() {
  $("#modal_video").modal("hide");
}

function createVideoModal() {
  
  // remove o modal antigo
  var nodeModal = document.getElementById("div_modal_video");
  if(nodeModal){
    nodeModal.remove();
  }
  var div = criaElemento({ element: "div", id: "div_modal_video"});
  document.body.prepend(div);
  // var myModal = new bootstrap.Modal(document.getElementById('div_modal_video'));
  const modal = `
  <div class="modal fade" id="modal_video" tabindex="-1" role="dialog" style="display: block; z-index:20000;">
    <div class="modal-dialog" style=" width: 100vw; max-width: none; height: 100vh; margin: 0;">
      <div class="modal-content" style="background-color:#222222;">
        <div class="modal-header" style="border-bottom:1px solid #ae9625">
          <h5 class="modal-title h4" id="exampleModalFullscreenLabel">CONSTRU</a>C<span style="color:#f00">A</span>MPI</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" style="margin-right:10px;">
          <video preload="auto" autoplay muted loop style=width:100%>
            <source src="./public/videos/video_site.mp4">
          </video>
        </div>
        <div class="modal-footer" style="border-top:1px solid #ae9625; justify-content:space-between;">
          <h5>&copy; Untitled. All rights reserved.</h5>
          <button type="button" class="btn btn-secondary" onclick="exit()" style="margin-right:10px;" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  `
  // myModal.innerHTML = modal;
  // myModal.show();
  document.getElementById("div_modal_video").innerHTML = modal;
  $("#modal_video").modal("show");
  // videoButton.append(element);
}

// Criar elemento do modal
function criaElemento(param){
    
  element = document.createElement(param.element);
  
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