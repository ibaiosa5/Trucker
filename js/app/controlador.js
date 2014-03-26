$(function(){
    'use strict';

    var $alertas = $('#alertas');
    var $conductor = $('#conductor');


    $(document).on('click', $alertas, function(e){
        APP.Alertas.getAlertas(function(alertas, textStatus, jqXHR){
            if (alertas.alertas.length>0){
                APP.UI.mostrarAlertas(alertas.alertas);
            } else APP.UI.esconderAlertas(alertas);
        });
    });

    $(document).on('click', $conductor, function(e){
        APP.Conductor.getConductor(function(conductor, textStatus, jqXHR){
            if(conductor.length > 0){
                APP.UI.mostrarConcuctor(conductor);
            }
            else
                console.log(conductor);
        });
    });


});