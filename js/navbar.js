
function fixedNav () { // Function definition.  I name a function "fixedNav". 
    var fromPageTop = $(document).scrollTop(); // "scrollTop" is how far away you scrolled down from the top of the page(=document).
    var logoHeight = $('#logo').height(); // Get the height of #logo.
        
    if ((fromPageTop >= logoHeight) && (window.innerWidth >= 600)) { // I set 600px because it should work only when the screen is bigger than mobiles'.
        $('#nav_ul').addClass('fixedNav');
        $('#nav_ul').width($('header').width()); // Give #nav_ul the width of the header.
    } else {
        $('#nav_ul').removeClass('fixedNav'); // if you still see the bottom of the logo.
    } 
} // end fixed nav function.
    


$(document).ready(function() {
// "When the document is ready, then do the functions inside the braces."
    $('#nav_ul').smartmenus();
    $('#menuIcon').on('click', function(){ //when you click #munuIcon, do this function.
        $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
        $('#nav_ul').fadeToggle(300);
    });
    $(document).on('scroll', fixedNav); 
    
                             
                             
    $('#pi_tab').on('hover', function(){
        $(this).find("span.sub-arrow").addClass("hideArrow");
    });
    $('#pi_tab').on('mouseleave', function(){
        $("span.sub-arrow").removeClass("hideArrow");
    });
}); // end doc ready function.
