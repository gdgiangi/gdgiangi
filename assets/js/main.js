
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 10
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        document.getElementById("logo").src = "assets/img/logo-blue.png";
      } else {
        selectHeader.classList.remove('header-scrolled')
        document.getElementById("logo").src = "assets/img/logo.png";
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scroll with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Carriers Slider
   */
  new Swiper('.clients-slider', {
    speed: 1600,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

})();

/**
   * Active state of freight type selector
   */
document.getElementById("ltlOption").onclick = function () { select_freight('ltlOption') };
document.getElementById("ftlOption").onclick = function () { select_freight('ftlOption') };
document.getElementById("packageOption").onclick = function () { select_freight('packageOption') };
document.getElementById("pakOption").onclick = function () { select_freight('pakOption') };
document.getElementById("letterOption").onclick = function () { select_freight('letterOption') };
function select_freight(option) {
  document.getElementById(option).classList.add('active');
  if (option == 'ftlOption') {
    document.getElementById('ftlImg').src = "assets/img/ftl-inactive.png";
    document.getElementById("ltlOption").classList.remove('active');
    document.getElementById('ltlImg').src = "assets/img/ltl-active.png";
    document.getElementById("packageOption").classList.remove('active');
    document.getElementById('packageImg').src = "assets/img/package-active.png";
    document.getElementById("pakOption").classList.remove('active');
    document.getElementById('pakImg').src = "assets/img/pak-active.png";
    document.getElementById("letterOption").classList.remove('active');
    document.getElementById('letterImg').src = 'assets/img/letter-active.png';
  }
  else if (option == 'ltlOption') {
    document.getElementById('ltlImg').src = "assets/img/ltl-inactive.png";
    document.getElementById("ftlOption").classList.remove('active');
    document.getElementById('ftlImg').src = "assets/img/ftl-active.png";
    document.getElementById("packageOption").classList.remove('active');
    document.getElementById('packageImg').src = "assets/img/package-active.png";
    document.getElementById("pakOption").classList.remove('active');
    document.getElementById('pakImg').src = "assets/img/pak-active.png";
    document.getElementById("letterOption").classList.remove('active');
    document.getElementById('letterImg').src = 'assets/img/letter-active.png';
  }
  else if (option == 'pakOption') {
    document.getElementById('pakImg').src = 'assets/img/pak-inactive.png';
    document.getElementById("ltlOption").classList.remove('active');
    document.getElementById('ltlImg').src = "assets/img/ltl-active.png";
    document.getElementById("packageOption").classList.remove('active');
    document.getElementById('packageImg').src = "assets/img/package-active.png";
    document.getElementById("ftlOption").classList.remove('active');
    document.getElementById('ftlImg').src = "assets/img/ftl-active.png";
    document.getElementById("letterOption").classList.remove('active');
    document.getElementById('letterImg').src = 'assets/img/letter-active.png';
  }
  else if (option == 'packageOption') {
    document.getElementById('packageImg').src = 'assets/img/package-inactive.png';
    document.getElementById("ltlOption").classList.remove('active');
    document.getElementById('ltlImg').src = "assets/img/ltl-active.png";
    document.getElementById("ftlOption").classList.remove('active');
    document.getElementById('ftlImg').src = "assets/img/ftl-active.png";
    document.getElementById("pakOption").classList.remove('active');
    document.getElementById('pakImg').src = "assets/img/pak-active.png";
    document.getElementById("letterOption").classList.remove('active');
    document.getElementById('letterImg').src = 'assets/img/letter-active.png';
  }
  else if (option == 'letterOption') {
    document.getElementById('letterImg').src = 'assets/img/letter-inactive.png';
    document.getElementById("ltlOption").classList.remove('active');
    document.getElementById('ltlImg').src = "assets/img/ltl-active.png";
    document.getElementById("packageOption").classList.remove('active');
    document.getElementById('packageImg').src = "assets/img/package-active.png";
    document.getElementById("pakOption").classList.remove('active');
    document.getElementById('pakImg').src = "assets/img/pak-active.png";
    document.getElementById("ftlOption").classList.remove('active');
    document.getElementById('ftlImg').src = "assets/img/ftl-active.png";
  }
}

