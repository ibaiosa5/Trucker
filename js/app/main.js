<<<<<<< HEAD
=======

>>>>>>> 69ccd079416e23bf6fe5b8f6fa223e752401966d
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

    APP.Controller.init();

});
