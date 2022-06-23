

$(document).ready(function(){

	// Start Header

		// Start nav

			// for bugger
			$(".navbuttons").click(function(){
				$(".navbuttons").toggleClass("crossxs");
			});

			// fot nav
			$(window).scroll(function(){

				let getscrolltop = $(this).scrollTop();
				console.log(getscrolltop);

				if(getscrolltop >= 200){
					$(".navbar").addClass("navmenus");
				}else{
					$(".navbar").removeClass("navmenus");
				}

				});

		// End nav

	// End Header

});