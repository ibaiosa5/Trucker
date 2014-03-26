$(function(){
    "use strict";
    var recorrido;

    APP.Ruta.getRuta(function(ruta){
        recorrido = ruta;
        APP.verificarEstado.verificador(ruta);
    });



    /*var mostrarAlertas = setInterval( function(e){

        APP.Alertas.hayAlertas(function(alertas, textStatus, jqXHR){

            if (alertas.alertas.length > 0){

                APP.UI.avisoAlertas(alertas.alertas);

            }

        }, 150000);
    });
*/




    $("#map").googleMap({
      zoom: 10, // Initial zoom level (optional)
      coords: [48.895651, 2.290569], // Map center (optional)
      type: "ROADMAP" // Map type (optional)
    });


    $(document).on('click', '#alertas', function(e){
        APP.Alertas.getAlertas(function(alertas, textStatus, jqXHR){
            if (alertas.alertas.length > 0){
                APP.UI.mostrarAlertas(alertas.alertas);
            } else APP.UI.esconderAlertas(alertas);
        });
    });

    $(document).on('click', '#conductor', function(e){
        APP.Conductor.getConductor(function(conductor, textStatus, jqXHR){
            APP.UI.mostrarConductor(conductor);

        });
    });

    $(document).on('click', '#ruta', function(e){
        APP.Ruta.getRuta(function(recorrido, textStatus, jqXHR){
            console.log(recorrido);
            APP.UI.mostrarRuta(recorrido);
        });
    });

    $(document).on('click', '#camion', function(e){
        var camion = APP.Camion.getCamion(function(camion, textStatus, jqXHR){
            APP.UI.mostrarCamion(camion);
        });
    });

    $(document).on('click', '#remolque', function(e){
        var remolque = APP.Remolque.getRemolque(function(remolque, textStatus, jqXHR){
            APP.UI.mostrarRemolque(remolque);
        });
    });

});
