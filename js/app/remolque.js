var APP = APP||{};
APP.Remolque = (function(){
    "use strict";

    var getRemolque = function(){
        $.ajax({
                url : 'data/remolque.json',
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
        getRemolque : getRemolque
    };

})();

APP.Remolque.getRemolque();