var APP = APP || {};

APP.ruta = (function(){
    var recorrido =[];
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
  return {
      getRuta : getRuta
    };
})();

APP.ruta.getRuta();