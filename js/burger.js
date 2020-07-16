
  const burgerBtn = document.querySelector('#gamburger-icon');
  const menu = document.querySelector('#nav-gamburger');
  const burgerClose = document.querySelector('#nav-close');

    burgerBtn.addEventListener('click', function() {
      menu.style.display = "block"; 
    });

    burgerClose.addEventListener('click', function(evt){
      evt.preventDefault();
      menu.style.display = "none";
    });

