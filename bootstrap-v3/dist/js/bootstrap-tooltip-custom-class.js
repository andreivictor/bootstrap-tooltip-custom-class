/*!
 * bootstrap-tooltip-custom-class-for-bootstrap-v3
 * v1.0.0
 * Extend Bootstrap Tooltip plugin by adding custom classes. For Bootstrap v3.
Custom classes can be added by using `customClass` parameter or via `data-custom-class` attribute.
There are 5 predefined custom classes in CSS: .tooltip-primary, .tooltip-success, .tooltip-info, .tooltip-warning, .tooltip-danger.
 * Copyright (c) 2019 Andrei Victor Bulearca - https://github.com/andreivictor/bootstrap-tooltip-custom-class#readme
 * License: MIT
 */


(function ($) {

    if (typeof $.fn.tooltip.Constructor === 'undefined') {
        throw new Error('Bootstrap Tooltip must be included first!');
    }

    var Tooltip = $.fn.tooltip.Constructor;

    $.extend(Tooltip.DEFAULTS, {
        customClass: ''
    });

    var _show = Tooltip.prototype.show;

    Tooltip.prototype.show = function () {

        _show.apply(this,Array.prototype.slice.apply(arguments));

        if ( this.options.customClass ) {
            var $tip = this.tip();
            $tip.addClass(this.options.customClass);
        }
    };

})(window.jQuery);
