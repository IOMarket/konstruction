function main_slider () {
	"use strict";
	$('.flexslider').flexslider({
        animation: "fade",
  	});
    $('.flex-control-nav').wrap("<div class='absolute'><div class='container'></div></div>");
}

function loading () {
    "use strict";
	$('.loading').fadeOut(400);
}

function gototop() {
    "use strict";
    //Click event to scroll to top
    $('.scrollToTop').on("click", function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
}

function projects_slider() {
    "use strict";
    //Click event to scroll to top
    $("#owl-demo").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay: true,
        loop: true,
        navigationText:  ["prev","next"],
    });
}

function navbar_scrolling() {
    "use strict";
    // Nav scroll
    $("nav.menu-slide ul").niceScroll({
        horizrailenabled:false,
        cursorcolor:"#000",
        background: "#e6e6e6",
        cursorborderradius: "0px",
        cursorwidth: "15px",
        cursorborder: "",
        cursoropacitymax:0.7,
        boxzoom:true,
        touchbehavior:false
    });

    $("nav.menu-slide").niceScroll({
        horizrailenabled:false,
        cursorcolor:"#000",
        background: "#e6e6e6",
        cursorborderradius: "0px",
        cursorwidth: "15px",
        cursorborder: "",
        cursoropacitymax:0.7,
        boxzoom:true,
        touchbehavior:false
    });
}

function navigation () {
    "use strict";
    var docHeight = $(window).height();
    $('.menu-slide > ul').css('height', docHeight);

    jQuery('.menu-slide ul li.menu-item-has-children a').on("click", function(){
        jQuery(this).next('.menu-slide ul ul').slideToggle(400);
        jQuery(this).toggleClass('active-nav');
    });

    jQuery('a#menu-toggle').on("click", function(){
        jQuery('.wrapper').toggleClass('slide_left');
        jQuery('.menu-slide').toggleClass('animated');
        return false
    });
    /*jQuery('html').on("click", function(){
        jQuery('.wrapper').removeClass('slide_left');
        jQuery('.menu-slide').removeClass('animated');
        return false
    });
    jQuery('a#menu-toggle').on("click", function(event){
        event.stopPropagation();
    });
    jQuery('.menu-slide').on("click", function(event){
        event.stopPropagation();
    });*/
}

function parallax() {
    "use strict";
    jQuery(document).ready(function($){
        // Cache the Window object
        $window = $(window);

        $('section[data-type="background"]').each(function(){
         var $bgobj = $(this); // assigning the object

            $(window).scroll(function() {
                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!                              
                var yPos = -($window.scrollTop() / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });

            }); // window scroll Ends
        });
    });
    /*
     * Create HTML5 elements for IE's sake
     */

    document.createElement("article");
    document.createElement("section");
}

function testimonials_slider() {
    "use strict";
    //Click event to scroll to top
    $("#owl-demo1").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay: true,
        loop: true,
        navigationText:  ["prev","next"],
        // "singleItem:true" is a shortcut for:
        items : 1,
    });
}

function clients_slider() {
    "use strict";
    //Click event to scroll to top
    $("#owl-demo2").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        //singleItem:true,
        autoPlay: true,
        loop: true,
        navigationText:  ["prev","next"],
        // "singleItem:true" is a shortcut for:
        items : 6, 
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsTablet: [768,2],
        itemsMobile : [479,1]
    });
}

function team_slider() {
    "use strict";
    //Click event to scroll to top
    $("#team_slider").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay: true,
        loop: true,
        navigationText:  ["prev","next"],
    });
}

function testimonials_second_version() {
    "use strict";
      var sync1 = $("#sync1");
  var sync2 = $("#sync2");
 
  sync1.owlCarousel({
    singleItem : true,
    mouseDrag: false,
    touchDrag: false,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  sync2.owlCarousel({
    items : 5,
    navigation: true,
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
    function center(number){
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for(var i in sync2visible){
            if(num === sync2visible[i]){
                var found = true;
            }
        }
     
        if(found===false){
            if(num>sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", num - sync2visible.length+2)
            }else{
                if(num - 1 === -1){
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if(num === sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
            sync2.trigger("owl.goTo", num-1)
        }
        
    }
}

function tabs_slider() {
    "use strict";
    //Click event to scroll to top
    $("#tabs_gallery").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay: true,
        loop: true,
        navigationText:  ["prev","next"],
    });
}

function insta_slider() {
    "use strict";
    //Click event to scroll to top
    $("#carousel").featureCarousel({  });
}

function filtables() {
    
    "use strict";
    jQuery('#Grid').mixitup({
        effects: ['fade', 'scale', 'rotateY'],
        transitionSpeed: 1000
    });
    jQuery(".filternav li a").on("click", function(event) {
        jQuery(".filternav li").removeClass("active");
        jQuery(this).parent().addClass("active")
        event.preventDefault();
    });

}

function products_layout() {
    
    "use strict";
    jQuery('#list_view').on("click", function(event) {
        jQuery('#grid-layout').fadeOut(400);
        jQuery('#list-layout').fadeIn(400);
        jQuery('#grid_view').removeClass('active');
        jQuery(this).addClass('active');
        return false
    });
    jQuery('#grid_view').on("click", function(event) {
        jQuery('#grid-layout').fadeIn(400);
        jQuery('#list-layout').fadeOut(400);
        jQuery('#list_view').removeClass('active');
        jQuery(this).addClass('active');
        return false
    });

    jQuery('.selling-option').on("click", function(event) {
        jQuery(this).next('ul').slideToggle(400);
        return false
    });
}

function products_detail_slider() {
    
    "use strict";
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: true,
        prevText: "",
        nextText: "",
        animationLoop: false,
        slideshow: false,
        itemWidth: 90,
        itemMargin: 0,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider){
          $('body').removeClass('loading');
        }
    });
}

function image_zoom() {
    
    "use strict";
    jQuery('.zoom').zoom();
}

function related_products_slider() {
    
    "use strict";
    jQuery('#related-products').owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: false,
        items : 5,
        autoPlay: true,
        loop: true,
        navigationText:  ["prev","next"],
    });
    jQuery('#top-rated-products').owlCarousel({
        navigation : false,
        controlNav: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true,
        items : 1,
        autoPlay: true,
        loop: true,
        navigationText:  ["prev","next"],
    });
}

function price_range_slider() {
    
    "use strict";
    jQuery( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            jQuery( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    jQuery( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
}

function blog_slider() {
    "use strict";
    $('.blog-slider .flexslider').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
        controlNav: false,
    });
    $('.flex-control-nav').wrap("<div class='absolute'><div class='container'></div></div>");
}



// Functions callout here.
jQuery(document).ready(function($) {
    gototop();
    projects_slider();
    navigation();
    navbar_scrolling();
    testimonials_slider();
    clients_slider();
    team_slider();
    testimonials_second_version();
    tabs_slider();
    insta_slider();
    filtables();
    products_layout();
    products_detail_slider();
    image_zoom();
    related_products_slider();
    price_range_slider();
    blog_slider();
});

jQuery(window).load(function(){
	main_slider();
  	loading();
});