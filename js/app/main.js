var APP = APP||{};
APP.Controlador = (function(){
    "use strict";

    var muestraRuta = function(){
        console.log("Pintar ruta");
    };
    var muestraCamion = function(){
        console.log("Pintar ruta");
    };
    var muestraRemolque = function(){
        console.log("Pintar ruta");
    };



        var laRuta = document.getElementById("ruta");
        laRuta.addEventListener("click", muestraRuta, false);
        console.log(laRuta);

          var elCamion = document.getElementById("camion");
        elCamion.addEventListener("click", muestraCamion, false);
          var elRemolque = document.getElementById("remolque");
        elRemolque.addEventListener("click", muestraRemolque, false);






    return{

    };

})();

APP.Controlador();