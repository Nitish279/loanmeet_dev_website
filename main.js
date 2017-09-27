$(document).ready(function(){

	$('#features-section .features_text_block .indv_feature_block').hover(function(){
		$(this).toggleClass('active')
	});

    function alignModal(){
        var modalDialog = $(this).find(".modal-dialog");
        // console.log("modalDialog", modalDialog);
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    $(".modal").on("shown.bs.modal", alignModal);
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    });


     $('.loanmeet_testimonial_carousel').carousel({
         interval: 5000
     });

     // for every slide in carousel, copy the next slide's item in the slide.
     // Do the same for the next, next item.
     $('.loanmeet_testimonial_carousel .item').each(function() {
         var next = $(this).next();
         if (!next.length) {
             next = $(this).siblings(':first');
         }
         next.children(':first-child').clone().appendTo($(this));

         if (next.next().length > 0) {
             next.next().children(':first-child').clone().appendTo($(this));
         } else {
             $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
         }
     });


     // function alignVerticalCenter(){
     //    var blockquoteHeight = $('.testimonial_item_text_block blockquote').height();
     //    console.log("blockquoteHeight", blockquoteHeight);

     //    var blockquoteContentHeight = $('.testimonial_item_text_block blockquote p').height();
     //    console.log("blockquoteContentHeight", blockquoteContentHeight);

     //    var blockquoteContentMargin =  Math.max(0, (blockquoteHeight - blockquoteContentHeight) / 2);
     //    console.log("blockquoteContentMargin / 2", blockquoteContentMargin);


     //    $('.testimonial_item_text_block blockquote p').css("padding-top", blockquoteContentMargin);

     // }


     // alignVerticalCenter();
       
});




// $( document ).ready(function() {
// 	setInterval(function(){
// 		$('#features-section .features_text_block .indv_feature_block').each(function() {
// 			// debugger;
// 			$(this).addClass('active');
// 			$(this).siblings().removeClass('active');
// 		});
// 	}, 5000);
// });


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

