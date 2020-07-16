 let myMap;

 const init = () => {

     myMap = new ymaps.Map("map", {
      center: [59.935274, 30.312388],
      zoom: 11,
      controls: []
     });


     var myPlacemark = new ymaps.Placemark([59.945443227989287, 30.38935262114668], {}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: '/icons/marker.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });
  
  myMap.geoObjects.add(myPlacemark);

  var myPlacemarktwo = new ymaps.Placemark([59.911423223563909, 30.50024587065841], {}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: '/icons/marker.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
});

myMap.geoObjects.add(myPlacemarktwo);

var myPlacemarkthree = new ymaps.Placemark([59.88693161784606, 30.319658102103713], {}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: '/icons/marker.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
});

myMap.geoObjects.add(myPlacemarkthree);

var myPlacemarkfour = new ymaps.Placemark([59.97033574821672, 30.315194906302924], {}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: '/icons/marker.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
});

myMap.geoObjects.add(myPlacemarkfour);
myMap.behaviors.disable('scrollZoom');

}

ymaps.ready(init);
