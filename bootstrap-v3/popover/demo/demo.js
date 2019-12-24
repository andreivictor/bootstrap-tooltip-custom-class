$(document).ready(function(){
    $('.btn-default').popover();
    $('.btn-custom').popover({
        customClass: 'popover-custom'
    });
    $('.btn-custom-alt').popover({
        customClass: 'popover-custom-alt'
    });
});
