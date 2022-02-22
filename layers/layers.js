var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoads_1 = new ol.layer.Tile({
            'title': 'Google Roads',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_Ayala_2 = new ol.format.GeoJSON();
var features_Ayala_2 = format_Ayala_2.readFeatures(json_Ayala_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ayala_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ayala_2.addFeatures(features_Ayala_2);
var lyr_Ayala_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ayala_2, 
                style: style_Ayala_2,
                interactive: true,
                title: '<img src="styles/legend/Ayala_2.png" /> Ayala'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoads_1.setVisible(true);lyr_Ayala_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoads_1,lyr_Ayala_2];
lyr_Ayala_2.set('fieldAliases', {'Clave': 'Clave', 'Lugar': 'Lugar', 'Dirección': 'Dirección', });
lyr_Ayala_2.set('fieldImages', {'Clave': 'TextEdit', 'Lugar': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Ayala_2.set('fieldLabels', {'Clave': 'no label', 'Lugar': 'no label', 'Dirección': 'no label', });
lyr_Ayala_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});