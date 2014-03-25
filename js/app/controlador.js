$(function(){
    'use strict';

    var $alertas = $('#alertas');


    $(document).on('click', $alertas, function(e){
            console.log("han hecho click en alertas");

        var alertas = APP.Alertas.getAlertas("00001");
        if (alertas.length){
            console.log("hay alertas");
            APP.UI.mostrarAlertas(alertas);
            console.log(alertas);
        } else APP.UI.esconderAlertas(alertas);
    });


});