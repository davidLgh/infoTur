//INICIALIZAR EL MAPA
var map = L.map('map').setView([-40.813666, -65.0981831], 15);

//SETEAR
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'

}).addTo(map);

//MARKERS
//icono Eva Luna
var iconEvaLuna = L.icon({
    iconUrl: 'images/icon-evaluna.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: 'images/icon-sombra.png',
    shadowSize: [26, 29],
    shadowAnchor: [-1, 30]
});
//icono Playas
var iconPlayas = L.icon({
    iconUrl: 'images/icon-playas.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: 'images/icon-sombra.png',
    shadowSize: [26, 29],
    shadowAnchor: [-1, 30]
});
//icono Emergencias
var iconEmergencias = L.icon({
    iconUrl: 'images/icon-emergencias.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: 'images/icon-sombra.png',
    shadowSize: [26, 29],
    shadowAnchor: [-1, 30]
});
//icono Restaurantes
var iconResto = L.icon({
    iconUrl: 'images/icon-restaurantes.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: 'images/icon-sombra.png',
    shadowSize: [26, 29],
    shadowAnchor: [-1, 30]
});
//icono Supermercado
var iconSuper = L.icon({
    iconUrl: 'images/icon-supermercados.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: 'images/icon-sombra.png',
    shadowSize: [26, 29],
    shadowAnchor: [-1, 30]
});
//icono Estaciones
var iconEstaciones = L.icon({
    iconUrl: 'images/icon-estaciondeservicio.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: 'images/icon-sombra.png',
    shadowSize: [26, 29],
    shadowAnchor: [-1, 30]
});

//Eva Luna
var iEvaLuna = L.marker([-40.813666, -65.0981831], { icon: iconEvaLuna }).bindPopup("Eva Luna Apart");
iEvaLuna.addTo(map);

//Playas
var plTerraza = L.marker([-40.797564, -65.061416], { icon: iconPlayas }).bindPopup("Terraza Al Mar"),
    plRinconada = L.marker([-40.800419, -65.066019], { icon: iconPlayas }).bindPopup("La Rinconada"),
    plAcantilados = L.marker([-40.805483, -65.076184], { icon: iconPlayas }).bindPopup("Los Acantilados"),
    plPewans = L.marker([-40.807481, -65.080567], { icon: iconPlayas }).bindPopup("Bajada Pewans"),
    plRueda = L.marker([-40.807805, -65.081618], { icon: iconPlayas }).bindPopup("Bajada La Rueda"),
    plcero = L.marker([-40.808723, -65.083163], { icon: iconPlayas }).bindPopup("Bajada Cero"),
    pl01 = L.marker([-40.810299, -65.086355], { icon: iconPlayas }).bindPopup("1ra Bajada"),
    pl02 = L.marker([-40.811939, -65.088796], { icon: iconPlayas }).bindPopup("2da Bajada"),
    pl03 = L.marker([-40.813758, -65.091532], { icon: iconPlayas }).bindPopup("3ra Bajada"),
    pl04 = L.marker([-40.815625, -65.094305], { icon: iconPlayas }).bindPopup("4ta Bajada"),
    pl05 = L.marker([-40.816567, -65.095518], { icon: iconPlayas }).bindPopup("5ta Bajada"),
    pl06 = L.marker([-40.818004, -65.09776], { icon: iconPlayas }).bindPopup("6ta Bajada"),
    pl07 = L.marker([-40.818812, -65.098726], { icon: iconPlayas }).bindPopup("7ma Bajada"),
    plColoradas = L.marker([-40.840151, -65.118585], { icon: iconPlayas }).bindPopup("Piedras Coloradas"),
    plBuque = L.marker([-40.870862, -65.124807], { icon: iconPlayas }).bindPopup("El Buque"),
    plSotano = L.marker([-40.888806, -65.133262], { icon: iconPlayas }).bindPopup("El Sótano"),
    plFuerte = L.marker([-41.1053477, -65.1730283], { icon: iconPlayas }).bindPopup("Fuerte Argentino");

var playas = L.layerGroup([plTerraza, plRinconada, plAcantilados, plPewans,
    plRueda, plcero, pl01, pl02, pl03, pl04, pl05, pl06, pl07, plColoradas,
    plFuerte, plSotano, plBuque]);
playas.addTo(map);

//Emergencias
var eHospital = L.marker([-40.805769, -65.093029], { icon: iconEmergencias }).bindPopup("Hospital 'Doctora Violeta Villalobos'"),
    eAux = L.marker([-40.795894, -65.076233], { icon: iconEmergencias }).bindPopup("Sala de Primeros Auxilios"),
    eConsPriv = L.marker([-40.807495, -65.084574], { icon: iconEmergencias }).bindPopup("Consultorios Médicos Privados"),
    ePolicia = L.marker([-40.8087263, -65.0866937], { icon: iconEmergencias }).bindPopup("Comisaría 29º, Policia de Río Negro");

var emergencias = L.layerGroup([eHospital, eAux, eConsPriv, ePolicia]);
emergencias.addTo(map);

//Supermercados
var sLaAnonima = L.marker([-40.794862, -65.075465], { icon: iconSuper }).bindPopup("La Anónima"),
    sSol = L.marker([-40.807942, -65.086811], { icon: iconSuper }).bindPopup("El Sol"),
    sMaxicol = L.marker([-40.810593, -65.093699], { icon: iconSuper }).bindPopup("Maxicol"),
    sLaEsquina = L.marker([-40.815628, -65.099112], { icon: iconSuper }).bindPopup("La Esquina");

var supermercados = L.layerGroup([sLaAnonima, sSol, sMaxicol, sLaEsquina]);
supermercados.addTo(map);

//Restos
var rAladin = L.marker([-40.807881, -65.088785], { icon: iconResto }).bindPopup("Marisquería Aladdin"),
    rElRey = L.marker([-40.809623, -65.091049], { icon: iconResto }).bindPopup("El Rey Del Marisco"),
    rBariloche = L.marker([-40.808677, -65.086784], { icon: iconResto }).bindPopup("Restaurant Bariloche"),
    rMalala = L.marker([-40.81417, -65.093613], { icon: iconResto }).bindPopup("Malala"),
    rCuyen = L.marker([-40.814032, -65.092406], { icon: iconResto }).bindPopup("Cuyen Resto"),
    rDelAzul = L.marker([-40.810853, -65.09482], { icon: iconResto }).bindPopup("Del Azul Bistro & Sushibar"),
    rTajamar = L.marker([-40.810841, -65.088463], { icon: iconResto }).bindPopup("Tajamar"),
    rDestino = L.marker([-40.809594, -65.088941], { icon: iconResto }).bindPopup("Parrilla El Destino");

var restaurantes = L.layerGroup([rAladin, rElRey, rBariloche, rMalala, rCuyen, rDelAzul, rTajamar, rDestino]);
restaurantes.addTo(map);

//Estaciones
var esPuma = L.marker([-40.803447, -65.081297], { icon: iconEstaciones }).bindPopup("Puma Energy");
esPuma.addTo(map)


/*
//POP UP ONCLICK
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
*/

let positionMap = document.getElementById("map");
positionMap.style.position = 'sticky';