var APP = APP||{};
APP.Conductor = (function(){
    "use strict";

    //var $login = $('#login');
    //var $res = $('#disponibilidad');

    //$('#comprobar').on('click', function(){
        //var login = $login.val();
    var getConductor = function(){
        $.ajax({
                url : 'data/conductor.json',
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
        getConductor : getConductor
    };

})();

APP.Conductor.getConductor();