(function($){
  $(function(){

    $('.button-collapse').sideNav({
	      menuWidth: 300, // Default is 300
	      edge: 'left', // Choose the horizontal origin
	      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
	      draggable: true // Choose whether you can drag to open on touch screens
	    }
    	);
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
//awesome view of any picture
$('.materialboxed').materialbox();
//slider init
$('.slider').slider({
	height: 530
});
//toast - service
function showToastService(){
	 Materialize.toast("<div class='section'><h5>Horarios :</h5><p>Lunes a Sábado 8:00 am - 8:00 pm</p><p>Domingo (cerrado)</p></div>", 6000);
};
// service collapsible
$('.collapsible').collapsible();
// carousel footer
$('.carousel.carousel-slider').carousel({fullWidth: true});
 setInterval(function() {
    $('.carousel').carousel('next');
  }, 5000); // every 2 seconds
 //please share it
 $("#menu-share-click").click(function(){
        $('.tap-target').tapTarget('open');
    });
 $('.modal').modal();

