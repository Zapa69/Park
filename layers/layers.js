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
var format_Pr4_2 = new ol.format.GeoJSON();
var features_Pr4_2 = format_Pr4_2.readFeatures(json_Pr4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pr4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pr4_2.addFeatures(features_Pr4_2);
var lyr_Pr4_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pr4_2, 
                style: style_Pr4_2,
                interactive: true,
                title: '<img src="styles/legend/Pr4_2.png" /> Pr4'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoads_1.setVisible(true);lyr_Pr4_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoads_1,lyr_Pr4_2];
lyr_Pr4_2.set('fieldAliases', {'Clave Cata': 'Clave Cata', 'Lugar': 'Lugar', 'Propietari': 'Propietari', 'Dirección': 'Dirección', });
lyr_Pr4_2.set('fieldImages', {'Clave Cata': 'TextEdit', 'Lugar': 'TextEdit', 'Propietari': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Pr4_2.set('fieldLabels', {'Clave Cata': 'no label', 'Lugar': 'no label', 'Propietari': 'no label', 'Dirección': 'no label', });
lyr_Pr4_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});