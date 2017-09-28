$(document).ready(function(){

	$('#features-section .features_text_block .indv_feature_block').hover(function(){
		$(this).toggleClass('active')
	});

    function alignModal(){
        var modalDialog = $(this).find(".modal-dialog");
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    $(".modal").on("shown.bs.modal", alignModal);
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    });


    $('.loanmeet_testimonial_carousel').carousel({
        interval: 5000
    });

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
       
});