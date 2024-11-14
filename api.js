const queryURL = "https://last-airbender-api.fly.dev/api/v1/characters";

function getCharacters(query) {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(apiData){
    createCharacterDivs(apiData);
  });
};

function createCharacterDivs (arrayData) {
  let charBox = $(".character-box");
  const numOfCharacters = arrayData.length;
  for(i=0; i<numOfCharacters; i++ ){
    let currentChar = arrayData[i];
    let charImg = $('<img>');
    charImg.attr('src', arrayData[i].photoUrl);

    let charDiv = $('<div>');
    charDiv.attr('class', "character");
    charDiv.attr("charId", currentChar._id);
    charDiv.append(charImg);

    let charInfo = $('<p>').text(
      `Name: ${currentChar.name} \n 
      Enemies: ${currentChar.enemies} \n 
      Allies: ${currentChar.allies}`
    );
    
    charBox.append(charDiv);
    charBox.append(charInfo);
  };
};
