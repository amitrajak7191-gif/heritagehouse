* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #0d0d0d;
  color: #ffffff;
}

.container {
  width: min(1180px, 90%);
  margin: 0 auto;
}

/* HEADER */

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.72);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(18px);
}

.nav {
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.logo h2 {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 500;
}

.logo p {
  margin-top: 5px;
  color: #c8a86a;
  font-size: 9px;
  letter-spacing: 3px;
}

nav {
  display: flex;
  gap: 30px;
}

nav a {
  color: #f4f4f4;
  text-decoration: none;
  font-size: 13px;
  transition: 0.3s ease;
}

nav a:hover {
  color: #c8a86a;
}

.btn {
  background: #c8a86a;
  color: #111;
  text-decoration: none;
  padding: 13px 20px;
  font-size: 12px;
  letter-spacing: 0.8px;
  transition: 0.3s ease;
}

.btn:hover {
  background: #e1c58e;
}

/* HERO */

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 88px;
  background:
    radial-gradient(circle at 75% 25%, rgba(200,168,106,0.18), transparent 28%),
    linear-gradient(90deg, rgba(0,0,0,0.88), rgba(0,0,0,0.60), rgba(0,0,0,0.35)),
    #101010;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  width: 520px;
  height: 520px;
  border: 1px solid rgba(200,168,106,0.16);
  border-radius: 50%;
  right: -170px;
  top: 12%;
}

.hero::after {
  content: "";
  position: absolute;
  width: 280px;
  height: 280px;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 50%;
  left: -90px;
  bottom: 5%;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0,0,0,0.72) 0%,
    rgba(0,0,0,0.42) 55%,
    rgba(0,0,0,0.14) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  width: min(1180px, 90%);
  margin: 0 auto;
  padding: 120px 0 100px;
}

.eyebrow {
  color: #c8a86a;
  font-size: 12px;
  letter-spacing: 4px;
  margin-bottom: 28px;
}

.hero h1 {
  max-width: 900px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(54px, 7vw, 96px);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -2px;
}

.hero h1 span {
  color: #c8a86a;
}

.hero-content > p:not(.eyebrow) {
  margin-top: 32px;
  max-width: 640px;
  color: #d0d0d0;
  font-size: 17px;
  line-height: 1.8;
}

.buttons {
  display: flex;
  gap: 16px;
  margin-top: 38px;
}

.gold,
.outline {
  display: inline-block;
  padding: 15px 24px;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 1px;
  transition: 0.3s ease;
}

.gold {
  background: #c8a86a;
  color: #111;
}

.gold:hover {
  background: #e1c58e;
  transform: translateY(-2px);
}

.outline {
  border: 1px solid rgba(255,255,255,0.35);
  color: #fff;
}

.outline:hover {
  border-color: #c8a86a;
  color: #c8a86a;
}

/* MOBILE */

@media (max-width: 900px) {

  nav,
  .btn {
    display: none;
  }

  .nav {
    min-height: 74px;
  }

  .hero {
    padding-top: 74px;
  }

  .hero-content {
    padding: 120px 0 90px;
  }

  .hero h1 {
    font-size: clamp(44px, 11vw, 68px);
    line-height: 1.02;
  }

  .hero-content > p:not(.eyebrow) {
    font-size: 15px;
    line-height: 1.7;
  }

  .buttons {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 520px) {

  .logo h2 {
    font-size: 16px;
  }

  .logo p {
    font-size: 8px;
    letter-spacing: 2px;
  }

  .eyebrow {
    font-size: 10px;
    letter-spacing: 2.5px;
  }

  .hero h1 {
    letter-spacing: -1px;
  }

  .buttons,
  .gold,
  .outline {
    width: 100%;
  }

  .gold,
  .outline {
    text-align: center;
  }
}
