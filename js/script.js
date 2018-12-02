//Share part
(function($){
    $('body').on('click', function(){
		$('.article-share-box.on').removeClass('on');
    }).on('click', '.article-share-link', function(e){
		e.stopPropagation();

		var $this = $(this),
			url = $this.attr('data-url'),
			encodedUrl = encodeURIComponent(url),
			id = 'article-share-box-' + $this.attr('data-id'),
			offset = $this.offset();

		if ($('#' + id).length){
			var box = $('#' + id);

        if (box.hasClass('on')){
			box.removeClass('on');
			return;
        }
		} else {
			var html = [
			'<div id="' + id + '" class="article-share-box">',
				'<input class="article-share-input" value="' + url + '">',
				'<div class="article-share-links">',
				'<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>',
				'<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"></a>',
				'<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>',
				'</div>',
			'</div>'
			].join('');
  
			var box = $(html);
  
			$('body').append(box);
		}
		$('.article-share-box.on').hide();

		box.css({
			top: offset.top - 92,
			left: offset.left - 105
		}).addClass('on');
    }).on('click', '.article-share-box', function(e){
		e.stopPropagation();
    }).on('click', '.article-share-box-input', function(){
		$(this).select();
    }).on('click', '.article-share-box-link', function(e){
		e.preventDefault();
		e.stopPropagation();
  
		window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
    });
  
    // Mobile nav
//    var $container = $('#container'),
//		isMobileNavAnim = false,
//		mobileNavAnimDuration = 200;
//  
//    var startMobileNavAnim = function(){
//		isMobileNavAnim = true;
//    };
//  
//    var stopMobileNavAnim = function(){
//		setTimeout(function(){
//			isMobileNavAnim = false;
//		}, mobileNavAnimDuration);
//    }
//  
//    $('#main-nav-toggle').on('click', function(){
//		if (isMobileNavAnim) return;
	
//		startMobileNavAnim();
//		$container.toggleClass('mobile-nav-on');
//		stopMobileNavAnim();
//    });
//  
//    $('#wrap').on('click', function(){
//		if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) //return;
//
//		$container.removeClass('mobile-nav-on');
//	});
})(jQuery);

// Adobe fonts 思源
(function(d) {
    var config = {
		kitId: 'tsg1jlb',
		scriptTimeout: 3000,
		async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

//Search part
function searchToggle(obj, evt){
	var container = $(obj).closest('.search-wrapper');

	if(!container.hasClass('active')){
		  container.addClass('active');
		  evt.preventDefault(); 
	}
	else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
		  container.removeClass('active');
		  // clear input
		  container.find('.search-input').val('');
		  // clear and hide result container when we press close
		  //container.find('.result-container').fadeOut(100, function(){$(this).empty();});
	}
}