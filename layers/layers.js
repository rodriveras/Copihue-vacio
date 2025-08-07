var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Satelite_1 = new ol.layer.Tile({
            'title': 'Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Acceso_2 = new ol.format.GeoJSON();
var features_Acceso_2 = format_Acceso_2.readFeatures(json_Acceso_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acceso_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acceso_2.addFeatures(features_Acceso_2);
var lyr_Acceso_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acceso_2, 
                style: style_Acceso_2,
                popuplayertitle: 'Acceso',
                interactive: false,
                title: '<img src="styles/legend/Acceso_2.png" /> Acceso'
            });
var format_Vendidas_3 = new ol.format.GeoJSON();
var features_Vendidas_3 = format_Vendidas_3.readFeatures(json_Vendidas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vendidas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vendidas_3.addFeatures(features_Vendidas_3);
var lyr_Vendidas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vendidas_3,
maxResolution:3.080491276748816,
 
                style: style_Vendidas_3,
                popuplayertitle: 'Vendidas',
                interactive: true,
                title: '<img src="styles/legend/Vendidas_3.png" /> Vendidas'
            });
var format_Limite_4 = new ol.format.GeoJSON();
var features_Limite_4 = format_Limite_4.readFeatures(json_Limite_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_4.addFeatures(features_Limite_4);
var lyr_Limite_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_4, 
                style: style_Limite_4,
                popuplayertitle: 'Limite',
                interactive: false,
                title: '<img src="styles/legend/Limite_4.png" /> Limite'
            });
var format_Disponibles_5 = new ol.format.GeoJSON();
var features_Disponibles_5 = format_Disponibles_5.readFeatures(json_Disponibles_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Disponibles_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Disponibles_5.addFeatures(features_Disponibles_5);
var lyr_Disponibles_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Disponibles_5,
maxResolution:3.080491276748816,
 
                style: style_Disponibles_5,
                popuplayertitle: 'Disponibles',
                interactive: true,
                title: '<img src="styles/legend/Disponibles_5.png" /> Disponibles'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Satelite_1.setVisible(true);lyr_Acceso_2.setVisible(true);lyr_Vendidas_3.setVisible(true);lyr_Limite_4.setVisible(true);lyr_Disponibles_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Satelite_1,lyr_Acceso_2,lyr_Vendidas_3,lyr_Limite_4,lyr_Disponibles_5];
lyr_Acceso_2.set('fieldAliases', {'id': 'id', });
lyr_Vendidas_3.set('fieldAliases', {'Lote': 'Lote', 'Area': 'Area', 'Estado': 'Estado', });
lyr_Limite_4.set('fieldAliases', {'id': 'id', });
lyr_Disponibles_5.set('fieldAliases', {'Lote': 'Lote', 'Area': 'Area', 'Estado': 'Estado', 'Precio': 'Precio', });
lyr_Acceso_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Vendidas_3.set('fieldImages', {'Lote': 'TextEdit', 'Area': 'TextEdit', 'Estado': 'TextEdit', });
lyr_Limite_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Disponibles_5.set('fieldImages', {'Lote': 'TextEdit', 'Area': 'TextEdit', 'Estado': 'TextEdit', 'Precio': 'TextEdit', });
lyr_Acceso_2.set('fieldLabels', {'id': 'no label', });
lyr_Vendidas_3.set('fieldLabels', {'Lote': 'inline label - always visible', 'Area': 'inline label - always visible', 'Estado': 'inline label - always visible', });
lyr_Limite_4.set('fieldLabels', {'id': 'no label', });
lyr_Disponibles_5.set('fieldLabels', {'Lote': 'inline label - always visible', 'Area': 'inline label - always visible', 'Estado': 'inline label - always visible', 'Precio': 'no label', });
lyr_Disponibles_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});