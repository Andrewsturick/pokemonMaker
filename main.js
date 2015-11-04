'use strict';

$(document).ready(init);
function init(){
  $('#get').click(getClicked);
}


function getClicked(){
  $.ajax({
    method:'GET',
    url: 'http://pokeapi.co/api/v1/pokedex/1/',
    success: function(data,status){
      // console.log(data);
      console.log(data.pokemon.length);
      data.pokemon.forEach(function(pokemon){
        // if (pokemon.name==="zapdos"){
          // console.log(pokemon.resource_uri);
          // $.ajax('http://pokeapi.co/' + pokemon.resource_uri,{
          //   success: function(data){
          //     $.ajax('http://pokeapi.co/' + data.sprites[0].resource_uri,{
          //       success: function(data){
          //         console.log(data);

          var uril = pokemon.resource_uri;

          $.ajax('http://pokeapi.co/' + pokemon.resource_uri,{
              success: function(data){
              console.log(data.abilities[0]);


             }
          })









          //       }
          //     })
          //
          //   }
          // })
        // }
      });
    },
    error: function(promise, status, error){
      console.log('promise: ', promise);
      console.log('status: ', status);
      console.log('error: ' , error);
    }



  })

}
