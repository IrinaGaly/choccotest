const sections = $("section");
const display = $(".maincontent");
const sideMenu = $(".fixed-menu");
const pointMenu = $(".fixed-menu__point");
const menuItems = sideMenu.find(".fixed-menu__item");


const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile =  mobileDetect.mobile();

let inScroll = false;

sections.first().addClass("active");

const countSectionPosition = sectionEq => {
    return sectionEq * -100;
};

  const chanhgeMenuThemeForSection = (sectionEq) => {
    const currentSection = sections.eq(sectionEq);
    const menuTheme = currentSection.attr("data-sidemenu-theme");
    const activeClass = "fixed-menu-shadow";
    const activePoint = "fixed-menu__point-shadow";

    if (menuTheme == "black") {
      sideMenu.addClass(activeClass);
      pointMenu.addClass(activePoint);
    }

    else {
      sideMenu.removeClass(activeClass);
      pointMenu.removeClass(activePoint);

    }
};

const resetActiveClassForItem = (items, itemEq, activeClass) => {
  items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const performTransition = sectionEq => {
  if (inScroll == false) {
    inScroll = true;



    const position = countSectionPosition(sectionEq);

    chanhgeMenuThemeForSection(sectionEq);

    display.css({
      transform: `translateY(${position}%)`
    });

    resetActiveClassForItem(sections, sectionEq, "active");
    // sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
    

    setTimeout(() =>{
      inScroll = false;

      resetActiveClassForItem(menuItems, sectionEq, "fixed-menu__item_active");

      // sideMenu
      // .find(".fixed-menu__item")
      // .eq(sectionEq)
      // .addClass("fixed-menu__item_active")
      // .siblings()
      // .removeClass("fixed-menu__item_active");

    }, 1300);

  }
};

const scrollViewport = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction == "next" && nextSection.length) {
    performTransition(nextSection.index())
  }

  if (direction == "prev" && prevSection.length) {
    performTransition(prevSection.index())
  }
}

$(window).on("wheel", e => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scrollViewport("next");
  }

  if (deltaY < 0) {
    scrollViewport("prev");
  }
  
});

$(window).on("keydown", e => {
  
  const tagName = e.target.tagName.toLowerCase();

  if (tagName !== "input" && tagName !== "textarea") {

    switch (e.keyCode) {
      case 38: 
      scrollViewport("prev");
        break;

        case 40: 
        scrollViewport("next");
        break;
    }
  }
});

$(".wrapper").on("touchmove", e => e.preventDefault());

$("[data-scroll-to]").click(e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");
  const reqSection = $(`[data-section-id=${target}]`);

  performTransition(reqSection.index());

});


 if (isMobile) {
   //https://github.com/mattbryson/TouchSwipe-Jquery-Plugin

   $("body").swipe({
     swipe: function(event, direction) {
       const scroller = scrollViewport();
       let scrollDirection = "";
      
       if (direction == "up") scrollDirection = "next";
       if (direction == "down") scrollDirection = "prev";

       //console.log(scrollDirection);
       //scroller[scrollDirection]();
     }
   });
 };
