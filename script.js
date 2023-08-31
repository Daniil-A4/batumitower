//popup
const popupLinks = document.querySelectorAll('.popup-link')
const body = document.querySelector('.body')
const lockPadding = document.querySelectorAll('.lock-padding')
const wrapper = document.querySelector('.wrapper')

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i]
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '')
      const curentPopup = document.getElementById(popupName)
      popupOpen(curentPopup)
      e.preventDefault()
    })
  }
}
const popupCloseIcon = document.querySelectorAll('.close-popup')

if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const el = popupCloseIcon[i]
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'))
      e.preventDefault()
    })
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open')
    if (popupActive) {
      popupClose(popupActive, false)
    } /* else {
			bodyLock()
		} */
    curentPopup.classList.add('open')
    wrapper.classList.add('_lock')
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'))
      }
    })
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    wrapper.classList.remove('_lock')
    popupActive.classList.remove('open');
    /* if (doUnlock) {
      bodyUnLock()
    } */
  }
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive)
  }
})



//menu-burger
const iconMenu = document.querySelector('.icon-menu')
const menuBody = document.querySelector('.header__nav')
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.documentElement.classList.toggle('_lock')
    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
  })
}

const buttons = document.querySelectorAll('.header__item')

buttons.forEach(button => button.addEventListener('click', closeMenuBurger))

function closeMenuBurger() {
  document.documentElement.classList.remove('_lock')
  iconMenu.classList.remove('_active')
  menuBody.classList.remove('_active')

}

//scroll on click
const menuLinks = document.querySelectorAll('.header__link[data-goto]')
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick)
  })


  function onMenuLinkClick(e) {
    const menuLink = e.target
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto)
      // const gotoBlockValue = gotoBlock.getBoundingClientRect().top + offsetTop - document.querySelector('header').offsetHeight

      window.scrollTo({
        top: gotoBlock.offsetTop,
        behavior: "smooth"
      })
      e.preventDefault()
    }
  }
}



// Gallery

new Swiper('.bg__container', {
  observer: true,
  observerParents: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  speed: 800,
  loop: true,
  centeredSlides: true,
  watchOverflow: true,
  // loopAdditionalSlides: 1,
  preloadImages: false,
  parallax: true,
  navigation: {
    nextEl: '.swiper-container .slider-arrow_next',
    prevEl: '.swiper-container .slider-arrow_prev',
  },
  // pagination: {
  //   el: '.slider-why-we .slider-why-we__dots',
  //   clickable: true,
  // },
  autoplay: {
    delay: 5000,
    stopOnLastSlide: true,
    disableOnInteractiom: false,
  },
  effect: 'fade',
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   991: {
  //     slidesPerView: 3,
  //   },
  // }

});
new Swiper('.appartments__swiper', {
  observer: true,
  observerParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 800,
  centeredSlides: false,
  watchOverflow: true,
  loopAdditionalSlides: 5,
  preloadImages: false,
  parallax: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  loop: true,
  navigation: {
    nextEl: '.appartments__swiper-button-next',
    prevEl: '.appartments__swiper-button-prev',
  },
  effect: 'cube',
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});

new Swiper('.gallery-video-swiper', {
  observer: true,
  observerParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 800,
  // loop: true,
  centeredSlides: false,
  watchOverflow: true,
  loopAdditionalSlides: 5,
  preloadImages: false,
  parallax: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  loop: false,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});
new Swiper('.infrastructure__slider', {
  observer: true,
  observerParents: true,
  slidesPerView: 3,
  spaceBetween: 50,
  speed: 800,
  // loop: true,
  centeredSlides: false,
  watchOverflow: true,
  loopAdditionalSlides: 5,
  preloadImages: false,
  parallax: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  breakpoints: {
    220: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.about__swiper-button-next',
    prevEl: '.about__swiper-button-prev',
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});





//telegram
// Get reference to the form element
const form = document.querySelector('.popup__form');
const salesDepForm = document.querySelector('.sales-department__form');
// Add event listener for form submission

form.addEventListener('submit', handleSubmit);
salesDepForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault(); // Prevent default form submission

  // Create new FormData object from the form
  const formData = new FormData(e.target);

  // Send form data to the PHP script using Fetch API
  fetch('sendform.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    console.log(data); // Response from PHP script
    const langPage = document.documentElement.lang.slice(0, 2)
    if (langPage === 'en') {
      location.href = 'thanks-en'
    } else if (langPage === 'ru') {
      location.href = 'thanks-ru'
    } else if (langPage === 'ge') {
      location.href = 'thanks-ge'
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
// =========================================================================


// Create an instance of Intersection Observer
const observer = new IntersectionObserver(callback);
const footer = document.querySelector('.footer');
// Define the callback function
function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      footer.classList.remove('visible');
    } else {
      footer.classList.add('visible');
    }
  });
}

// Observe the target elements
const target = document.querySelector('.hero');
observer.observe(target);







//gallery swiper in fancybox
$(document).ready(function () {
  let activeSwiper = null;
  const swipers = [];

  function setActiveSwiper(swiper) {
    if (activeSwiper !== null) {
      activeSwiper.el.classList.remove('active');
    }
    activeSwiper = swiper;
    activeSwiper.el.classList.add('active');
    const savedIndex = parseInt(localStorage.getItem('currentIndex'));
    activeSwiper.slideTo(savedIndex || 0, 0, false);
    localStorage.setItem('currentIndex', savedIndex || 0);
  }

  $('.gallery-swiper').each(function (index, element) {
    const swiper = new Swiper(element, {
      observer: true,
      observerParents: true,
      slidesPerView: 4,
      spaceBetween: 10,
      speed: 800,
      centeredSlides: false,
      watchOverflow: true,
      loopAdditionalSlides: 5,
      preloadImages: false,
      parallax: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },
      loop: false,
      breakpoints: {
        220: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
      },
      navigation: {
        nextEl: '.gallery__swiper-button-next',
        prevEl: '.gallery__swiper-button-prev',
        clickable: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    });

    swipers.push(swiper);

    swiper.on('init', function () {
      if (index === 0) {
        setActiveSwiper(swiper);
      }
    });

    swiper.on('slideChange', function () {
      if (swiper === activeSwiper) {
        const activeIndex = swiper.realIndex;
        localStorage.setItem('currentIndex', activeIndex);
      }
    });
  });

  function initializeGallery(category) {
    $('.gallery__image').hide().filter('.' + category).show();
    localStorage.setItem('activeCategory', category);
    localStorage.setItem('currentIndex', 0);
    const swiperIndex = $('.gallery__button[data-filter="' + category + '"]').index();
    setActiveSwiper(swipers[swiperIndex]);
    $('.gallery__wrapper').magnificPopup({
      delegate: 'a.' + category,
      type: 'image',
      gallery: {
        enabled: true
      },
      index: parseInt(localStorage.getItem('currentIndex'))
    });
  }

  $('.gallery__button').click(function () {
    const category = $(this).attr('data-filter');
    initializeGallery(category);
    $(this).addClass('active').siblings().removeClass('active');
  });

  const savedCategory = localStorage.getItem('activeCategory');
  if (savedCategory) {
    initializeGallery(savedCategory);
    $('.gallery__button[data-filter="' + savedCategory + '"]').addClass('active').siblings().removeClass('active');
  } else {
    // Initialize gallery with a default category when no saved category is found
    const defaultCategory = $('.gallery__button').first().attr('data-filter');
    initializeGallery(defaultCategory);
    $('.gallery__button[data-filter="' + defaultCategory + '"]').addClass('active').siblings().removeClass('active');
  }
});