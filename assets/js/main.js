$(document).ready(function(){
	// $('#myCarousel').carousel({
 //      interval: 5000
 //    })


 $('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});




 function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);
});

                //Production
        var APIRoot = "https://loanmeet.herokuapp.com";
        //Staging
        //var APIRoot = "https://loanmeet-staging.herokuapp.com";
        //Local 
        //var APIRoot = "http://localhost:3000";
        var distributor_list = "/v1/credit/distributor/getAllDistributors";
        var url = APIRoot + distributor_list;
        

        $("#Businessturnover").hide();
        $("#DistributorList").hide();
        $("#loan_type").change(function() {
            if ($('#loan_type option:selected').text() == "Business" || $('#loan_type option:selected').text() == "Working Capital Loan") {
                $("#salary").hide();
                $("#Businessturnover").show();
            }
            else if($('#loan_type option:selected').text() == "Distributor Credit Line") {
                $("#salary").hide();
                $("#LoanAmout").hide();
                fetch(url)
                .then((resp) => resp.json()) // Transform the data into json
                .then(function(data) {
                console.log("inside data fetching function");
                console.log(data.users[0]);
                var distributor_data = JSON.stringify(data.users);
                localStorage.setItem("distributor_data",distributor_data );
                var options = "";
                for(var i=0; i< data.users.length; i++){
                options += '<option value ="' + data.users[i].id + '">'+data.users[i].partner_name + '</option>';
                }
                $("#distributor_list").append(options);
             
                })
                $("#DistributorList").show();

            }
            else {
                $("#salary").show();
                $("#Businessturnover").hide();
            }
        });