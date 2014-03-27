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

    var nuevasAlertas = setInterval(APP.Controller.nuevasAlertas,5000);



    $(document).on('click', '#conductor', function(e){
        APP.Pedir.getInfo(function(conductor, textStatus, jqXHR){
            console.log(conductor);
            APP.UI.mostrarConductor(conductor);
        }, 'data/conductor.json');
    });

    $(document).on('click', '#ruta', function(e){
        APP.Ruta.getRuta(function(recorrido, textStatus, jqXHR){
            console.log(recorrido);
            APP.UI.mostrarRuta(recorrido);
        });
    });

    $(document).on('click', '#camion', function(e){
        APP.Pedir.getInfo(function(camion, textStatus, jqXHR){
            APP.UI.mostrarCamion(camion);
        }, 'data/camion.json');
    });

    $(document).on('click', '#remolque', function(e){
        APP.Pedir.getInfo(function(remolque, textStatus, jqXHR){
            APP.UI.mostrarRemolque(remolque);
        }, 'data/remolque.json');
    });

});
