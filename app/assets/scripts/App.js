import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".services"), 75);
new RevealOnScroll(document.querySelectorAll(".projects"), 60);
new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
