(function ($) {

    if (!$.fn.tooltip) {
        throw new Error('Bootstrap Tooltip must be included first!');
    }

    if (!$.fn.popover) {
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
