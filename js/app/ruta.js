
var APP = APP||{};
APP.Ruta = (function(){
    "use strict";

    //var $login = $('#login');
    //var $res = $('#disponibilidad');

    //$('#comprobar').on('click', function(){
        //var login = $login.val();
    /*var getRuta = function(){
        $.ajax({
                url : 'data/ruta.json',
                cache : false,
                success : function(data, textStatus, jqXHR){
                        console.log(data);

                },
                error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                    console.log(errorThrown);
                }
        });
    };*/
    var getRuta = function(){
    $.ajax({
      url: 'data/recorrido.kml',
      type : 'GET',
      dataType : 'xml',
      success: function(data,textStatus, jqXHR) {
        var $ruta = $(data);
        recorrido=$ruta.find('coordinates').text();
        console.log(recorrido);
      }

    });
  };

    return{
        getRuta : getRuta
    };

})();

APP.Ruta.getRuta();
