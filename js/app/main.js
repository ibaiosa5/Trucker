$(function(){
    "use strict";



    var mostrarAlertas = setInterval( function(e){

        APP.Alertas.hayAlertas(function(alertas, textStatus, jqXHR){

            if (alertas.alertas.length>0){

                APP.UI.avisoAlertas(alertas.alertas);

            }
        }, 15000000);
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
                APP.UI.mostrarConductor(conductor);
            });
        });

        $(document).on('click', '#ruta', function(e){
            console.log("han hecho click en Ruta");
        var ruta = APP.Ruta.getRuta();
            console.log("hay ruta");
            APP.UI.mostrarRuta();
            console.log(ruta);

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