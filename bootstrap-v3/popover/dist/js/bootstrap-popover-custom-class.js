/*!
 * bootstrap-tooltip-custom-class
 * v1.0.4
 * Extends Bootstrap Tooltip plugin by adding custom classes.
 * Copyright (c) 2019 Andrei Victor Bulearca - https://github.com/andreivictor/bootstrap-tooltip-custom-class#readme
 * License: MIT
 */


(function ($) {

    if (typeof $.fn.tooltip.Constructor === 'undefined') {
        throw new Error('Bootstrap Tooltip must be included first!');
    }

    if (typeof $.fn.popover.Constructor === 'undefined') {
        throw new Error('Bootstrap Popover must be included first!');
    }

    var Tooltip = $.fn.tooltip.Constructor;

    if (typeof Tooltip.DEFAULTS.customClass === 'undefined') {
        // eslint-disable-next-line max-len
        throw new Error('BootstrapPopoverCustomClass requires BootstrapTooltipCustomClass');
    }

    var Popover = $.fn.popover.Constructor;

    $.extend(Popover.DEFAULTS, {
        customClass: ''
    });

    Popover.prototype.show = Tooltip.prototype.show;

})(window.jQuery);
