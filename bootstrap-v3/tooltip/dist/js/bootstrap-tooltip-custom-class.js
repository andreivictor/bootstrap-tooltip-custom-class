/*!
 * bootstrap-tooltip-custom-class
 * v1.1.0
 * Extends Bootstrap Tooltips and Popovers by adding custom classes.
 * Copyright (c) 2017 - 2020 Andrei Victor Bulearca - https://github.com/andreivictor/bootstrap-tooltip-custom-class#readme
 * License: MIT
 */


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
