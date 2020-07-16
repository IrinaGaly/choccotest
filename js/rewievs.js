const findBlockByAlias = (alias) => {
  return $(".rewievs__item").filter((ndx, item) => {
    return $(item).attr("data-steam") == alias;
  });
};

$('.interactive-feedback-link').click(e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-switch");
  const itemToShow = findBlockByAlias(target);
  const curItem = $this.closest(".rewievs__switcher-item");

  itemToShow.addClass("active").siblings().removeClass("active");
  curItem.addClass("interactive-feedback_active").siblings().removeClass("interactive-feedback_active");

});