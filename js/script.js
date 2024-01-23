import SmoothScroll from "./modules/smooth-scroll.js";
import initScrollAnimation from "./modules/scroll-animation.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBtc from "./modules/fetch-btc.js";

const smoothScroll = new SmoothScroll("[data-anime='smooth'] a[href^='#']");
smoothScroll.init();

initTabNav();
initAccordion();

initScrollAnimation();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBtc();
