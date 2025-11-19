openMenu.addEventListener('click', () => {
  menu.style.display = 'flex'

  menu.style.right = (menu.offsetWidth * -1) + 'px'

  openMenu.style.display = 'none'

  setTimeout(() => {
    menu.style.opacity = '1'
    menu.style.right = '0'
  }, 10)

})

closeMenu.addEventListener('click', () => {
  menu.style.opacity = '0'

  menu.style.left = (menu.offsetWidth * -1) + 'px'

  setTimeout(() => {
    menu.removeAttribute('style')
    openMenu.removeAttribute('style')
  }, 200)

})

const changeImgButton = document.querySelectorAll("[data-change-img-button]")

changeImgButton.forEach(button => {
  button.addEventListener("click", () => {
    const imgFull = document.querySelector(".imgFull")
    const images = imgFull.querySelectorAll(".img-display")
    const activeImg = imgFull.querySelector("[data-active]")
    let indexActiveImg = Array.from(images).indexOf(activeImg)

    const indicators = document.querySelector(".indicators")
    const indicator = indicators.querySelectorAll(".indicator");
    const indicatorActive = indicators.querySelector("[data-active]");
    let indexActiveIndicator = Array.from(indicator).indexOf(indicatorActive);

    let timer;

    // indicator index
    indexActiveIndicator = button.dataset.changeImgButton === "next" ? (
      indexActiveIndicator + 1
    ) : (
      indexActiveIndicator - 1
    )

    if (indexActiveIndicator >= indicator.length) {
      indexActiveIndicator = 0
    }

    if (indexActiveIndicator < 0) {
      indexActiveIndicator = indicator.length - 1
    }
    //images index
    indexActiveImg = button.dataset.changeImgButton === "next" ? (
      indexActiveImg + 1
    ) : (
      indexActiveImg - 1
    )

    if (indexActiveImg >= images.length) {
      indexActiveImg = 0
    }

    if (indexActiveImg < 0) {
      indexActiveImg = images.length - 1
    }

    activeImg.removeAttribute("data-active")
    images[indexActiveImg].dataset.active = true

    indicatorActive.removeAttribute("data-active")
    indicator[indexActiveIndicator].dataset.active = true
  })
})

const navLinks = document.querySelectorAll('aside a[data-nav-target]');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetIndex = parseInt(link.dataset.navTarget);

    mudarImagemParaIndice(targetIndex);
  });
});

const LANGUAGE_KEY = 'siteLanguage';
const player = document.getElementById("player");

/**
  @param {string} lang 
 */
async function setLanguage(lang) {
  localStorage.setItem(LANGUAGE_KEY, lang);
  const filePath = `js/data/translation/${lang}.json`;

  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Erro ao carregar o arquivo de tradução: ${response.statusText}`);
    }
    const translations = await response.json();

    for (const id in translations) {
      const element = document.getElementById(id);
      const translatedText = translations[id];

      if (element && translatedText) {
        element.innerHTML = translatedText;
      }
    }

    if (player && translations['audio-src']) {
      player.src = translations['audio-src'];
      player.load();
    }

  } catch (error) {
    console.error("Falha ao aplicar a tradução:", error);
  }
}

function checkAndApplyLanguage() {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  const langToApply = (savedLanguage === 'en') ? 'en' : 'pt';

  setLanguage(langToApply);
}

document.addEventListener('DOMContentLoaded', checkAndApplyLanguage);


