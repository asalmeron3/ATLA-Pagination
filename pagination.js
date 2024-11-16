function setUpPagination(className, pageNum) {
  let items = $(`.${className}`);
  let itemsPerPage = 4;

  numPages = Math.ceil(items.length/itemsPerPage);
  firstIndex = pageNum * itemsPerPage;
  lastIndex = firstIndex + itemsPerPage;
  
  makePageButtons(numPages, pageNum);
  makePages(items, firstIndex, lastIndex);

};

function makePages(listOfItems, firstIndex, lastIndex) {
  $.each(listOfItems, (index, item) => {
    item.classList.toggle('hidden', index < firstIndex || index >= lastIndex);
  });
}
