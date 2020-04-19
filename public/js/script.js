var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  getSortData: {
      category: '[data-category]',
  }
});

var buttonGroups = document.querySelectorAll('.button-group');

for ( var i=0; i < buttonGroups.length; i++ ) {
  buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
}

function onButtonGroupClick( event ) {
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var button = event.target;
  button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
  button.classList.add('is-checked');
}

var filterFns = {};

$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

$( document ).ready(function() {
   $( "#fillall" ).trigger( "click" );
});

let pijl = document.querySelector('.click')
pijl.addEventListener("click",function () {
  document.documentElement.scrollTop = 0;
})
