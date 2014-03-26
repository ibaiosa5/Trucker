var APP = APP||{};
APP.Camion = (function(){
    "use strict";

    var getCamion = function(devolverCamion){
        $.ajax({
                url : 'data/camion.json',
                cache : false,
                dataType : 'json',
                success : devolverCamion,
                error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                    console.log(errorThrown);
                }
        });
    };

    return{
        getCamion : getCamion
    };

})();