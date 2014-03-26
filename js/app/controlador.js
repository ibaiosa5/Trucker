$(function(){
    'use strict';


    var mostrarAlertas = setInterval( function(e){

        APP.Alertas.hayAlertas(function(alertas, textStatus, jqXHR){

            if (alertas.alertas.length>0){

                APP.UI.avisoAlertas(alertas.alertas);

            }
        }, 15000000);
    });

    $(document).on('click', '#alertas', function(e){
        clearInterval(mostrarAlertas);
        APP.Alertas.getAlertas(function(alertas, textStatus, jqXHR){

            if (alertas.alertas.length>0){

                APP.UI.mostrarAlertas(alertas.alertas);

            } else APP.UI.esconderAlertas(alertas);
        });
    });


});