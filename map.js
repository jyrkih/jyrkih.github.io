var mjrekiSet = {
    layer: undefined,
    geojson: ['inspire/MJREKI_INSPIRE_ALUE.json'], //, 'inspire/MJREKI_INSPIRE_PISTE.json'],
    name: 'Muinaisjäännökset',
    show: false,
    data: [],
    style: {
        weight: 2,
        color: '#0000ff'
    }
};

var rkySet = {
    layer: undefined,
    geojson: ['inspire/RKY_INSPIRE_ALUE.json', 'inspire/RKY_INSPIRE_VIIVA.json'],
    name: 'Rakennetut kulttuuriympäristöt',
    show: false,
    data: [],
    style: {
        weight: 2,
        color: '#ff0000'
    }
};

var rpSet = {
    layer: undefined,
    geojson: ['inspire/RAKENNUSPERINTO_INSPIRE_ALUE.json', 'inspire/RAKENNUSPERINTO_INSPIRE_PISTE.json'],
    name: 'Suojellut rakennukset',
    show: false,
    data: [],
    style: {
        weight: 2,
        color: '#00ff00'
    }
};

/*
var StarIcon = L.Icon.extend({
    options: {
        iconUrl: 'images/hv.jpg',
        //shadowUrl: '/~jyrki/suomi/css/images/markers-shadow.png',
        iconSize: [20, 20],
        shadowSize: [35, 16],
        iconAnchor: [1, 10],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, 0]
    }
});



var KirkkoIcon = L.Icon.extend({
    options: {
        iconUrl: 'images/kirkko.jpg',
        iconSize: [20, 20],
        shadowSize: [35, 16],
        iconAnchor: [1, 10],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, 0]
    }
});*/



function processSet(set) {
    if (set && set.geojson)
        set.geojson.forEach(function (gj) {
            /*$.getJSON(gj, function (data) {
                set.data.push(data);
                set.show = true;
                createLayer(set);
            });*/
            map.data.loadGeoJson(gj);
        });
}

var mapmodule2= (function() {

    return {
        init: function(){
            processSet(mjrekiSet);
            processSet(rkySet);
            processSet(rpSet);
        }
    }
});

var mapmodule = (function() {
    return {
        init: function(){
            processSet(mjrekiSet);
            processSet(rkySet);
            processSet(rpSet);
        }
    }
}());
