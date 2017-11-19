// Get the modal
var modal = document.getElementById('ask-modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// toggle class scroll 
//navbar anim
$(window).scroll(function() {
    if($(this).scrollTop() > 50)
    {
        $('.navbar-trans').addClass('afterscroll');
    } else
    {
        $('.navbar-trans').removeClass('afterscroll');
    }  
});
  
//slider js
var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 5000,
  pause: "false",
});

/* main page counter js */
$(document).ready(function() {
  $(window).scroll( function(){
    $('.counter').each(function() {
      var $this = $(this), countTo = $this.attr('data-count');
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object ){
      $({ countNum: $this.text()}).animate({countNum: countTo},
        {
          duration: 2000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
      }
    });
  });
});

//first range slider
(function() {
  var parent = document.querySelector(".range-slider");
  if(!parent) return;
  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");
  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
          slide2 = parseFloat(rangeS[1].value);
      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
      }
      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });
  numberS.forEach(function(el) {
    el.oninput = function() {
      var number1 = parseFloat(numberS[0].value),
          number2 = parseFloat(numberS[1].value); 
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }
      rangeS[0].value = number1;
      rangeS[1].value = number2;
    }
  });
})();

//second range slider
(function() {
  var parent = document.querySelector(".range-slider1");
  if(!parent) return;
  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");
  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
          slide2 = parseFloat(rangeS[1].value);
      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
      }
      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });
  numberS.forEach(function(el) {
    el.oninput = function() {
      var number1 = parseFloat(numberS[0].value),
          number2 = parseFloat(numberS[1].value); 
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }
      rangeS[0].value = number1;
      rangeS[1].value = number2;
    }
  });
})();