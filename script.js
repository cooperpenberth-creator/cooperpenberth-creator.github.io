"use strict";

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const toggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".nav-links");

if (toggle && navigation) {
  const setOpen = (open) => {
    navigation.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia("(max-width: 720px)").addEventListener("change", () => setOpen(false));
}

const header = document.querySelector(".site-header");
if (header) {
  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 0);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}
