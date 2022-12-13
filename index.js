// Shop Filter
$(document).ready(function(){
    $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    if(value == "all")
    {
    $('.filter').show('1000');
    }
    else
    {
    $(".filter").not('.'+value).hide('3000');
    $('.filter').filter('.'+value).show('3000');
    }
    });
    if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");
    });
// Shop Filter end

// Tooltip initialization
let tooltipTriggerList = [].slice.call(document.querySelectorAll
('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) 
{
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// Tooltip initialization end

// Fade-in animation
$(document).ready(function() {
    $(window).scroll( function(){
        $('.revealUp').each( function(i){
        var bottom_of_object = $(this).offset().top + 
        $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + 
        $(window).height();
        if( bottom_of_window > bottom_of_object ){
            $(this).addClass('showme');
        }
        if( bottom_of_window < bottom_of_object ){
            $(this).removeClass('showme');
        }
    });
  });
});
// Fade-in animation end