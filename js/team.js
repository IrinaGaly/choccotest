//   $(document).ready(function() {
//   $( "a" ).click(function( event ) {
//   event.preventDefault();
//  $('#members__link').click(function () {
//  $('#members__triangle').addClass('members__triangle_active');
//  $('#members__info').addClass('members__info_active');
//  });

//  $(document).ready(function() {
//   $('.members__link').on('click', function(e){
//     e.preventDefault();
//     $('members__triangle').toggleClass('members__triangle_active').next().fadeToggle();
//     $('.members__info').toggleClass('members__info_active').next().fadeToggle();
    
//   })
// });
// 




// const openItem = item => {
//   const container = item.closest(".members__item");
//   const contentBlock = container.find(".members__info");
//   const textBlock = contentBlock.find

// }

//  $('.members__link').on('click', function(e){
//        e.preventDefault();
//        const $this = $(e.currentTarget);
//       $('members__triangle').toggleClass('members__triangle_active').next().fadeToggle();
//     $('.members__info').toggleClass('members__info_active').next().fadeToggle();
       
//     });
const openItem = item => {
const container = item.closest(".members__item");
const contentBlock = container.find(".members__info");
const textBlock = contentBlock.find(".members__info-wrapper");
const reqHeight = textBlock.height();
const triangleActive = item.find(".members__triangle");

container.addClass("active");
contentBlock.height(reqHeight);
triangleActive.addClass("members__triangle_active");

}

  const closeEveryItem = container => {
  const items = container.find(".members__info");
  const itemContainer = container.find(".members__item");
  const itemTriangle = container.find(".members__triangle");
  

  
  itemContainer.removeClass("active");
  items.height(0);
  itemTriangle.removeClass("members__triangle_active");
}

$('.members__link').click(e => {
  e.preventDefault();
  const $this = $(e.currentTarget);
  const container = $this.closest(".team__list");
  const elemContainer = $this.closest(".members__item");


  if (elemContainer.hasClass("active")) {
    closeEveryItem(container);
  }
  else {
    closeEveryItem(container);
    openItem($this);
}
});