const mesureWidth = item => {
  let reqItemWidth = 0;

  const screenWidth = $(window).width();
  const container = item.closest(".accordeon__list");
  const titlesBlock = container.find(".accordeon__triger");
  const titlesWidth = titlesBlock.width() * titlesBlock.length;

  const textContainer = item.find(".accordeon__content");
  const paddingLeft = parseInt(textContainer.css("padding-left"));
  const paddingRight = parseInt(textContainer.css("padding-right"));

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const isMobileSmall = window.matchMedia("(max-width: 420px)").matches;
  
  //if (isMobileSmall) {
   //reqItemWidth = screenWidth - titlesBlock;
  //};
  

  if (isMobile) {
    reqItemWidth = screenWidth - titlesWidth;
  }
  else {
    reqItemWidth = 500;
  }

  return {
    container: reqItemWidth,
    textContainer: reqItemWidth - paddingLeft - paddingRight
  }
  

  

};

const closeEveryItemInContainer = (container) => {
  const items = container.find(".accordeon__item");
  const content = container.find(".accordeon__content-wrap");

  items.removeClass("active");
  content.width(0);
};

const openAcc = (item) => {
  const hiddenContent = item.find(".accordeon__content-wrap");
  const reqWidth = mesureWidth(item);
  const textBlock = item.find(".accordeon__content");

  item.addClass("active");
  hiddenContent.width(reqWidth.container);
  textBlock.width(reqWidth.textContainer);
};

$(".accordeon__triger").on("click", e => {
   e.preventDefault();

  const $this = $(e.currentTarget);
  const clsoestItemMobile = $this.siblings();
  const item = $this.closest(".accordeon__item");
  const itemOpened = item.hasClass("active");
  const container = $this.closest(".accordeon__list");
  //const isMobileSmall = window.matchMedia("(max-width: 420px)").matches;
  

  if (itemOpened) {
    closeEveryItemInContainer(container)
  }
  else {
    closeEveryItemInContainer(container)
    openAcc(item);
};
});

$(".accordeon__close").on("click", e => {
  e.preventDefault();

  closeEveryItemInContainer($(".accordeon__list"));

});

