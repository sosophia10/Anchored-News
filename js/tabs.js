//used on about page

//sources:
//https://codepen.io/aniketjain/pen/OxvQwb


$(function() {
    $('ul#side-navi li').on("click", function() {
        $('ul#side-navi li.active').not(this).removeClass('active');
        $(this).toggleClass('active');
    });  
 });