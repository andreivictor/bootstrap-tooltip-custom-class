(function($) {

    if (!$.fn.tooltip) {
        throw new Error('Bootstrap Tooltip must be included first!');
    }

    var Tooltip = $.fn.tooltip.Constructor;

    $.extend(Tooltip.Default, {
        customClass: ''
    });

    var _show = Tooltip.prototype.show;

    Tooltip.prototype.show = function () {

        _show.apply(this);

        if (this.config.customClass) {
            var tip = this.getTipElement();
            $(tip).addClass(this.config.customClass);
        }

    };

})(window.jQuery);
