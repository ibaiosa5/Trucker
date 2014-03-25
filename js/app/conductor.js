var APP = APP||{};
APP.Conductor = (function(){
    "use strict";

    var getConductor = function(devolverDatos){
        $.ajax({
                url : 'data/conductor.json',
                cache : false,
                dataType : 'json',
                success : devolverDatos,
                error : errorAjax
        });
    };

    var getDatosConductor = function(data, textStatus, jqXHR){
        console.log(data);
        var objeto_json = data;
        var conductor = objeto_json.conductor;
        console.log(conductor);

    };

    var errorAjax = function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
        console.log(errorThrown);
    };

    return{
        getConductor : getConductor
    };

})();

APP.Conductor.getConductor(function(data, textStatus, jqXHR){
    //APP.controller.conductor(data);
    console.log(data);
});