$(function(){
    "use strict";
    var recorrido;
    var idPosicionInterval;

    APP.Ruta.getRuta(function(ruta){
        recorrido = ruta;
        idPosicionInterval = setInterval(function(){
            APP.verificarEstado.verificador(recorrido);
        },5000);
    });

    var nuevasAlertas = setInterval( function(e){
        APP.Alertas.hayAlertas(function(nuevasAlertas, textStatus, jqXHR){
            if (nuevasAlertas.length > 0){
                APP.UI.avisoAlertas(nuevasAlertas);
            }
        });
    },5000);



    $("#map").googleMap({
      zoom: 10, // Initial zoom level (optional)
      coords: [48.895651, 2.290569], // Map center (optional)
      type: "ROADMAP" // Map type (optional)
    });


    $(document).on('click', '#alertas', function(e){
        clearInterval(nuevasAlertas);
        APP.Alertas.getAlertas(function(alertas, textStatus, jqXHR){
            if (alertas.length > 0){
                APP.UI.mostrarAlertas(alertas);
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
