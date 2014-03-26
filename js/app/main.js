var APP = APP||{};
APP.Controlador = (function(){
    "use strict";

    APP.Ruta.getRuta(function(ruta){
                        APP.verificarEstado.verificador(ruta);
                    });



        var laRuta  = $(document).on('click', '#ruta', function(e){
            console.log("han hecho click en Ruta");
            APP.Ruta.getRuta(function(ruta){recorrido=ruta;});
        //if (alertas.length){
            console.log("hay ruta");
            APP.UI.mostrarRuta();
            console.log(ruta);
        //} else APP.UI.esconderAlertas(alertas);
        });

        var elCamion  = $(document).on('click', '#camion', function(e){
            console.log("han hecho click en Camion");
        var camion = APP.Camion.getCamion();
        //if (alertas.length){
            console.log("hay camion");
            APP.UI.mostrarCamion();
            console.log(camion);
        //} else APP.UI.esconderAlertas(alertas);
        });

        var $remolque = $('#remolque');
        var elRemolque  = $(document).on('click', $remolque, function(e){
            console.log("han hecho click en Remolque");
        var remolque = APP.Remolque.getRemolque();
        //if (alertas.length){
            console.log("hay remolque");
            APP.UI.mostrarRemolque();
            console.log($remolque);
        //} else APP.UI.esconderAlertas(alertas);
        });


        //var laRuta = document.getElementById("ruta");
        //laRuta.addEventListener("click", APP.Ui.muestraRuta(), false);
        //console.log(laRuta);

        /*  var elCamion = document.getElementById("camion");
        elCamion.addEventListener("click", APP.Camion.mostrarCamion, false);
          var elRemolque = document.getElementById("remolque");
        elRemolque.addEventListener("click", APP.remolque.mostrarRemolque, false);
*/





});

APP.Controlador();