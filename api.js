const queryURL = "https://last-airbender-api.fly.dev/api/v1/characters";

function getCharacters(query) {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(apiData){
    createCharacterDivs(apiData);
  }).then(function(event){
    setUpPagination("character",startIndex);
  });
};