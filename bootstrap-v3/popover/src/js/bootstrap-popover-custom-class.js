(function ($) {

    if (!$.fn.popover) {
        throw new Error('Bootstrap Popover must be included first!');
    }

    var Popover = $.fn.popover.Constructor;

    $.extend(Popover.DEFAULTS, {
        customClass: ''
    });

    var _show = Popover.prototype.show;

    Popover.prototype.show = function () {

        _show.apply(this);

        if (this.options.customClass) {
            var $tip = this.tip();
            $tip.addClass(this.options.customClass);
        }
    };

})(window.jQuery);
