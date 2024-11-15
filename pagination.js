function setUpPagination(className, pageNum) {
  let items = $(`.${className}`);
  let itemsPerPage = 4;

  const numPages = Math.ceil(items.length/itemsPerPage);
  const startIndex = pageNum * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  makePageButtons(numPages);
  makePages(items, startIndex, endIndex);

};

function makePages(listOfItems, startIndex, endIndex) {
  $.each(listOfItems, (index, item) => {
    item.classList.toggle('hidden', index < startIndex || index >= endIndex);
  });
}
