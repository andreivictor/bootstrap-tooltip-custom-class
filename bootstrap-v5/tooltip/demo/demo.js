var tooltipTriggerList = [].slice.call(document.querySelectorAll('.btn-secondary'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const customTooltipEl = document.querySelector('.btn-custom');
const customTooltip = new bootstrap.Tooltip(customTooltipEl, {
  customClass: 'tooltip-custom'
});

const customTooltipAltEl = document.querySelector('.btn-custom-alt');
const customTooltipAlt = new bootstrap.Tooltip(customTooltipAltEl, {
  customClass: 'tooltip-custom-alt'
});
