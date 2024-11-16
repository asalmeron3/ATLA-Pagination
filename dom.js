let characters;
let domPageNum = 0;
let numPages;
let startIndex = 0;
let endIndex;

$("#run-search").on("click", function(event) {
  $(".page-buttons").empty();
  characters = getCharacters(queryURL);
});

function makePageButtons(numPages) { 
  $(".page-buttons").empty();
 
  let backButton = $("<button/>")
  .attr({
    "class": "update-page-button",
    "changeBy": "back"
  }).text("<< Back");
  $(".page-buttons").append(backButton);

  for(let currPage=1; currPage<=numPages; currPage++){
    let currButton = $("<button/>")
    .attr({
      "pageNum": currPage,
      "class": "page-button",
    }).text(currPage);

    $(".page-buttons").append(currButton);
  };

  let nextButton = $("<button/>")
  .attr({
    "class": "update-page-button",
    "changeBy": "next"
  }).text("Next >>");
  $(".page-buttons").append(nextButton);

  $(".page-button").on("click",function(){
    domPageNum = $(this).attr("pageNum") -1 ;
    setUpPagination("character", domPageNum);
  });

  $(".update-page-button").on("click", function() {
    let changeType = $(this).attr("changeBy");
    updateDomPageNum(changeType);
  });
};

function createCharacterDivs (arrayData) {
  let charBox = $(".character-box");
  charBox.empty();
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

function updateDomPageNum(changeType) {
  if(changeType == "next"){
    if(domPageNum < numPages - 1){
      domPageNum++;
    } else {
      domPageNum = 0;
    }
  } else if(changeType == "back"){
    if(domPageNum > startIndex + 1) {
      domPageNum--;
    } else {
      domPageNum = numPages - 1;
    }
  } 
  setUpPagination("character", domPageNum);
}