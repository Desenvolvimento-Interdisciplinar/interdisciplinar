const LANGUAGE_KEY = 'siteLanguage';
const player = document.getElementById("player");
const imgMaio = document.getElementById("img-maio");
const imgAbril = document.getElementById("img-abril");
const abrilVerde = document.getElementById("abril-verde-img");
const abrilAzul = document.getElementById("abril-azul-img");
const imgJunho = document.getElementById("img-junho");
const indexAbril = document.getElementById("index-img-abril");
const indexMaio = document.getElementById("index-img-maio");
const indexJunho = document.getElementById("index-img-junho");

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
    if (imgMaio && translations['img-maio']) {
      imgMaio.src = translations['img-maio'];
    }
    if (imgAbril && translations['img-abril']) {
      imgAbril.src = translations['img-abril'];
    }
    if (abrilVerde && translations['abril-verde-img']) {
      abrilVerde.src = translations['abril-verde-img'];
    }
    if (abrilAzul && translations['abril-azul-img']) {
      abrilAzul.src = translations['abril-azul-img'];
    }
    if (imgJunho && translations['img-junho']) {
      imgJunho.src = translations['img-junho'];
    }

    if (indexAbril && translations['index-img-abril']) {
      indexAbril.src = translations['index-img-abril'];
    }

    if (indexMaio && translations['index-img-maio']) {
      indexMaio.src = translations['index-img-maio'];
    }

    if (indexJunho && translations['index-img-junho']) {
      indexJunho.src = translations['index-img-junho'];
    }

  } catch (error) {
    console.error("Falha ao aplicar a tradução:", error);
  }
}
function open(){
  document.getElementById.style.display = "block";
}
function checkAndApplyLanguage() {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  const langToApply = (savedLanguage === 'en') ? 'en' : 'pt';

  setLanguage(langToApply);
}

document.addEventListener('DOMContentLoaded', checkAndApplyLanguage);