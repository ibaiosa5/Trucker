var APP = APP||{};
APP.Alertas = (function(){
    "use strict";

    var getAlertas = function(devolverDatos){

        $.ajax({
                url : 'data/alertas.json',
                //data : { idConductor : idConductor},
                cache : false,
                dataType : 'json',
                success : devolverDatos,
                error : errorAjax
        });

    };
    var errorAjax = function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
        console.log(errorThrown);
    };
    return{
        getAlertas : getAlertas
    };

})();