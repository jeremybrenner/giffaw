$(document).ready(function() {

	$.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC", render)


    $('input').on('change', function() {
        var $input = $('input').val().replace("", "+")//is not necessary per API - punctuation is stripped.
        $.get("http://api.giphy.com/v1/gifs/search?q=" + $input + "&api_key=dc6zaTOxFJmzC", render)
    })

    $('body').on('scroll', function(){
    	var $input = $('input').val().replace("", "+")
    	$.get("http://api.giphy.com/v1/gifs/search?q=" + $input + "&api_key=dc6zaTOxFJmzC", render)
    })

    function render(data) {
    	$("img").remove();
        $.each(data.data, function() {
            $("body").append("<img src='" + this.images.fixed_height.url + "'>");
        })
    }
}); 