const coords = [
  [59.945443227989287, 30.38935262114668],
  [59.911423223563909, 30.50024587065841],
  [59.88693161784606, 30.319658102103713],
  [59.97033574821672, 30.315194906302924]
];

const myCollection = new ymaps.GeoObjectCollection({}, {
  draggable: false,        
  iconLayout: 'default#image',
  iconImageHref: 'images/berry1.png',
  iconImageSize: [46, 57],
  iconImageOffset: [-35, -52]
});

coords.forEach(coord => {
  myCollection.add(new ymaps.Placemark(coord));
});

myMap.GeoObjects.add(myCollection);

