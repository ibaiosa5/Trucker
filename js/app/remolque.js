var APP = APP||{};
APP.Remolque = (function(){
    "use strict";

    //var $login = $('#login');
    //var $res = $('#disponibilidad');

    //$('#comprobar').on('click', function(){
        //var login = $login.val();
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