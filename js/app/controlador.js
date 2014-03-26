$(function(){
    'use strict';

    var $alertas = $('#alertas');


    $(document).on('click', $alertas, function(e){
        console.log("han hecho click en alertas");

        APP.Alertas.getAlertas(function(alertas, textStatus, jqXHR){
            //APP.controller.conductor(data);
            console.log(alertas);
            if (alertas.length){
                console.log("hay alertas");
                APP.UI.mostrarAlertas(alertas);
                console.log(alertas);
            }// else APP.UI.esconderAlertas(alertas);
        });

//        if (alertas.length){
//            console.log("hay alertas");
//            APP.UI.mostrarAlertas(alertas);
//            console.log(alertas);
//        } else APP.UI.esconderAlertas(alertas);
    });


});