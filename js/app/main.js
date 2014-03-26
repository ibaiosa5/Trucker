$(function(){
    "use strict";


/*
    var mostrarAlertas = setInterval( function(e){

        APP.Alertas.hayAlertas(function(alertas, textStatus, jqXHR){

            if (alertas.alertas.length>0){

                APP.UI.avisoAlertas(alertas.alertas);

            }
        }, 150000);
    });


    var tiempoMarcha = setInterval( function(e){

        APP.verificarEstado.verificarTiempo(function(tiempo, textStatus, jqXHR){

            console.log("paso");

                APP.UI.avisoTiempo(tiempo);


        }, 15000);
    });
*/

    $("#map").googleMap({
      zoom: 10, // Initial zoom level (optional)
      coords: [48.895651, 2.290569], // Map center (optional)
      type: "ROADMAP" // Map type (optional)
    });

    $(document).on('click', '#alertas', function(e){
        APP.Alertas.getAlertas(function(alertas, textStatus, jqXHR){
            if (alertas.alertas.length>0){
                APP.UI.mostrarAlertas(alertas.alertas);
            } else APP.UI.esconderAlertas(alertas);
        });
    });

        $(document).on('click', '#conductor', function(e){
            APP.Conductor.getConductor(function(conductor, textStatus, jqXHR){
                console.log(conductor);
                APP.UI.mostrarConductor(conductor);
                console.log(conductor);
            });
        });

        $(document).on('click', '#ruta', function(e){
            console.log("han hecho click en Ruta");
            APP.UI.mostrarRuta(ruta);
        var ruta = APP.Ruta.getRuta(function(ruta, textStatus, jqXHR){
            console.log(ruta);

                APP.UI.mostrarRuta(ruta);

        });


        });

        $(document).on('click', '#camion', function(e){
            console.log("han hecho click en Camion");
        var camion = APP.Camion.getCamion(function(camion, textStatus, jqXHR){
            console.log(camion);

                APP.UI.mostrarCamion(camion);

        });


        });

        $(document).on('click', '#remolque', function(e){
            console.log("han hecho click en Remolque");

            var remolque = APP.Remolque.getRemolque(function(remolque, textStatus, jqXHR){
            console.log(remolque);

                APP.UI.mostrarRemolque(remolque);



        });

});

});