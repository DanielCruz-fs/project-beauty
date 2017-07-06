function initMap(){
	//map options
	 var options = {
	 	 zoom:15,
	 	 center:{lat:-17.3943386,lng:-66.2758585}
	 }
	 //new map
	 var map = new
	 google.maps.Map(document.getElementById('map'), options);
	 //add marker
	 var marker = new google.maps.Marker({
	 	 position:{lat:-17.3944152,lng:-66.2774537},
	 	 map:map
	 });
	 //info
	 var infoWindow = new google.maps.InfoWindow({
	 	 content:'<p>Alta Peluquería <b>Perlas Negras</b></p>'
	 });
	 marker.addListener('click', function(){
	 	 infoWindow.open(map, marker);
	 });

}