
function fixedNav () { // I name a function. Function definition.
    var fromPageTop = $(document).scrollTop(); // "scrollTop" is how far away you scrolled down from the top of the page(=document).
    var logoHeight = $('#logo').height(); // Get the height of #logo.
        
    if (fromPageTop >= logoHeight) {
        $('#nav_ul').addClass('fixedNav');
        $('#nav_ul').width($('header').width());
    } else {
        $('#nav_ul').removeClass('fixedNav');
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
}); // end doc ready function.
