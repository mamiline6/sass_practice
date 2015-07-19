$(function() {
	// tab
	$(".tabBlock .tabs__tab a").click(function() {
		var num = $(".tabBlock .tabs__tab a").index(this);
		$(".tabContents").addClass('is-hidden');
		$(".tabContents").eq(num).removeClass('is-hidden');
		$(".tabBlock .tabs__tab").removeClass('is-select');
		$(".tabBlock .tabs__tab").eq(num).addClass('is-select');
	});
});
