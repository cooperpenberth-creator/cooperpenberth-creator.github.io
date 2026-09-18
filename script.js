:root {
  --bg: #fbfbf9;
  --surface: #ffffff;
  --text: #171a1d;
  --muted: #687078;
  --line: #dfe3e2;
  --accent: #244f45;
  --accent-soft: #eaf0ed;
  --max: 920px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);

  font-family:
    Inter,
    ui-sans-serif,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Helvetica,
    Arial,
    sans-serif;

  font-size: 16px;
  line-height: 1.7;

  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
}


/* =========================
   NAVIGATION
========================= */

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;

  background: rgba(251, 251, 249, 0.92);

  backdrop-filter: blur(12px);

  border-bottom: 1px solid transparent;

  transition: border-color 0.2s ease;
}

.site-header.scrolled {
  border-color: var(--line);
}

.nav-wrap {
  max-width: var(--max);

  margin: 0 auto;

  padding: 18px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wordmark {
  text-decoration: none;
  font-weight: 750;
  letter-spacing: -0.03em;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a,
.hero-links a,
.site-footer a {
  text-decoration: none;

  color: var(--muted);

  font-size: 14px;

  transition: color 0.18s ease;
}

.nav-links a:hover,
.nav-links a.active,
.hero-links a:hover,
.site-footer a:hover {
  color: var(--accent);
}

.nav-toggle {
  display: none;
}


/* =========================
   MAIN PAGE
========================= */

.page-shell {
  max-width: var(--max);

  margin: 0 auto;

  padding: 0 24px;
}


/* =========================
   HERO
========================= */

.hero {
  min-height: 520px;

  padding: 110px 0 90px;

  display: grid;

  grid-template-columns: 1fr 190px;

  gap: 70px;

  align-items: center;

  border-bottom: 1px solid var(--line);
}

.eyebrow {
  margin: 0 0 12px;

  color: var(--accent);

  text-transform: uppercase;

  letter-spacing: 0.14em;

  font-size: 12px;

  font-weight: 700;
}

h1 {
  margin: 0;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: clamp(48px, 7vw, 72px);

  line-height: 1.02;

  letter-spacing: -0.045em;

  font-weight: 500;
}

.hero-role {
  margin: 18px 0 0;

  font-size: 19px;

  color: #343a3e;
}

.hero-intro {
  max-width: 620px;

  margin: 20px 0 0;

  color: var(--muted);

  font-size: 17px;
}

.hero-links {
  margin-top: 28px;

  display: flex;

  gap: 22px;

  flex-wrap: wrap;
}

.hero-links a {
  color: var(--accent);

  font-weight: 650;

  border-bottom: 1px solid transparent;
}

.hero-links a:hover {
  border-color: var(--accent);
}


/* =========================
   PROFILE PHOTO
========================= */

.portrait-wrap {
  align-self: start;

  margin-top: 4px;
}

.portrait {
  width: 180px;
  height: 180px;

  object-fit: cover;

  border-radius: 50%;

  border: 1px solid var(--line);

  padding: 5px;

  background: var(--surface);

  filter: saturate(0.9);

  transition: transform 0.25s ease;
}

.portrait:hover {
  transform: translateY(-2px);
}


/* =========================
   SECTIONS
========================= */

.section {
  display: grid;

  grid-template-columns: 190px 1fr;

  gap: 50px;

  padding: 76px 0;

  border-bottom: 1px solid var(--line);

  scroll-margin-top: 72px;
}

.section-label {
  color: var(--muted);

  font-size: 12px;

  font-weight: 750;

  text-transform: uppercase;

  letter-spacing: 0.12em;

  padding-top: 4px;
}

.prose p {
  margin-top: 0;

  font-size: 18px;
}


/* =========================
   EXPERIENCE ENTRIES
========================= */

.entry {
  padding: 0 0 38px;

  margin: 0 0 38px;

  border-bottom: 1px solid var(--line);
}

.entry:last-child {
  border-bottom: 0;

  padding-bottom: 0;

  margin-bottom: 0;
}

.entry-head {
  display: flex;

  justify-content: space-between;

  gap: 24px;

  align-items: baseline;
}

h2 {
  margin: 0;

  font-size: 19px;

  line-height: 1.35;

  letter-spacing: -0.015em;
}

.entry-org {
  margin: 5px 0 0;

  color: var(--muted);

  font-size: 14px;
}

.entry-date {
  margin: 0;

  color: var(--muted);

  font-size: 13px;

  white-space: nowrap;
}

.entry > p:not(.entry-org):not(.entry-date) {
  color: #454b50;
}

.tags {
  color: var(--accent) !important;

  font-size: 13px;

  font-weight: 600;
}


/* =========================
   EDUCATION
========================= */

.education-entry p {
  margin: 8px 0;
}


/* =========================
   LEADERSHIP
========================= */

.simple-list {
  border-top: 1px solid var(--line);
}

.list-row {
  display: flex;

  justify-content: space-between;

  gap: 24px;

  padding: 18px 0;

  border-bottom: 1px solid var(--line);

  font-size: 14px;
}

.list-row div {
  display: flex;

  flex-direction: column;
}

.list-row span {
  color: var(--muted);
}


/* =========================
   HONORS + SKILLS
========================= */

.split-content {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 48px;
}

.split-content p {
  color: #454b50;
}

.subhead {
  margin-top: 30px;
}


/* =========================
   CONTACT
========================= */

.contact h2 {
  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 34px;

  font-weight: 500;
}

.contact p {
  color: var(--muted);
}

.contact-links {
  display: flex;

  flex-direction: column;

  align-items: flex-start;

  gap: 10px;

  margin-top: 24px;
}

.text-button {
  text-decoration: none;

  color: var(--accent);

  border-bottom: 1px solid #a9bbb5;

  transition:
    border-color 0.18s ease,
    transform 0.18s ease;
}

.text-button:hover {
  border-color: var(--accent);

  transform: translateX(2px);
}


/* =========================
   FOOTER
========================= */

.site-footer {
  max-width: var(--max);

  margin: 0 auto;

  padding: 28px 24px 44px;

  display: flex;

  justify-content: space-between;

  color: var(--muted);

  font-size: 13px;
}

.site-footer p {
  margin: 0;
}


/* =========================
   ANIMATION
========================= */

.reveal {
  opacity: 0;

  transform: translateY(10px);

  transition:
    opacity 0.55s ease,
    transform 0.55s ease;
}

.reveal.visible {
  opacity: 1;

  transform: none;
}


/* Accessibility */

@media (prefers-reduced-motion: reduce) {

  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition: none !important;
  }

  .reveal {
    opacity: 1;

    transform: none;
  }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 720px) {

  .nav-toggle {
    display: block;

    border: 0;

    background: transparent;

    font: inherit;

    color: var(--muted);

    cursor: pointer;
  }

  .nav-links {
    position: absolute;

    left: 0;
    right: 0;
    top: 61px;

    display: none;

    flex-direction: column;

    gap: 0;

    padding: 12px 24px 18px;

    background: var(--bg);

    border-bottom: 1px solid var(--line);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    padding: 8px 0;
  }

  .hero {
    grid-template-columns: 1fr;

    gap: 38px;

    padding: 70px 0 64px;
  }

  .portrait-wrap {
    grid-row: 1;

    margin: 0;
  }

  .portrait {
    width: 132px;

    height: 132px;
  }

  .section {
    grid-template-columns: 1fr;

    gap: 22px;

    padding: 56px 0;
  }

  .entry-head,
  .list-row {
    align-items: flex-start;

    flex-direction: column;

    gap: 5px;
  }

  .entry-date {
    white-space: normal;
  }

  .split-content {
    grid-template-columns: 1fr;

    gap: 24px;
  }
}
