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
const imgYellow = document.getElementById("img-yellow-in");
const imgRed = document.getElementById("img-red-june");
const imgOrange = document.getElementById("img-orange-june");
const imgOthers = document.getElementById("img-others");

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
        console.log("ok-0")
      }
   }

    if (player && translations['audio-src']) {
      player.src = translations['audio-src'];
      player.load();
      console.log("ok-01")
    }
    if (imgMaio && translations['img-maio']) {
      imgMaio.src = translations['img-maio'];
      console.log("ok-02")
    }
    if (imgAbril && translations['img-abril']) {
      imgAbril.src = translations['img-abril'];
      console.log("ok-03")
    }
    if (abrilVerde && translations['abril-verde-img']) {
      abrilVerde.src = translations['abril-verde-img'];
      console.log("ok-04")
    }
    if (abrilAzul && translations['abril-azul-img']) {
      abrilAzul.src = translations['abril-azul-img'];
      console.log("ok-05")
    }
    if (imgJunho && translations['img-junho']) {
      imgJunho.src = translations['img-junho'];
      console.log("ok-06")
    }
    if (indexAbril && translations['index-img-abril']) {
      indexAbril.src = translations['index-img-abril'];
      console.log("ok-07")
    }
    if (indexMaio && translations['index-img-maio']) {
      indexMaio.src = translations['index-img-maio'];
      console.log("ok-08")
    }

    if (indexJunho && translations['index-img-junho']) {
      indexJunho.src = translations['index-img-junho'];
      console.log("ok-09")
    }
    if(imgYellow && translations['img-yellow-in']){
      imgYellow.src = translations['img-yellow-in'];
      console.log("ok-10")
    }

    if(imgRed && translations['img-red-june']){
      imgRed.src = translations['img-red-june'];
      console.log("ok-11")
    }

    if(imgOrange && translations['img-orange-june']){
      imgOrange.src = translations['img-orange-june'];
      console.log("ok-12")
    }

    if(imgOthers && translations['img-others']){
      imgOthers.src = translations['img-others'];
      console.log("ok-13")
    }
    
  } catch (error) {
    console.error("Falha ao aplicar a tradução:", error);
    console.log("ok-14")
  }
}

function checkAndApplyLanguage() {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  const langToApply = (savedLanguage === 'en') ? 'en' : 'pt';
   setLanguage(langToApply);
   console.log("ok-15")
  }
  
  document.addEventListener('DOMContentLoaded', checkAndApplyLanguage);