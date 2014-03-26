var APP = APP||{};
APP.Remolque = (function(){
    "use strict";

    var getRemolque = function(devolverRemolque){
        $.ajax({
                url : 'data/remolque.json',
                cache : false,
                success : devolverRemolque,
                error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                    console.log(errorThrown);
                }
        });
    };

    return{
        getRemolque : getRemolque
    };

})();