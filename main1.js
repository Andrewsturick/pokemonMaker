'use strict';

$(document).ready(init);

var pokemon;

function init(){

  $('#get').click(getClicked);

      $.ajax({
        method:'GET',
        url: 'http://pokeapi.co/api/v1/pokedex/1/',
        success: function(data,status){

        pokemon=data.pokemon;

      }

  })
}

console.log(pokemon);

function getClicked(){
  var pokemonName = $('#pokemon').val();

  var selectedPokemonObject = pokemon.filter(
    function(each){
      return each.name===pokemonName;
    }
  )[0];


  var thisUri = selectedPokemonObject.resource_uri;
  

  $.ajax('http://pokeapi.co/' + thisUri,{
    success: function(data){
    var $card = $('<div>').addClass('card');
    var $name = data.name;
    var $name = $('<div>').text(pokemon.name);
    var $id = $('<div>').text('ID: ' + data.national_id);
    var $attack = $('<div>').text('Attack: ' + data.attack);
    var $defense = $('<div>').text('Defense: ' + data.defense);
    $card.append($name, $id, $attack, $defense);
    $.ajax('http://pokeapi.co' + data.sprites[0].resource_uri,{
      success: function(data){
        console.log(data);
        $card.append($('<img>').attr("src", 'http://pokeapi.co' + data.image));
        $('#holder').append(($card));
      }
    });



    }
  })


}
