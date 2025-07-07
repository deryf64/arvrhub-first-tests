var wms_layers = [];


        var lyr_RRZEOpenStreetMapStandardHD_0 = new ol.layer.Tile({
            'title': 'RRZE OpenStreetMap Standard HD',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://a.osm.rrze.fau.de/osmhd/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Ярославская область'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Челябинская область'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Удмуртская Республика'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Тюменская область'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> Тульская область'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> Томская область'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> Тверская область'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> Тамбовская область'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__9, 
                style: style__9,
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> Ставрополький край'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__10, 
                style: style__10,
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> Смоленская область'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__11, 
                style: style__11,
                interactive: true,
                title: '<img src="styles/legend/_11.png" /> Свердловская область'
            });
var format__12 = new ol.format.GeoJSON();
var features__12 = format__12.readFeatures(json__12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__12.addFeatures(features__12);
var lyr__12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__12, 
                style: style__12,
                interactive: true,
                title: '<img src="styles/legend/_12.png" /> Сахалинская область'
            });
var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13.addFeatures(features__13);
var lyr__13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__13, 
                style: style__13,
                interactive: true,
                title: '<img src="styles/legend/_13.png" /> Санкт-Петербург'
            });
var format__14 = new ol.format.GeoJSON();
var features__14 = format__14.readFeatures(json__14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__14.addFeatures(features__14);
var lyr__14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__14, 
                style: style__14,
                interactive: true,
                title: '<img src="styles/legend/_14.png" /> Самарская область'
            });
var format__15 = new ol.format.GeoJSON();
var features__15 = format__15.readFeatures(json__15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__15.addFeatures(features__15);
var lyr__15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__15, 
                style: style__15,
                interactive: true,
                title: '<img src="styles/legend/_15.png" /> Рязанская область'
            });
var format__16 = new ol.format.GeoJSON();
var features__16 = format__16.readFeatures(json__16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__16.addFeatures(features__16);
var lyr__16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__16, 
                style: style__16,
                interactive: true,
                title: '<img src="styles/legend/_16.png" /> Ростовская область'
            });
var format__17 = new ol.format.GeoJSON();
var features__17 = format__17.readFeatures(json__17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__17.addFeatures(features__17);
var lyr__17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__17, 
                style: style__17,
                interactive: true,
                title: '<img src="styles/legend/_17.png" /> Республика Татарстан'
            });
var format__18 = new ol.format.GeoJSON();
var features__18 = format__18.readFeatures(json__18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__18.addFeatures(features__18);
var lyr__18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__18, 
                style: style__18,
                interactive: true,
                title: '<img src="styles/legend/_18.png" /> Республика Саха (Якутия)'
            });
var format__19 = new ol.format.GeoJSON();
var features__19 = format__19.readFeatures(json__19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__19.addFeatures(features__19);
var lyr__19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__19, 
                style: style__19,
                interactive: true,
                title: '<img src="styles/legend/_19.png" /> Республика Мордовия'
            });
var format__20 = new ol.format.GeoJSON();
var features__20 = format__20.readFeatures(json__20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__20.addFeatures(features__20);
var lyr__20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__20, 
                style: style__20,
                interactive: true,
                title: '<img src="styles/legend/_20.png" /> Республика Марий Эл'
            });
var format__21 = new ol.format.GeoJSON();
var features__21 = format__21.readFeatures(json__21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__21.addFeatures(features__21);
var lyr__21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__21, 
                style: style__21,
                interactive: true,
                title: '<img src="styles/legend/_21.png" /> Республика Карелия'
            });
var format__22 = new ol.format.GeoJSON();
var features__22 = format__22.readFeatures(json__22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__22.addFeatures(features__22);
var lyr__22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__22, 
                style: style__22,
                interactive: true,
                title: '<img src="styles/legend/_22.png" /> Республика Дагестан'
            });
var format__23 = new ol.format.GeoJSON();
var features__23 = format__23.readFeatures(json__23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__23.addFeatures(features__23);
var lyr__23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__23, 
                style: style__23,
                interactive: true,
                title: '<img src="styles/legend/_23.png" /> Псковская область'
            });
var format__24 = new ol.format.GeoJSON();
var features__24 = format__24.readFeatures(json__24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__24.addFeatures(features__24);
var lyr__24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__24, 
                style: style__24,
                interactive: true,
                title: '<img src="styles/legend/_24.png" /> Пермский край'
            });
var format__25 = new ol.format.GeoJSON();
var features__25 = format__25.readFeatures(json__25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__25.addFeatures(features__25);
var lyr__25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__25, 
                style: style__25,
                interactive: true,
                title: '<img src="styles/legend/_25.png" /> Пензенская область'
            });
var format__26 = new ol.format.GeoJSON();
var features__26 = format__26.readFeatures(json__26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__26.addFeatures(features__26);
var lyr__26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__26, 
                style: style__26,
                interactive: true,
                title: '<img src="styles/legend/_26.png" /> Орловская область'
            });
