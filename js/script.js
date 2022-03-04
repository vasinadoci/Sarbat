$('.wrapper').addClass('loaded');

//ibg
function ibg() {
   let elements = document.querySelectorAll('.ibg');
   elements.forEach(function (item, index) {
      item = item.querySelector('img');
      if (item.src.length > 0) {
         elements[index].style.backgroundImage = "url('" + item.src + "')";
      }
   });
}
ibg();

//menu-burger
$('.icon-menu').click(function (event) {
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   //$('body').toggleClass('lock');
})

//slider
$(document).ready(function () {
   let position = 0;
   const slidesToShow = 2;
   const slidesToScroll = 1;
   const container = $('.sliders-container');
   const track = $('.sliders-track');
   const item = $('.slider-item')
   const btnPrev = $('.prev');
   const btnNext = $('.next');

   const itemsCount = item.length;
   const itemWidth = container.width() / slidesToShow;
   const movePosition = slidesToScroll * itemWidth;

   item.each(function (index, item) {
      $(item).css({
         minWidth: itemWidth,
      });
   });



   btnPrev.click(function () {
      position += movePosition;


      setPosition();
      checkBtns();
   });

   btnNext.click(function () {
      position -= movePosition;
      setPosition();
      checkBtns();
   });


   const setPosition = () => {
      track.css({
         transform: `translateX(${position}px)`
      });
   };
   ////////////не работает этот код
   const checkBtns = () => {
      btnNext.prop('disabled', position === 0);
      btnPrev.prop(
         'disabled',
         position <= -(itemsCount - slidesToShow) * itemWidth
      );
   };

   checkBtns();
   //не работает
})


