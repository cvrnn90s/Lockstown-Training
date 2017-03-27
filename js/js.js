$("#cpr-button").click(function() {
    $(".cpr-overlay").toggle("slow", function() {
        
    });
});

$("#fa-button").click(function() {
    $(".firstaid-overlay").toggle("slow", function() {
        
    });
});

$("#efa-button").click(function() {
    $(".efirstaid-overlay").toggle("slow", function() {
        
    });
});

$("#pfa-button").click(function() {
    $(".pfirstaid-overlay").toggle("slow", function() {
        
    });
});

//Animations//
var $animate_el = $('.animate');
var $browser = $(window);

//Function to check if html elements to be animated are in view of the browser when scrolled upon
//If elements are in view a class will be added to animate element
function check_element_visible() {
    var browser_height = $browser.height();
    var browser_top_position = $browser.scrollTop();
    var browser_bottom_position = (browser_top_position + browser_height);
    
    
    $.each($animate_el, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        
        
        if ((element_bottom_position >= browser_top_position) && (element_top_position <= browser_bottom_position)) {
            $element.addClass('visible');
        } else {
            $element.removeClass('visible');
        }
        
    });
}

$browser.on('scroll resize', check_element_visible);
$browser.trigger('scroll');