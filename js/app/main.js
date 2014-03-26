var APP = APP||{};
APP.Controlador = (function(){
    "use strict";


$(document).on('click', $ruta, function(e){
            console.log("han hecho click en alertas");

        var alertas = APP.Alertas.getAlertas("00001");
        if (alertas.length){
            console.log("hay alertas");
            APP.UI.mostrarAlertas(alertas);
            console.log(alertas);
        } else APP.UI.esconderAlertas(alertas);
    });


        var laRuta = document.getElementById("ruta");
        laRuta.addEventListener("click", APP.Ui.muestraRuta(), false);
        console.log(laRuta);

          var elCamion = document.getElementById("camion");
        elCamion.addEventListener("click", muestraCamion, false);
          var elRemolque = document.getElementById("remolque");
        elRemolque.addEventListener("click", muestraRemolque, false);





});

APP.Controlador();