$(document).ready(function(){
    $('.btn-default').tooltip();
    $('.btn-custom').tooltip({
        customClass: 'tooltip-custom'
    });
    $('.btn-custom-alt').tooltip({
        customClass: 'tooltip-custom-alt'
    });
});
