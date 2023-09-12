import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function productionSlider() {
  const section = document.querySelector('.production');
  if (!section) return

  const swiper = new Swiper('.production__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: section.querySelector('.swiper-pagination'),
      type: "bullets",
    },
    navigation: {
      nextEl: section.querySelector('.js-next-slide'),
      prevEl: section.querySelector('.js-prev-slide'),
    },
    autoHeight: true,
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      }
    }
  })
}
