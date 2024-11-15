let characters;

$("#run-search").on("click", function(event) {
  $(".page-buttons").empty();
  characters = getCharacters(queryURL);
});

function makePageButtons(numPages) {  
  for(let currPage=1; currPage<=numPages; currPage++){
    let currButton = $("<button/>")
    .attr({
      "pageNum": currPage,
      "class": "page-button",
    }).text(currPage);

    $(".page-buttons").append(currButton);
  };

  $(".page-button").on("click",function(){
    console.log("clicked");
    console.log($(this).attr("pageNum"));
  });
};

