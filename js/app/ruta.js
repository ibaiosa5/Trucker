
var APP = APP||{};
APP.Ruta = (function(){
    "use strict";

    //var $login = $('#login');
    //var $res = $('#disponibilidad');

    //$('#comprobar').on('click', function(){
        //var login = $login.val();
    var getRuta = function(){
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
    };
    var leerRuta = function(kml){
      var recorrido = [];
    $.ajax({
      url: kml,
      type : 'GET',
      dataType : 'xml',
      success: function(data,textStatus, jqXHR) {
        var $ruta = $(data);
        var rutaArray = $ruta.find('coordinates').text().split("\n");
        $(rutaArray).each(function(index,element){
          var sepacoma = element.split(",");
          var coor ={
            'lat' : sepacoma[0],
            'lng' : sepacoma[1]
          };
          recorrido.push(coor);
        });
      }

    });
    return recorrido;
  };

    return{
        getRuta : getRuta,
        leerRuta : leerRuta
    };

})();

APP.Ruta.leerRuta();
