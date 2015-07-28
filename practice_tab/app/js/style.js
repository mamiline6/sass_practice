$(function(){
//必要なセレクタ
var selector = {
	group: '.tab_block',
	nav: '.tab__nav',
	content: '.tab__content'
};
//選択時のクラス名
var className = {
	isSelected : 'is-selected'
};

	$(selector.group).each(function(idx, tab){
		var $group = $(this);
		var $navs = $group.find(selector.nav);
		var $contents = $group.find(selector.content);

		$navs.on('click', function(){
			var $shown_nav = $(this);
			var nav_idx = $shown_nav.index();
			var $shown_content = $contents.eq(nav_idx);

			$navs.removeClass(className.isSelected);
			$shown_nav.addClass(className.isSelected);
			$contents.removeClass(className.isSelected);
			$shown_content.addClass(className.isSelected);
		});
	});
});