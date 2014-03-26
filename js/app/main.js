$(function(){
    "use strict";


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