


$(document).ready(function() {
  const $element = $('#number1');
  let x = 0;
  let interval;

 
  function countNumber(start) {
    start.forEach(function(start1) {
      if (start1.target.id === 'number1' && start1.isIntersecting) {
        
        interval = setInterval(function() {
          x++;
          $element.text(x);
          if (x === 30) {
            clearInterval(interval);
          }
        }, 100);
        observer.unobserve(start1.target);
      }
    });
  }
 const observer = new IntersectionObserver(countNumber);
 observer.observe($element[0]);
});

$(document).ready(function() {
  const $element = $('#number2');
  let x = 0;
  let interval;

 
  function countNumber(start) {
    start.forEach(function(start1) {
      if (start1.target.id === 'number2' && start1.isIntersecting) {
        
        interval = setInterval(function() {
          x++;
          $element.text(x);
          if (x === 1144) {
            clearInterval(interval);
          }
        }, 0.01);
        observer.unobserve(start1.target);
      }
    });
  }
 const observer = new IntersectionObserver(countNumber);
 observer.observe($element[0]);
});

$(document).ready(function() {
  const $element = $('#number3');
  let x = 0;
  let interval;

 
  function countNumber(start) {
    start.forEach(function(start1) {
      if (start1.target.id === 'number3' && start1.isIntersecting) {
        
        interval = setInterval(function() {
          x++;
          $element.text(x);
          if (x === 2200) {
            clearInterval(interval);
          }
        }, 0.01);
        observer.unobserve(start1.target);
      }
    });
  }
 const observer = new IntersectionObserver(countNumber);
 observer.observe($element[0]);
});




$(document).ready(function(){

$('#scrollBtn').click(function(){
  $('html, body').animate({scrollTop:1000},'50');
});


});


$(document).ready(function () {
$("phoneMenu").css("display","none");

$('.third-button').on('click', function () {

  $('.animated-icon3').toggleClass('open');
});

$("#hamburgerButton").click(function(){
  var phoneMenu = $("#phoneMenu");
  var display = phoneMenu.css("display");
  phoneMenu.css("display",display == "block" ? "none" : "block");
});


});