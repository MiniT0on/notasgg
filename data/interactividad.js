{
    let botones = {
        "abrirNotas": document.getElementById("btn2"),
        "abrirAddNoteGOD": document.getElementById("btn1"),
        "configuracionBoton": document.getElementById("btn3"),
        "abrirAdvertencia": document.querySelector("#wintex"),
        "cerrarAdvertencia": document.getElementById("Sayonara2")
    };

    let ventanasGOD = {
        "agregarNotas": document.getElementById("wentana"),
        "verNotas": document.getElementById("prota"),
        "alertaGOD": document.querySelector(".viewWarn")
    };

    botones["abrirNotas"].addEventListener("click", ()=>{
       if(ventanasGOD["agregarNotas"].style.height == "0"+"%"){
           setTimeout(function(){
               ventanasGOD["agregarNotas"].style.height = "85"+"%";
               obtenerInformacion();
           }, 300);
        ventanasGOD["verNotas"].style.height = "0"+"%";
       }else{
           alert("Esta ventana ya esta abierta");
       }
    });

    botones["abrirAddNoteGOD"].addEventListener("click", ()=>{
        if(ventanasGOD["verNotas"].style.height == "0"+"%"){
            setTimeout(function(){
                ventanasGOD["verNotas"].style.height = "80"+"%";
            }, 300);
         ventanasGOD["agregarNotas"].style.height = "0"+"%";
        }else{
            alert("Esta ventana ya esta abierta");
        }
     });

     botones["abrirAdvertencia"].addEventListener("click", function(){
         let numero = 0
         if(numero == 0){
            ventanasGOD["alertaGOD"].style.display = "block";
            document.querySelector(".TxtoWe").innerHTML = "Colocar codigo <b>HTML</b> o <b>CSS</b> o <b>JavaScript</b> puede ocasionar errores fatales en la Synstaxis de nuestro programa y no coloques codigo dañino dentro de las cajas de texto o dentro de la consola por que puede ser codigo malicioso y pueden robarte tu información personal que este guardados dentro de este servidor local. Gracias por su atención, espero y siga nuestra advertencia.";
         }
     });

     botones["cerrarAdvertencia"].addEventListener("click", ()=>{
        ventanasGOD["alertaGOD"].style.display = "none";
     });

     botones["configuracionBoton"].onclick = function(){{
         alert("Esta opcion aun no esta disponible en nuestro sistema, cuando este disponible te lo haremos saber una vez hayas vuelto a entrar aquí.");
     }}
}