import { setProgrammaticScrolling } from "../context/Context";

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  // Tell the IntersectionObserver to pause so the click highlight doesn't flicker
  setProgrammaticScrolling(true);

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${sectionId}`);

  // smooth-scroll typically finishes within ~700 ms; we clear the flag
  // generously at 900 ms so the observer never fights the animation.
  setTimeout(() => {
    setProgrammaticScrolling(false);
  }, 900);
}
