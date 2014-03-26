$(function(){
    'use strict';

    var $alertas = $('#alertas');


    $(document).on('click', $alertas, function(e){

        APP.Alertas.getAlertas(function(alertas, textStatus, jqXHR){

            if (alertas.alertas.length>0){

                APP.UI.mostrarAlertas(alertas.alertas);

            } else APP.UI.esconderAlertas(alertas);
        });
    });


});