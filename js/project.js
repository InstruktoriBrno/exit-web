$(document).ready(function()
{
  $('input.datetimepicker, input.datepicker').datepicker(
  {
    duration: '',
    changeMonth: true,
    changeYear: true,
    yearRange: '2007:2020',
    showTime: true,
    time24h: true,
    currentText: 'Dnes',
    closeText: 'OK'
  });


  //$("#fmessage").fadeOut(1000);
  setTimeout(function() { $('#fmessage').fadeOut(1000); }, 20000);

  $('#text .fg a').lightbox();
});