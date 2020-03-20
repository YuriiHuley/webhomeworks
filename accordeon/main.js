// $('.header').click(function(){
//     if(!$(this).closest('.item').find('.description').is(':visible')){
//         $('.description').slideUp();
//         $(this).closest('.item').find('.description').slideDown();
//     }
//     if(!$(this).closest('.item').find('.description').is(':hidden')){
//         $('.description').slideUp();
//     }
// // });
// $('.header').click(function(){
//     // якщо поточний опис відкритий, то можемо його закрити
//     if(!$(this).closest('.item').find('.description').is(':visible')){
//         $(this).closest('.item').find('.description').slideUp();
//     }else{ // інакше закриваємо всі описи, і відкриваємо поточний
//         $('.description').slideUp();
//         $(this).closest('.item').find('.description').slideDown();
//     }
// });
$('.header').click(function(){
    $('.description').slideUp(); // закриваємо всі
    // якщо поточний опис не відкритий, то можемо його відкрити
    if(!$(this).closest('.item').find('.description').is(':visible')){
        $(this).closest('.item').find('.description').slideDown(); // відкриваємо поточний
    }
});
