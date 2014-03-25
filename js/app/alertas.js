var APP = APP||{};
APP.Alertas = (function(){
    "use strict";

    var getAlertas = function(idConductor){
        $.ajax({
                url : 'data/alertas.json',
                data : { idConductor : idConductor},
                cache : false,
                success : function(data, textStatus, jqXHR){
                        console.log(data);

                },
                error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                    console.log(errorThrown);
                }
        });

    };

    return{
        getAlertas : getAlertas
    };

})();

APP.Alertas.getAlertas();




