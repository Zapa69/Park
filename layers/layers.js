ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32614").setExtent([507747.596064, 2071980.102168, 510860.128311, 2073970.043058]);
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
var format_ParqueIndustrial_1 = new ol.format.GeoJSON();
var features_ParqueIndustrial_1 = format_ParqueIndustrial_1.readFeatures(json_ParqueIndustrial_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_ParqueIndustrial_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueIndustrial_1.addFeatures(features_ParqueIndustrial_1);
var lyr_ParqueIndustrial_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParqueIndustrial_1, 
                style: style_ParqueIndustrial_1,
                interactive: true,
                title: '<img src="styles/legend/ParqueIndustrial_1.png" /> Parque Industrial'
            });
var format_Parque_1_2 = new ol.format.GeoJSON();
var features_Parque_1_2 = format_Parque_1_2.readFeatures(json_Parque_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
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

lyr_GoogleSatellite_0.setVisible(true);lyr_ParqueIndustrial_1.setVisible(true);lyr_Parque_1_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ParqueIndustrial_1,lyr_Parque_1_2];
lyr_ParqueIndustrial_1.set('fieldAliases', {'CVE_CAT_OR': 'CVE_CAT_OR', 'SECTOR': 'SECTOR', 'PADRON_E_3': 'PADRON_E_3', });
lyr_Parque_1_2.set('fieldAliases', {'clave': 'clave', 'SECTOR': 'SECTOR', 'Dirección': 'Dirección', });
lyr_ParqueIndustrial_1.set('fieldImages', {'CVE_CAT_OR': 'TextEdit', 'SECTOR': 'TextEdit', 'PADRON_E_3': 'TextEdit', });
lyr_Parque_1_2.set('fieldImages', {'clave': 'TextEdit', 'SECTOR': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_ParqueIndustrial_1.set('fieldLabels', {'CVE_CAT_OR': 'inline label', 'SECTOR': 'no label', 'PADRON_E_3': 'no label', });
lyr_Parque_1_2.set('fieldLabels', {'clave': 'inline label', 'SECTOR': 'no label', 'Dirección': 'inline label', });
lyr_Parque_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});