$(function(){
	setTimeout(function(){
	    var gallery = mui('.mui-slider');
	    gallery.slider({
	         interval:1800//自动轮播周期，若为0则不自动播放，默认为0；
	    });
	},300)
	// var slider = mui("#slider");
	// var gallery = mui('.mui-slider');
	// gallery.slider({
	// interval:1000//自动轮播周期，若为0则不自动播放，默认为0
	// });
})