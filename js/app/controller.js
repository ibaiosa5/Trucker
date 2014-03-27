var APP = APP||{};
APP.Controller = (function() {
    "use strict";

    var intervaloAlertas;

    var init = function() {
        intervaloAlertas = setInterval(APP.Controller.nuevasAlertas,5000);
    };

    var nuevasAlertas = function(e){
        APP.Pedir.getInfo(function(nuevasAlertas, textStatus, jqXHR){
            if (nuevasAlertas.length > 0){
                APP.UI.avisoAlertas(nuevasAlertas);
            }
        }, 'data/avisoAlertas.json');
    };

    var listaAlertas = function(e){

        clearInterval(intervaloAlertas);
        APP.Pedir.getInfo(function(alertas, textStatus, jqXHR){
            if (alertas.length > 0){
                APP.UI.mostrarAlertas(alertas);
            } else APP.UI.esconderAlertas(alertas);
        }, 'data/alertas.json');
    };


     return {
        listaAlertas : listaAlertas,
        nuevasAlertas : nuevasAlertas,
        init : init
    };
})();