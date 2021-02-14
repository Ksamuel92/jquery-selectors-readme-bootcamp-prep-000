// declare your functions here...
function paragraphSelector () {
  return $('p');
}

function lastImageSelector () {
  return $('img:last');
}

function divSelector () {
return  $('div.pics');
}

function ninjaBabySelector () {
  return $('#baby-ninja');
}

function firstListItem () {
  return $('div ul #pic-list:first-child');
}
console.log(firstListItem());