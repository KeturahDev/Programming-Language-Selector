$(document).ready(function () {
  $('form#quiz').submit(function (event) {
    event.preventDefault();

    var question1 = parseInt($('#question1').val());
    var question2 = parseInt($('#question2').val());
    var question3 = parseInt($('#question3').val());
    var question4 = parseInt($('#question4').val());
    var question5 = parseInt($('#question5').val());

    score = question1 + question2 + question3 + question4 + question5;


  })
})