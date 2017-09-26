// $( document ).ready(function() {
// 	setInterval(function(){
// 		$('#features-section .features_text_block .indv_feature_block').each(function() {
// 			// debugger;
// 			$(this).addClass('active');
// 			$(this).siblings().removeClass('active');
// 		});
// 	}, 5000);
// });

$('#features-section .features_text_block .indv_feature_block').hover(function(){
	$(this).toggleClass('active')
});

// $('#loanmeet-testimonial').carousel({
//   interval: 400000
// });

// $('#loanmeet-testimonial.carousel .item').each(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));

//   if (next.next().length>0) {
 
//       next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
      
//   }
//   else {
//       $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
     
//   }
// });