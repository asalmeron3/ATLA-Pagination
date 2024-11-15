const queryURL = "https://last-airbender-api.fly.dev/api/v1/characters";

function getCharacters(query) {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(apiData){
    createCharacterDivs(apiData);
  }).then(function(event){
    setUpPagination(4, 'character', 0);
  });
};

function createCharacterDivs (arrayData) {
  let charBox = $(".character-box");
  const numOfCharacters = arrayData.length;
  for(i=0; i<numOfCharacters; i++ ){
    let currentChar = arrayData[i];

    let charImg = $('<img>');
    charImg.attr('class', 'charImg');
    charImg.attr('src', arrayData[i].photoUrl);

    let charDiv = $('<div>');
    charDiv.addClass("character", "hidden");
    charDiv.attr("charId", currentChar._id);

    let charInfo = $('<div>').attr('class', "characterInfo");
    charInfo.append(`<p>Name: ${currentChar.name}</p>`);
    charInfo.append(`<p>Enemies: ${currentChar.enemies}</p>`);
    charInfo.append(`<p>Allies: ${currentChar.allies}</p>`);
    
    charDiv.append(charImg);
    charDiv.append(charInfo);

    charBox.append(charDiv);
  };
};
