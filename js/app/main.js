
var APP = APP||{};
APP.Controller = (function(){
    "use strict";
    var recorrido;
    var idPosicionInterval;

    APP.Ruta.getRuta(function(ruta){
        recorrido = ruta;
        idPosicionInterval = setInterval(function(){
            APP.verificarEstado.verificador(recorrido);
        },5000);
    });

    var nuevasAlertas = setInterval( function(e){
        APP.Alertas.hayAlertas(function(nuevasAlertas, textStatus, jqXHR){
            if (nuevasAlertas.length > 0){
                APP.UI.avisoAlertas(nuevasAlertas);
            }
        });
    },5000);

    $(document).on('click', '#alertas', function(e){
        clearInterval(nuevasAlertas);
        APP.Alertas.getAlertas(function(alertas, textStatus, jqXHR){
            if (alertas.length > 0){
                APP.UI.mostrarAlertas(alertas);
            } else APP.UI.esconderAlertas(alertas);
        });
    });

    var showDriver = function(e){
        APP.Pedir.getInfo(function(conductor, textStatus, jqXHR){
            APP.UI.mostrarConductor(conductor);
        }, 'data/conductor.json');
    };

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

})();
