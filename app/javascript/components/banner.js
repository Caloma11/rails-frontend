import Typed from 'typed.js';
import swal from 'sweetalert';


function bindSweetAlertButtonDemo() {
  const swalButton = document.getElementById('sweet-alert-demo');
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal({
        title: "Learn to dance",
        text: "This is a great alert, isn't it?",
        icon: "success"
      });
    });
  }
}

export { bindSweetAlertButtonDemo };	



function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Booyah", "Learn to code"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };