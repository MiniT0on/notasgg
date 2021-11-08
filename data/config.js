// Agregando la funcion de guardar notas

{ 
    if(localStorage.length <= 0){
        localStorage.setItem('Notas', '');
    }else{
        console.log("El almacenamiento esta funcionando!");
    }

    document.getElementById('formato').addEventListener('submit', e=>{
        AddNote();
        e.preventDefault();
        document.getElementById('formato').reset();
    });

    function AddNote(){
        let title = document.getElementById('wol1').value;
        let description = document.getElementById('wol2').value;

        const objetos = {
            'title': title,
            'description': description
        };
        let det = ``;
        if(description == det.startsWith(`""`) || description == det.startsWith(`''`)){
            alert('Las comillas no se permiten');
        }else{
            if(localStorage == null){
                if(localStorage.getItem('Notas') == null){
                    let tasks = [];
                    tasks.push(objetos);
                    localStorage.setItem('Notas', JSON.stringify(tasks));
                }else{
                    let tasks = JSON.parse(localStorage.getItem('Notas'));
                    tasks.push(objetos);
                    localStorage.setItem('Notas', JSON.stringify(tasks));
                }
            }else{
                if(localStorage.getItem('Notas') == null){
                    let tasks = [];
                    tasks.push(objetos);
                    localStorage.setItem('Notas', JSON.stringify(tasks));
                }else{
                    let tasks = JSON.parse(localStorage.getItem('Notas'));
                    tasks.push(objetos);
                    localStorage.setItem('Notas', JSON.stringify(tasks));
                }
            }
        }
    }
    function borrarElemento(tatle){
        let taka = JSON.parse(localStorage.getItem('Notas'));
        for(let i = 0; i < taka.length; i++){

            if(taka[i].title == tatle){
                taka.splice(i, 1)
            }
        }
        localStorage.setItem('Notas', JSON.stringify(taka));
        obtenerInformacion();
    }

     function obtenerInformacion() {
        let taka = JSON.parse(localStorage.getItem('Notas'));
        let nana = document.getElementById('Manejador');
        nana.innerHTML = '';
        for(let i = 0; i < taka.length; i++) {
          let titulo = taka[i].title;
          let descripcion = taka[i].description;
          
          let ventana = document.createElement("div");
          ventana.id= "viewNoteV1-" + i;
          ventana.className = "viewNoteV1";

          if(ventana.id != null){

            ventana.innerHTML = `
            <div class="cuerpo">
                <div class="arriba">
                    <p>Titulo:
                    <p id="AddTitle2">${titulo}</p>
                    </p>
                    <button class="close" id="Sayonara" onclick='document.getElementById("viewNoteV1-${i}").style.display = "none" '>X</button>
                </div>
                <div class="abajo">
                    <p>Mensaje: </p>
                    <p id="AddText" style="font-family:var(--Familia1);">${descripcion}</p>
                </div>
          </div>`;
          document.querySelector(".guardadoText").appendChild(ventana);
          // Ventana de las GOD

          nana.innerHTML += `<div>
              <div class="distraccion3">
                  <p>${titulo}</p>
              </div>
              <button class="btn view" onclick='document.querySelector("#viewNoteV1-${i}").style.display= "block" '>Ver</button>
              <button class="btn delet peligro" onclick='document.querySelector("#viewNoteV1-${i}").remove();borrarElemento("${titulo}")'>Eliminar</button>
              <div class="distraccion2">
                  <label style="Cursor: text;">${descripcion}</label>
              </div>

              </div>
          `;
          }else{
            ventana.remove();
          }
          
        }
      }
    
}