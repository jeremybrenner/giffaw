$(document).ready(function() {

    $('input').on('change', function() {
        var $input = $('input').val()
        $.get("http://api.giphy.com/v1/gifs/search?q=" + $input + "&api_key=dc6zaTOxFJmzC", render)
    })

    function render(data) {
        $.each(data.data, function() {
            $("body").append("<img src='" + this.images.fixed_height.url + "'>");
        })

    }
});