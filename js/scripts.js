$(document).ready(function () {
  $('form#quiz').submit(function (event) {
    event.preventDefault();

    var question1 = parseInt($('#question1').val());
    var question2 = parseInt($('#question2').val());
    var question3 = parseInt($('#question3').val());
    var question4 = parseInt($('#question4').val());
    var question5 = parseInt($('#question5').val());

    var score = question1 + question2 + question3 + question4 + question5;

    var placeHolder = 90000;
    score += placeHolder;
    console.log('score:', score);

    var scoreString = String(score);
    console.log('scoreString:', scoreString);

    console.log('placeHolder1- for test:', scoreString[0]);
    var ruby = scoreString[1];
    console.log('placeHolder2- for ruby:', scoreString[1]);
    var c = scoreString[2];
    console.log('placeHolder3- for c:', scoreString[2]);
    var python = scoreString[3];
    console.log('placeHolder4- for python:', scoreString[3]);
    var javascript = scoreString[4];
    console.log('placeHolder5- for js:', scoreString[4]);

    $('#javascript').hide();
    $('#c').hide();
    $('#python').hide();
    $('#ruby').hide();

    function showRuby() {
      $('#ruby').show();
    };
    function showC() {
      $('#c').show();
    };
    function showPython() {
      $('#python').show();
    };
    function showJavaScript() {
      $('#javascript').show();
    };

    if (javascript > ruby && javascript > c && javascript > python) {
      showJavaScript();
    } else if (python > ruby && python > c && python > javascript) {
      showPython();
    } else if (c > ruby && c > python && c > javascript) {
      showC();
    } else if (ruby > c && ruby > python && ruby > javascript) {
      showRuby();
    } else {
      if (javascript === ruby) {
        showJavaScript();
        showRuby();
      } else if (javascript === c) {
        showJavaScript();
        showC();
      } else if (javascript === python) {
        showJavaScript();
        showPython();
      } else if (c === python) {
        showC();
        showPython();
      } else if (c === ruby) {
        showC();
        showRub();
      } else if (python === ruby) {
        showPython();
        showRuby();
      }
    }
  });
});