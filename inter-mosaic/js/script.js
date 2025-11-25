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