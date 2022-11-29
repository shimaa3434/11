// copy menu for moblie

function copyMenu(){
    // copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat')
    var dptPlace = document.querySelector(".departments")
    dptPlace.innerHTML = dptCategory.innerHTML
    // copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav')
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML
    // copy .header-top .wrapper to .thetop

    var topNav = document.querySelector('.header-top .wrapper')
    var theTopNav = document.querySelector('.off-canvas .thetop-nav')
    theTopNav.innerHTML = topNav.innerHTML
}
copyMenu()

// show  mobile menu

const menuButton= document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addclass = document.querySelector('.site')  
menuButton.addEventListener('click', function(){
    addclass.classList.toggle('show-menu')
})
closeButton.addEventListener('click', function(){
    addclass.classList.remove('show-menu')
})
// show sub menu on mobile

const submenu = document.querySelectorAll('.has-child .icon-small')
submenu.forEach((menu) => menu.addEventListener('click', toggle))

function toggle(e){
    e.preventDefault()
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null)
    if(this.closest('.has-child').classList != 'expand')
    this.closest('.has-child').classList.toggle('expand')
}

// slider swiper js
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
   
  });
  

// show search
const searchButtom = document.querySelector('.t-search')
const tClose= document.querySelector('.search-close')
const showClass= document.querySelector('.site')
searchButtom.addEventListener('click', ()=>{
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', ()=>{
    showClass.classList.remove('showsearch')
})

// show dpt menu

const dptButton = document.querySelector('.dpt-cat .dpt-trigger')
const dptClass = document.querySelector('.site')
dptButton.addEventListener('click', ()=>{
    dptClass.classList.toggle('showdpt')
})

// prouct image slider
var thunbnail = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481 : {
            spaceBetween: 32,
        }
    }
   
  });
var proBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: thunbnail
    }
})
  
// stock products bar width percentage

var stocks= document.querySelectorAll('.products .stock')
for (let x=0; x< stocks.length; x++){
    let stock = stocks[x].dataset.stock,
     available = stocks[x].querySelector('.qty-available').innerHTML,
     sold= stocks[x].querySelector('.qty-sold').innerHTML,
    percent = sold*100/stock;

    stocks[x].querySelector('.available').style.width = percent + '%'

}

// show cart on click

const divtoshow= '.mini-cart'
const divpopup= document.querySelector(divtoshow)
const divTrigger= document.querySelector('.cart-trigger')
divTrigger.addEventListener('click', ()=>{
    setTimeout(() => {
        if(!divpopup.classList.contains('show')){
            divpopup.classList.add('show')
        }
    }, 250);
})
document.addEventListener('click', (e)=>{
    const isClosest= e.target.closest(divtoshow)
    if(!isClosest && divpopup.classList.contains('show')){
        divpopup.classList.remove('show')
    }
})

// show modal on load

window.onload = ()=>{
    document.querySelector('.site').classList.toggle('showmodal')
}
document.querySelector('.modalclose').addEventListener('click', ()=>{
    document.querySelector('.site').classList.remove('showmodal')
})

// show backtoup
let toup= document.querySelector('.backtoup')
window.onscroll = ()=> {
    if(this.scrollY >= 500){
        toup.classList.add('show') 
    }else{
        toup.classList.remove('show') 
    }
}
toup.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})

