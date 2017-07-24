(function(){
  "use strict";
  $(window).on('action:share.addHandlers', function(evt,params) {
    addHandler('[component="share/qq"]', function () {
		var result = getPostUrl($(this));
      return params.openShare('http://connect.qq.com/widget/shareqq/index.html?' + result['title'] + '&url=',result['url'], 500, 570);
    });
  });  

  $(window).on('action:share.addHandlers', function(evt,params) {
    addHandler('[component="share/weibo"]', function () {
		var result = getPostUrl($(this));
      return params.openShare('http://service.weibo.com/share/share.php?&appkey=2428617074&ralateUid=3501446262&' + result['title'] + '&url=',result['url'], 500, 570);
    });
  });  

  function addHandler(selector, callback) {
    $('#content').off('click', selector).on('click', selector, callback);
  }

  function getPostUrl(clickedElement) {
    var parts = window.location.pathname.split('/');
    var postIndex = parseInt(clickedElement.parents('[data-index]').attr('data-index'), 10);
    return {
		'title': 'title=' + (parts[3] ? parts[3] : ''),
		'url': '/' + parts[1] + '/' + parts[2] + (parts[3] ? '/' + parts[3] : '') + (postIndex ? '/' + (postIndex + 1) : '')
	};
  }
}());