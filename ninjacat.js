$(document).ready(function(){
    $('img').click(function(){
        var alt = $(this).attr('data-alt-src');
        var src = $(this).attr('src');
        $(this).attr('src', alt);
        $(this).attr('data-alt-src', src);
    });
});