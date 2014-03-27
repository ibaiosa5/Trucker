            var lon = -5.3567711857586;
            var lat = 40.151214217677;

            var dir = "";
            var latlng = new google.maps.LatLng(lat, lon);
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({"latLng": latlng}, function(results, status)
            {
                if (status == google.maps.GeocoderStatus.OK)
                {
                    if (results[0])
                    {
                        dir = "<p><strong>Dirección: </strong>" + results[0].formatted_address + "</p>";
                    }
                    else
                    {
                        dir = "<p>No se ha podido obtener ninguna dirección en esas coordenadas.</p>";
                    }
                }
                else
                {
                    dir = "<p>El Servicio de Codificación Geográfica ha fallado con el siguiente error: " + status + ".</p>";
                }

                console.log("dir");
                console.log(dir);
            });

            var lond = -5.3556641883421;
            var latd= 40.151629223567;

            var destino = "";
            var latlngd = new google.maps.LatLng(lat, lon);
            var geocoderd = new google.maps.Geocoder();
            geocoder.geocode({"latLng": latlng}, function(results, status)
            {
                if (status == google.maps.GeocoderStatus.OK)
                {
                    if (results[0])
                    {
                        dir = "<p><strong>Dirección: </strong>" + results[0].formatted_address + "</p>";
                    }
                    else
                    {
                        dir = "<p>No se ha podido obtener ninguna dirección en esas coordenadas.</p>";
                    }
                }
                else
                {
                    dir = "<p>El Servicio de Codificación Geográfica ha fallado con el siguiente error: " + status + ".</p>";
                }

                console.log("dird");
                console.log(dir);
            });
 console.log("dirFuera");
                console.log(dir);


var origen = new google.maps.LatLng(-33.866714, 151.19556979999993);
var destin = new google.maps.LatLng(-33.8908435, 151.27429059999997);

//var origen = new google.maps.LatLng(-5.3567711857586, 40.151214217677);
//var destin = new google.maps.LatLng(-5.360062193965, 40.15915221639);
                console.log("origen");
                console.log(origen);
                console.log("destino");
                console.log(destin);

$("#map").gmap3({
  getroute:{
    options:{
        origin:origen,
        destination:destin,
        travelMode: google.maps.DirectionsTravelMode.BICYCLING
    },
    callback: function(results){
      if (!results){
        console.log("fallo del callback de la ruta");
    return;
}
      $(this).gmap3({
        map:{
          options:{
            zoom: 13,
            center: [-5.360062193965, 40.15915221639]
            //center: [-33.879, 151.235]
          }
        },
        directionsrenderer:{
          options:{
            directions:results
          }
        }
      });
    }
  }
});