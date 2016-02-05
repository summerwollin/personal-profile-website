$(document).ready(function() {
    $('div').on('click', 'button', function () {
      $(this).closest('div').find('ol, ul').slideToggle();
      $(this).closest('div').find('.hiddengif').slideToggle();
    });
    $('.timemachine').on('click', '.spice', function() {
      if ($('#timemachine-stylesheet').attr('href') == 'stylesheet.css') {
        $('#timemachine-stylesheet').attr('href', 'timemachine-stylesheet.css');
        $('#img1').attr('src', 'pictures/partycat.gif');
        $('#img2').attr('src', 'pictures/internet-party.gif');
      }
      else {
        $('#timemachine-stylesheet').attr('href', 'stylesheet.css');
        $('#img1').attr('src', 'pictures/schooldesks.jpg');
        $('#img2').attr('src', 'pictures/success.jpg');
      }
    });
});
