$(document).ready(function() {
    $('div').on('click', 'button', function () {
      $(this).closest('div').find('ol, ul').slideToggle();
      $(this).closest('div').find('#hiddengif').slideToggle();
    });
    $('div').on('click', '#geocities', function() {
      if ($('#changing-stylesheet').attr('href') == 'stylesheet.css') {
        $('#changing-stylesheet').attr('href', 'geocities.css');
        $('#img1').attr('src', 'pictures/partycat.gif');
        $('#img2').attr('src', 'pictures/internet-party.gif');
      }
      else {
        $('#changing-stylesheet').attr('href', 'stylesheet.css');
        $('#img1').attr('src', 'pictures/schooldesks.jpg');
        $('#img2').attr('src', 'pictures/success.jpg');
      }
    });
});
