$(function() {
	// tab
	var tabLink = $("#tabTopBlock .tabs__tab .tabs__link");
	var tabCnt = $("#tabTopBlock .tabContents");
	var tabItem = $("#tabTopBlock .tabs__tab");

	$(tabLink).click(function() {
		var num = tabLink.index(this);
		console.log(tabCnt);
		tabCnt.addClass("is-hidden");
		tabCnt.eq(num).removeClass("is-hidden");
		tabItem.removeClass("is-selected");
		tabItem.eq(num).addClass("is-selected");
	});
});
