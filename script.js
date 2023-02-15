$(document).ready(function(){

    $('.fa-bars').click(function(){
        // add and replace fa-times class  to fa-bars
        $(this).toggleClass('fa-times');
        // Mobile nave bar
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('fa-bars').removeClass('.fa-times');
        $('.navbar').removeClass('.nav-toggle');
    });



});