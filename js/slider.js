    // const leftBtn = document.querySelector('#left-ship');
    // const rightBtn = document.querySelector('#right-ship');
    // const items = document.querySelector('#slider__wrapper');
    // const computedStyles = getComputedStyle(slider__wrapper);


    // rightBtn.addEventListener('click', function(e){
    //   e.preventDefault();
    //   let currentRight = parseInt(computedStyles.right)

    //   if (currentRight < 887) {

    //     slider__list.style.right = `${currentRight + 150}px`;

    //     }
    //   });

    //   leftBtn.addEventListener('click', function(e){
    //   e.preventDefault();
    //   let currentRight = parseInt(computedStyles.right)

    //   if (currentRight > 0) {

    //     slider__list.style.right = `${currentRight - 150}px`;

    //     }
    //   });
    const slider = $('.slider__wrapper').bxSlider({
      pager: false,
      controls: false
    });

    $('#right-ship').click(e => {
      e.preventDefault();

      slider.goToPrevSlide();
    });
    $('#left-ship').click(e => {
      e.preventDefault();
      slider.goToNextSlide();
    })
    
    