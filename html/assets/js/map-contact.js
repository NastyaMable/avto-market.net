ymaps.ready(init);
	var myMap, 
		myPlacemark;

	function init(){ 
		myMap = new ymaps.Map("map", {
			center: [47.31203461167808,39.9464417160034],
			zoom: 10
		}); 
		
		rostov_1 = new ymaps.Placemark([47.4199245742298,40.014915499999915], {
			hintContent: '«АвтоМаркет»',
			balloonContent: 'г. Новочеркасск, Новочеркасское шоссе, 1а'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'assets/media/general/map-marker.png',
			iconImageSize: [38, 60],
			iconImageOffset: [-13, -42]
		});
		rostov_2 = new ymaps.Placemark([47.46101407420232,40.10210599999996], {
			hintContent: '«АвтоМаркет»',
			balloonContent: 'г. Новочеркасск, Харьковское шоссе, 6'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'assets/media/general/map-marker.png',
			iconImageSize: [38, 60],
			iconImageOffset: [-13, -42]
		});
		rostov_3 = new ymaps.Placemark([47.137696956468645,39.71820718650817], {
			hintContent: '«АвтоМаркет»',
			balloonContent: 'г. Батайск, ул. М.Горького, 285Г'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'assets/media/general/map-marker.png',
			iconImageSize: [38, 60],
			iconImageOffset: [-13, -42]
		});
		

		myMap.geoObjects.add(rostov_1)
		.add(rostov_2)
		.add(rostov_3)

		.add("zoomControl")
		.add("mapTools")
		.add("searchControl");	
	}