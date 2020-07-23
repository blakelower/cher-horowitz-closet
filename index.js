jQuery(function($) {
    var arr = new Array('./images/download-4.jpg', './images/download-5.jpg', './images/download-6.jpg', './images/download-3.jpg')
    $.each($.shuffle(arr), function (_, src) {
        $('<img />', {
            src: src
        }).appendTo('#array')
    })
    $('button.array').click(function () {
        $('#array').shuffle()
    });
});

(function ($) {
    $.fn.shuffle = function () {
        var _self = this,
        children = $.shuffle(this.children().get());
        $.each(children, function () {
            _self.append(this)
        })
        return this;
    };
    $.shuffle = function (arr) {
        for (var j,x,i = arr.length; i; j=parseInt(Math.random() * i), x = arr[--i], arr[i]=arr[j], arr[j] = x);
        return arr
    };
})(jQuery)