/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
// runParticle = () => document.addEventListener('DOMContentLoaded', function () {
//   particleground(document.getElementById('particles'), {
//     dotColor: '#5cbdaa',
//     lineColor: '#5cbdaa'
//   });
//   var intro = document.getElementById('intro');
//   intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
// }, false);

runParticle = () => {
  console.log("Demo.js")
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
};


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
