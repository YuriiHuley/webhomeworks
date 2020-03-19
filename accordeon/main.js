$('.header').click(function(){
    if(!$(this).closest('.item').find('.description').is(':visible')){
        $('.description').slideUp();
        $(this).closest('.item').find('.description').slideDown();
    }
});
