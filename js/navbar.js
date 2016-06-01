// Younji's Navigation Plug-in................................
$(document).ready(function() {
// "When the document is ready, then do the functions inside the braces."
    $('#nav_ul').smartmenus();
    $('#menuIcon').on('click', function(){
        $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
        $('#nav_ul').fadeToggle(300);
    });
}); 