var format__27 = new ol.format.GeoJSON();
var features__27 = format__27.readFeatures(json__27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__27.addFeatures(features__27);
var lyr__27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__27, 
                style: style__27,
                interactive: true,
                title: '<img src="styles/legend/_27.png" /> Оренбургская область'
            });
var format__28 = new ol.format.GeoJSON();
var features__28 = format__28.readFeatures(json__28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__28.addFeatures(features__28);
var lyr__28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__28, 
                style: style__28,
                interactive: true,
                title: '<img src="styles/legend/_28.png" /> Омская область'
            });
var format__29 = new ol.format.GeoJSON();
var features__29 = format__29.readFeatures(json__29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__29.addFeatures(features__29);
var lyr__29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__29, 
                style: style__29,
                interactive: true,
                title: '<img src="styles/legend/_29.png" /> Новосибирская область'
            });
var format__30 = new ol.format.GeoJSON();
var features__30 = format__30.readFeatures(json__30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__30.addFeatures(features__30);
var lyr__30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__30, 
                style: style__30,
                interactive: true,
                title: '<img src="styles/legend/_30.png" /> Новгородская область'
            });
var format__31 = new ol.format.GeoJSON();
var features__31 = format__31.readFeatures(json__31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__31.addFeatures(features__31);
var lyr__31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__31, 
                style: style__31,
                interactive: true,
                title: '<img src="styles/legend/_31.png" /> Нижегородская область'
            });
var format__32 = new ol.format.GeoJSON();
var features__32 = format__32.readFeatures(json__32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__32.addFeatures(features__32);
var lyr__32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__32, 
                style: style__32,
                interactive: true,
                title: '<img src="styles/legend/_32.png" /> Московская область'
            });
var format__33 = new ol.format.GeoJSON();
var features__33 = format__33.readFeatures(json__33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__33.addFeatures(features__33);
var lyr__33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__33, 
                style: style__33,
                interactive: true,
                title: '<img src="styles/legend/_33.png" /> Москва'
            });
var format__34 = new ol.format.GeoJSON();
var features__34 = format__34.readFeatures(json__34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__34.addFeatures(features__34);
var lyr__34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__34, 
                style: style__34,
                interactive: true,
                title: '<img src="styles/legend/_34.png" /> Липецкая область'
            });
var format__35 = new ol.format.GeoJSON();
var features__35 = format__35.readFeatures(json__35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__35.addFeatures(features__35);
var lyr__35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__35, 
                style: style__35,
                interactive: true,
                title: '<img src="styles/legend/_35.png" /> Ленинградская область'
            });
var format__36 = new ol.format.GeoJSON();
var features__36 = format__36.readFeatures(json__36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__36.addFeatures(features__36);
var lyr__36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__36, 
                style: style__36,
                interactive: true,
                title: '<img src="styles/legend/_36.png" /> Курганская область'
            });
var format__37 = new ol.format.GeoJSON();
var features__37 = format__37.readFeatures(json__37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__37.addFeatures(features__37);
var lyr__37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__37, 
                style: style__37,
                interactive: true,
                title: '<img src="styles/legend/_37.png" /> Красноярский край'
            });
var format__38 = new ol.format.GeoJSON();
var features__38 = format__38.readFeatures(json__38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__38.addFeatures(features__38);
var lyr__38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__38, 
                style: style__38,
                interactive: true,
                title: '<img src="styles/legend/_38.png" /> Костромская область'
            });
var format__39 = new ol.format.GeoJSON();
var features__39 = format__39.readFeatures(json__39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__39.addFeatures(features__39);
var lyr__39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__39, 
                style: style__39,
                interactive: true,
                title: '<img src="styles/legend/_39.png" /> Кировская область'
            });
var format__40 = new ol.format.GeoJSON();
var features__40 = format__40.readFeatures(json__40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__40.addFeatures(features__40);
var lyr__40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__40, 
                style: style__40,
                interactive: true,
                title: '<img src="styles/legend/_40.png" /> Калужская область'
            });
var format__41 = new ol.format.GeoJSON();
var features__41 = format__41.readFeatures(json__41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__41.addFeatures(features__41);
var lyr__41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__41, 
                style: style__41,
                interactive: true,
                title: '<img src="styles/legend/_41.png" /> Ивановская область'
            });
var format__42 = new ol.format.GeoJSON();
var features__42 = format__42.readFeatures(json__42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__42.addFeatures(features__42);
var lyr__42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__42, 
                style: style__42,
                interactive: true,
                title: '<img src="styles/legend/_42.png" /> Воронежская область'
            });
var format__43 = new ol.format.GeoJSON();
var features__43 = format__43.readFeatures(json__43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__43.addFeatures(features__43);
var lyr__43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__43, 
                style: style__43,
                interactive: true,
                title: '<img src="styles/legend/_43.png" /> Вологодская область'
            });
var format__44 = new ol.format.GeoJSON();
var features__44 = format__44.readFeatures(json__44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__44.addFeatures(features__44);
var lyr__44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__44, 
                style: style__44,
                interactive: true,
                title: '<img src="styles/legend/_44.png" /> Волгоградская область'
            });
