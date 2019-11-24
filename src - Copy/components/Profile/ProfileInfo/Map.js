

import React, { Component } from 'react';
//import './css/Map.less';


class Map extends Component {


	componentDidMount() {
		ymaps.ready(() => { 
			let lat = 55.76;
			let lon= 37.64;
			const marker = this.props.children[0];
			if (React.isValidElement(marker)) {
				lat = marker.props.lan;
				lon = marker.props.lon;
			}
			var myMap = new ymaps.Map("map", {
				center: [lat, lon],
				zoom: 7
			});
			var myPlacemark = new ymaps.GeoObject({
				geometry: {
					type: "Point",
					coordinates: [lat, lon]
				}
			});
			myMap.geoObjects.add(myPlacemark);
		});
	}


	render() {
		return (
			<div id="map">
			</div>
		);
	}
}


export default Map;
