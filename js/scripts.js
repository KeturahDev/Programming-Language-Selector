$(document).ready(function () {
  $('form#quiz').submit(function (event) {
    event.preventDefault();

    var question1 = parseInt($('#question1').val());
    var question2 = parseInt($('#question2').val());
    var question3 = parseInt($('#question3').val());
    var question4 = parseInt($('#question4').val());
    var question5 = parseInt($('#question5').val());

    score = question1 + question2 + question3 + question4 + question5;
    // console.log('score:', score);

    if (score < 60) {
      $('#javascript').show(); //
      $('#c').hide();
      $('#python').hide();
      $('#ruby').hide();

    } else if (score >= 60 && score <= 175) {
      $('#javascript').hide();
      $('#c').hide();
      $('#python').show(); //
      $('#ruby').hide();
    } else if (score > 175 && score <= 299) {
      $('#javascript').hide();
      $('#c').show();
      $('#python').hide();
      $('#ruby').hide();

    } else if (score >= 300) {
      $('#javascript').hide();
      $('#c').hide();
      $('#python').hide();
      $('#ruby').show();
    }
  });
  // console.log('running')
});