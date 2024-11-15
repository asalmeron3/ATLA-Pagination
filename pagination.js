function setUpPagination(numOfItemsToDisplay, className, pageNum) {
  const itemsPerPage = numOfItemsToDisplay;
  let currentPage = 0; 

  let items = $(`.${className}`);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  $.each(items, (index, item) => {
    item.classList.toggle('hidden', index < startIndex || index >= endIndex);
  });
};