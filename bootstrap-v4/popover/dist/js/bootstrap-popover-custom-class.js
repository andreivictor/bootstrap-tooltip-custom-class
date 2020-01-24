/*!
 * bootstrap-tooltip-custom-class
 * v1.1.0
 * Extends Bootstrap Tooltips and Popovers by adding custom classes.
 * Copyright (c) 2017 - 2020 Andrei Victor Bulearca - https://github.com/andreivictor/bootstrap-tooltip-custom-class#readme
 * License: MIT
 */


(function($) {

    if (!$.fn.popover) {
        throw new Error('Bootstrap Popover must be included first!');
    }

    var Popover = $.fn.popover.Constructor;

    $.extend(Popover.Default, {
        customClass: ''
    });

    var _show = Popover.prototype.show;

    Popover.prototype.show = function () {

        _show.apply(this);

        if (this.config.customClass) {
            var tip = this.getTipElement();
            $(tip).addClass(this.config.customClass);
        }

    };

})(window.jQuery);
