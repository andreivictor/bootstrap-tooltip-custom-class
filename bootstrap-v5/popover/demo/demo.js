var popoverTriggerList = [].slice.call(document.querySelectorAll('.btn-secondary'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

const customPopoverEl = document.querySelector('.btn-custom');
const customPopover = new bootstrap.Popover(customPopoverEl, {
  customClass: 'popover-custom'
});

const customPopoverAltEl = document.querySelector('.btn-custom-alt');
const customPopoverAlt = new bootstrap.Popover(customPopoverAltEl, {
  customClass: 'popover-custom-alt'
});
