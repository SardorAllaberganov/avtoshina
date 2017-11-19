$(document).ready(function(){

  initSliders();
  initSliders1();
  initSliders2();
});

function initSliders(){
  $("#rating_slider").slider({
    min: 80000,
    max: 1000000,
    values:[80000, 10000000],
    step: 1,
    range:true,
    slide: function( event, ui ) {
      $("#rating_range_label" ).html(ui.values[ 0 ] + ' - ' + ui.values[ 1 ]);
      $('#rating_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
      $("rating_filter").text(ui.value);
    }
  });

  $('#genre_criteria :checkbox').prop('checked', true);
  $('#all_genre').on('click', function(){
    $('#genre_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
}

function initSliders1(){
  $("#rating_slider1").slider({
    min: 60,
    max: 105,
    values:[60, 105],
    step: 1,
    range:true,
    slide: function( event, ui ) {
      $("#rating_range_label1" ).html(ui.values[ 0 ] + ' - ' + ui.values[ 1 ]);
      $('#rating_filter1').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
      $("rating_filter1").text(ui.value);
    }
  });

  $('#genre_criteria :checkbox').prop('checked', true);
  $('#all_genre').on('click', function(){
    $('#genre_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
}
function initSliders2(){
  $("#rating_slider2").slider({
    min: 600,
    max: 950,
    values:[600, 950],
    step: 1,
    range:true,
    slide: function( event, ui ) {
      $("#rating_range_label2" ).html(ui.values[ 0 ] + ' - ' + ui.values[ 1 ]);
      $('#rating_filter2').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
      $("rating_filter2").text(ui.value);
    }
  });

  $('#genre_criteria :checkbox').prop('checked', true);
  $('#all_genre').on('click', function(){
    $('#genre_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
}
