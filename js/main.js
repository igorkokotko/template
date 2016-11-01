function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav stick") {
        x.className += " responsive stick";
    } else {
        x.className = "topnav stick";
    }
}




// carousel slider
$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
 
    items : 3,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,

    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
 
    autoPlay : false,
    stopOnHover : false,
 
    navigation : true,
    navigationText : [document.getElementById('svg-prev'),document.getElementById('svg-next')],
    rewindNav : true,
    scrollPerPage : false,
    
    pagination : false,
    paginationNumbers: false,
 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
 
    baseClass : "owl-carousel",
    theme : "owl-theme",
 
    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",
 
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,
    });
 
});

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      
      afterInit : function(elem){
      var that = this
      that.owlControls.appendTo(elem)
    }
 
  });
  
  var $grid = $('.grid').isotope({
		itemSelector: '.element-item',
		layoutMode: 'masonry'
	});
	var $container = $(".port-sub-section");
	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$container.isotope({ filter: filterValue });
	})
	$(".filter-button-group button").on("click", function(){
		$(".filter-button-group button").removeClass("active");
		$(this).addClass("active");
	});
 
});


$(document).ready(function() {
    var s = $("#myTopnav");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick"); 
        }
    });
});