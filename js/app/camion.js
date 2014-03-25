var APP = APP||{};
APP.Camion = (function(){
    "use strict";

    var getCamion = function(){
        $.ajax({
                url : 'data/camion.json',
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
        getCamion : getCamion
    };

})();

APP.Camion.getCamion();