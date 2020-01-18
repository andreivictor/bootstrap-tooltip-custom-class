(function ($) {

    if (!$.fn.tooltip) {
        throw new Error('Bootstrap Tooltip must be included first!');
    }

    var Tooltip = $.fn.tooltip.Constructor;

    $.extend(Tooltip.DEFAULTS, {
        customClass: ''
    });

    var _show = Tooltip.prototype.show;

    Tooltip.prototype.show = function () {

        _show.apply(this);

        if (this.options.customClass) {
            var $tip = this.tip();
            $tip.addClass(this.options.customClass);
        }
    };

})(window.jQuery);
