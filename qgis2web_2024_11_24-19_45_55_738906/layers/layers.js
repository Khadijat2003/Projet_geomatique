var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format__province_marrakech_safi_Joint_1 = new ol.format.GeoJSON();
var features__province_marrakech_safi_Joint_1 = format__province_marrakech_safi_Joint_1.readFeatures(json__province_marrakech_safi_Joint_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__province_marrakech_safi_Joint_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__province_marrakech_safi_Joint_1.addFeatures(features__province_marrakech_safi_Joint_1);
var lyr__province_marrakech_safi_Joint_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__province_marrakech_safi_Joint_1, 
                style: style__province_marrakech_safi_Joint_1,
                popuplayertitle: "_province_marrakech_safi_Joint",
                interactive: true,
    title: '_province_marrakech_safi_Joint<br />\
    <img src="styles/legend/_province_marrakech_safi_Joint_1_0.png" /> Province de Youssoufia<br />\
    <img src="styles/legend/_province_marrakech_safi_Joint_1_1.png" /> Province de Rehamna<br />\
    <img src="styles/legend/_province_marrakech_safi_Joint_1_2.png" /> Province de Chichaoua<br />\
    <img src="styles/legend/_province_marrakech_safi_Joint_1_3.png" /> Province de Essaouira<br />\
    <img src="styles/legend/_province_marrakech_safi_Joint_1_4.png" /> Province de El Kelaa Des Srgana<br />\
    <img src="styles/legend/_province_marrakech_safi_Joint_1_5.png" /> Province de Al Haouz<br />\
    <img src="styles/legend/_province_marrakech_safi_Joint_1_6.png" /> Province de Safi<br />\
    <img src="styles/legend/_province_marrakech_safi_Joint_1_7.png" /> Province de Marrakech<br />'
        });
var format_Chef_lieu_2 = new ol.format.GeoJSON();
var features_Chef_lieu_2 = format_Chef_lieu_2.readFeatures(json_Chef_lieu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chef_lieu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chef_lieu_2.addFeatures(features_Chef_lieu_2);
var lyr_Chef_lieu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chef_lieu_2, 
                style: style_Chef_lieu_2,
                popuplayertitle: "Chef_lieu",
                interactive: true,
                title: 'Chef_lieu'
            });
var format_LimiteMaroc_3 = new ol.format.GeoJSON();
var features_LimiteMaroc_3 = format_LimiteMaroc_3.readFeatures(json_LimiteMaroc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteMaroc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMaroc_3.addFeatures(features_LimiteMaroc_3);
var lyr_LimiteMaroc_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMaroc_3, 
                style: style_LimiteMaroc_3,
                popuplayertitle: "Limite-Maroc",
                interactive: true,
                title: '<img src="styles/legend/LimiteMaroc_3.png" /> Limite-Maroc'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr__province_marrakech_safi_Joint_1.setVisible(true);lyr_Chef_lieu_2.setVisible(true);lyr_LimiteMaroc_3.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr__province_marrakech_safi_Joint_1,lyr_Chef_lieu_2,lyr_LimiteMaroc_3];
lyr__province_marrakech_safi_Joint_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_provinces_Code_Provi': 'Data_provinces_Code_Provi', 'Data_provinces_Nom_Provin': 'Data_provinces_Nom_Provin', 'Data_provinces_Area': 'Data_provinces_Area', 'Data_provinces_Population_2024': 'Data_provinces_Population_2024', 'Data_provinces_Chef lieu': 'Data_provinces_Chef lieu', 'Data_provinces_lat': 'Data_provinces_lat', 'Data_provinces_long': 'Data_provinces_long', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_Chef_lieu_2.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_LimiteMaroc_3.set('fieldAliases', {'fid': 'fid', });
lyr__province_marrakech_safi_Joint_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Data_provinces_Code_Provi': 'Hidden', 'Data_provinces_Nom_Provin': 'TextEdit', 'Data_provinces_Area': 'TextEdit', 'Data_provinces_Population_2024': 'Hidden', 'Data_provinces_Chef lieu': 'Hidden', 'Data_provinces_lat': 'TextEdit', 'Data_provinces_long': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'Hidden', 'auxiliary_storage_labeling_lineanchorclipping': 'Hidden', 'auxiliary_storage_labeling_lineanchortype': 'Hidden', 'auxiliary_storage_labeling_lineanchortextpoint': 'Hidden', });
lyr_Chef_lieu_2.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Area': 'Hidden', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_LimiteMaroc_3.set('fieldImages', {'fid': 'Hidden', });
lyr__province_marrakech_safi_Joint_1.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', 'Data_provinces_Nom_Provin': 'inline label - always visible', 'Data_provinces_Area': 'inline label - always visible', 'Data_provinces_lat': 'inline label - always visible', 'Data_provinces_long': 'inline label - always visible', });
lyr_Chef_lieu_2.set('fieldLabels', {'Nom_Provin': 'inline label - visible with data', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', });
lyr_LimiteMaroc_3.set('fieldLabels', {});
lyr_LimiteMaroc_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});