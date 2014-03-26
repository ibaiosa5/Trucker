$(function(){
    "use strict";


    $(document).on('click', '#alertas', function(e){

        APP.Alertas.getAlertas(function(alertas, textStatus, jqXHR){

            if (alertas.alertas.length>0){

                APP.UI.mostrarAlertas(alertas.alertas);

            } else APP.UI.esconderAlertas(alertas);
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
        var camion = APP.Camion.getCamion();

            console.log("hay camion");
            APP.UI.mostrarCamion();
            console.log(camion);

        });

        $(document).on('click', '#remolque', function(e){
            console.log("han hecho click en Remolque");


               APP.Remolque.getRemolque(function(remolque, textStatus, jqXHR){

            if (remolque.length>0){

                APP.UI.mostrarRemolque(remolque);

            }
        });

});

});