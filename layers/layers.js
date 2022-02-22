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
var format_Park_cons_1 = new ol.format.GeoJSON();
var features_Park_cons_1 = format_Park_cons_1.readFeatures(json_Park_cons_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Park_cons_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Park_cons_1.addFeatures(features_Park_cons_1);
var lyr_Park_cons_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Park_cons_1, 
                style: style_Park_cons_1,
                interactive: true,
                title: '<img src="styles/legend/Park_cons_1.png" /> Park_cons'
            });
var format_Parque_1_2 = new ol.format.GeoJSON();
var features_Parque_1_2 = format_Parque_1_2.readFeatures(json_Parque_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parque_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parque_1_2.addFeatures(features_Parque_1_2);
var lyr_Parque_1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parque_1_2, 
                style: style_Parque_1_2,
                interactive: true,
                title: '<img src="styles/legend/Parque_1_2.png" /> Parque_1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Park_cons_1.setVisible(true);lyr_Parque_1_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Park_cons_1,lyr_Parque_1_2];
lyr_Park_cons_1.set('fieldAliases', {'TipoEdif': 'TipoEdif', 'AREACONS': 'AREACONS', });
lyr_Parque_1_2.set('fieldAliases', {'clave': 'clave', 'SECTOR': 'SECTOR', 'Dirección': 'Dirección', });
lyr_Park_cons_1.set('fieldImages', {'TipoEdif': 'TextEdit', 'AREACONS': 'TextEdit', });
lyr_Parque_1_2.set('fieldImages', {'clave': 'TextEdit', 'SECTOR': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Park_cons_1.set('fieldLabels', {'TipoEdif': 'no label', 'AREACONS': 'no label', });
lyr_Parque_1_2.set('fieldLabels', {'clave': 'inline label', 'SECTOR': 'no label', 'Dirección': 'inline label', });
lyr_Parque_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});