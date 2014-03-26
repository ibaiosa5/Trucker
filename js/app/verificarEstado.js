var APP = APP || {};


APP.verificarEstado = (function(){
  var RANGO = 100;
  var RMUNDO = 6371000;
  var posicionActual;
  var ultimaPosicion = 0;
  var ruta = [];
  var Tparado = 0;
  var Tmarcha = 0;

  //Tiempo
  var estado = "parado";

    var posicion = function(callback){
        var options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };

        function success(pos) {
          crd = {
          'lat' : pos.coords.latitude,
          'lng' : pos.coords.longitude
          };
          callback(crd);
        }

        function error(err) {
          console.warn('ERROR(' + err.code + '): ' + err.message);
        }
        navigator.geolocation.getCurrentPosition(success, error, options);
      };

    var guardarPosicion=function(pos){
      ruta.push(pos);
    };

    var toRadians = function(grados){
      return grados * (Math.PI/180);
    };

    var calcularDistancia = function(punto1,punto2){
      return Math.acos(Math.sin(toRadians(punto1.lat))*Math.sin(toRadians(punto2.lat))+Math.cos(toRadians(punto1.lat))*Math.cos(toRadians(punto2.lat))*Math.cos(toRadians(punto1.lng)-toRadians(punto2.lng)))*RMUNDO;
    };

    var verificarPosicion = function(posicionActual,recorrido){
      var udist = calcularDistancia(posicionActual,recorrido[ultimaPosicion]);
      var nextdist = calcularDistancia(posicionActual,recorrido[ultimaPosicion++]);
      console.log(udist);
      console.log(nextdist);
      while(nextdist<udist){
        ultimaPosicion=ultimaPosicion++;
        udist = nextdist;
        nextdist = calcularDistancia(posicionActual,recorrido[ultimaPosicion++]);
      }
      if(udist<RANGO){
        console.log("dentro de la ruta");
      }
      else{
        console.log("Has salido de la ruta");
      }

    };

    var verificarTiempo = function(estado){
      if(estado == 'parado'){
        console.log('parado');
        if((ruta.length>0) && (calcularDistancia(ruta[ultimaPosicion],ruta[ultimaPosicion-1]))>0){//si en 5 segundos se ha movido algo se pasa del estado parado a moviendo
          estado = 'en marcha';
          Tmarcha = 0;
          Tparado = 0;
        }
        else{
          Tparado++;
        }
      }
      else if(estado == 'en marcha'){
        console.log('en marcha');
        if((ruta.length>0) && (calcularDistancia(ruta[ultimaPosicion],ruta[ultimaPosicion-35]))<10){//si en 3 minutos no se ha movido se cambia el estado a parado
          estado = 'parado';
          Tmarcha = 0;
          Tparado = 0;
        }
        else{
          Tmarcha++;
        }
      }
    };

    var verificador = function(recorrido){
      posicion(function(pos){
                  guardarPosicion(pos);
                  verificarPosicion(pos,recorrido);
                  verificarTiempo(estado);
              });
    };
    return {
      verificador:verificador
    };

})();