var format__45 = new ol.format.GeoJSON();
var features__45 = format__45.readFeatures(json__45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__45.addFeatures(features__45);
var lyr__45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__45, 
                style: style__45,
                interactive: true,
                title: '<img src="styles/legend/_45.png" /> Владимирская область'
            });
var format__46 = new ol.format.GeoJSON();
var features__46 = format__46.readFeatures(json__46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__46.addFeatures(features__46);
var lyr__46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__46, 
                style: style__46,
                interactive: true,
                title: '<img src="styles/legend/_46.png" /> Брянская область'
            });
var format__47 = new ol.format.GeoJSON();
var features__47 = format__47.readFeatures(json__47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__47.addFeatures(features__47);
var lyr__47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__47, 
                style: style__47,
                interactive: true,
                title: '<img src="styles/legend/_47.png" /> Белгородская область'
            });
var format__48 = new ol.format.GeoJSON();
var features__48 = format__48.readFeatures(json__48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__48.addFeatures(features__48);
var lyr__48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__48, 
                style: style__48,
                interactive: true,
                title: '<img src="styles/legend/_48.png" /> Астраханская область'
            });
var format__49 = new ol.format.GeoJSON();
var features__49 = format__49.readFeatures(json__49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__49.addFeatures(features__49);
var lyr__49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__49, 
                style: style__49,
                interactive: true,
                title: '<img src="styles/legend/_49.png" /> Архангельская область'
            });
var format__50 = new ol.format.GeoJSON();
var features__50 = format__50.readFeatures(json__50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__50.addFeatures(features__50);
var lyr__50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__50, 
                style: style__50,
                interactive: true,
                title: '<img src="styles/legend/_50.png" /> Алтайский край'
            });

lyr_RRZEOpenStreetMapStandardHD_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);lyr__12.setVisible(true);lyr__13.setVisible(true);lyr__14.setVisible(true);lyr__15.setVisible(true);lyr__16.setVisible(true);lyr__17.setVisible(true);lyr__18.setVisible(true);lyr__19.setVisible(true);lyr__20.setVisible(true);lyr__21.setVisible(true);lyr__22.setVisible(true);lyr__23.setVisible(true);lyr__24.setVisible(true);lyr__25.setVisible(true);lyr__26.setVisible(true);lyr__27.setVisible(true);lyr__28.setVisible(true);lyr__29.setVisible(true);lyr__30.setVisible(true);lyr__31.setVisible(true);lyr__32.setVisible(true);lyr__33.setVisible(true);lyr__34.setVisible(true);lyr__35.setVisible(true);lyr__36.setVisible(true);lyr__37.setVisible(true);lyr__38.setVisible(true);lyr__39.setVisible(true);lyr__40.setVisible(true);lyr__41.setVisible(true);lyr__42.setVisible(true);lyr__43.setVisible(true);lyr__44.setVisible(true);lyr__45.setVisible(true);lyr__46.setVisible(true);lyr__47.setVisible(true);lyr__48.setVisible(true);lyr__49.setVisible(true);lyr__50.setVisible(true);
var layersList = [lyr_RRZEOpenStreetMapStandardHD_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11,lyr__12,lyr__13,lyr__14,lyr__15,lyr__16,lyr__17,lyr__18,lyr__19,lyr__20,lyr__21,lyr__22,lyr__23,lyr__24,lyr__25,lyr__26,lyr__27,lyr__28,lyr__29,lyr__30,lyr__31,lyr__32,lyr__33,lyr__34,lyr__35,lyr__36,lyr__37,lyr__38,lyr__39,lyr__40,lyr__41,lyr__42,lyr__43,lyr__44,lyr__45,lyr__46,lyr__47,lyr__48,lyr__49,lyr__50];
lyr__1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__12.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__20.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__21.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__22.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__23.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__24.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__25.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__26.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__27.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__28.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__29.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__30.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__31.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__32.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__33.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__34.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__35.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__36.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__37.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__38.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__39.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__40.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__41.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__42.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__43.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__44.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__45.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__46.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__47.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__48.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__49.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__50.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__12.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__14.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__16.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__18.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__20.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__21.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__22.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__23.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__24.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__25.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__26.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__27.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__28.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__29.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__30.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__31.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__32.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__33.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__34.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__35.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__36.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__37.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__38.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__39.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__40.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__41.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__42.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__43.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__44.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__45.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__46.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__47.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__48.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__49.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__50.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__8.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__9.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__10.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__11.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__12.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__13.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__14.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__15.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__16.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__17.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__18.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__19.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__20.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__21.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__22.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__23.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__24.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__25.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__26.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__27.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__28.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__29.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__30.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__31.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__32.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__33.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__34.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__35.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__36.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__37.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__38.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__39.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__40.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__41.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__42.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__43.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__44.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__45.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__46.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__47.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__48.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__49.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__50.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__50.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});