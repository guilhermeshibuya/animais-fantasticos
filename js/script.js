import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion.js";
import Modal from "./modules/modal.js";
import TabNav from "./modules/tabnav.js";
import Tooltip from "./modules/tooltip.js";
import ScrollAnimation from "./modules/scroll-animation.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBtc from "./modules/fetch-btc.js";

const smoothScroll = new SmoothScroll("[data-anime='smooth'] a[href^='#']");
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchAnimais("../api/animais.json", ".numeros-grid");

const scrollAnimation = new ScrollAnimation('[data-anime="scroll"]');
scrollAnimation.init();

const dropdownMenu = new DropdownMenu();
dropdownMenu.init("[data-dropdown]", ["touchstart", "click"]);

initMenuMobile();
initFuncionamento();

fetchBtc("https://blockchain.info/ticker", ".btc-preco");
