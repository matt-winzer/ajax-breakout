$(document).ready(function() {
  $('button.submit-button').click(findCharacter);

});

var $name = $('p.name');
var baseURL = 'http://swapi.co/api/';

function findCharacter(event) {
  event.preventDefault();
  var $clicked = $('input[name=name]:checked').val();

  $.get(baseURL + $clicked)
    .then(appendName);

  // The AJAX request below produces the same result

  // $.get(baseURL + $clicked)
  //   .then(function(data) {
  //     function appendName(person) {
  //       $name.text(person.name)
  //   }
  // })
}

function appendName(person) {
  $name.text(person.name);
}
