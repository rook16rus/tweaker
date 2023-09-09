export default function header() {
  const header = document.querySelector('.header');
  const body = document.body;

  body.style.setProperty('--header-height', header.clientHeight + "px");
}
