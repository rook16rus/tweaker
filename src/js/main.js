// eslint-disable-next-line import/no-extraneous-dependencies
/*import 'focus-visible';*/
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import './helpers/lazyload';

import detectTouch from './helpers/detectTouch';
import setScrollbarWidth from './helpers/setScrollbarWidth';
import anchorLinks from './helpers/anchorLinks';

import initSliders from "./modules/initSliders";
import fancybox from "./helpers/fancybox";
import validation from "./helpers/validation";
import masks from "./helpers/masks";
import yandexMap from "./helpers/yandexMap";
import fileInputs from "./helpers/fileInputs";
import customSelects from "./helpers/customSelects";
import accordions from "./helpers/accordions";
import header from "./helpers/header";
import tabs from "./helpers/tabs";
import productionSlider from "./helpers/productionSlider";

documenReady(() => {
  window.project_API = {
    tabs: []
  };

  lazyIMages();
  initModal();
  initSliders();

  detectTouch();
  setScrollbarWidth();
  anchorLinks();
  validation();
  masks();
  fancybox();
  yandexMap();
  fileInputs();
  customSelects();
  accordions();
  header();
  tabs();
  productionSlider()
});

document.fonts.ready.then((res) => {

})

window.addEventListener('load', function () {
  document.body.classList.add('loaded');

  setTimeout(() => {
    document.body.classList.add('animatable')
  }, 300);
});

window.addEventListener('resize', () => {

})
