function scroller() {
    let scroller = document.querySelector(".scroller");
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    window.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop;
      scroller.style.width = `${(scrollTop / height) * 100}%`;
    });
  }
  
scroller()  

let productAction = document.querySelector('.product-action')
console.log(productAction)
let dropdownMenu  = document.querySelector('.dropdown-menu ')

productAction.onclick = function(){



  if(dropdownMenu.style.display == 'block'){
    dropdownMenu.style.display = 'none'
    dropdownMenu.style.opacity = '0'
    productAction.innerHTML = '<i class="fa-solid fa-angle-right"></i>';

  }
  else{
    dropdownMenu.style.display = 'block'
    dropdownMenu.style.opacity = '1'
    productAction.innerHTML = '<i class="fa-solid fa-angle-down"></i>';


  }



}
const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,
  // autoplay: {
  //   delay: 1000 
  // },
speed : 2000,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // limitRotation : true,
  // slideShadows : true,
  // rotate : 100,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 480p
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
    }
    ,
    991 : {
      slidesPerView: 4,

    }
  }


});