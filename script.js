import textContent from "./text-content.json" with {type: 'json'};

const langSec = document.querySelector(".languageSection");
const buttons = document.querySelectorAll(".change-language-btn");
const textTitle = document.querySelector(".title");
const textTitle2 = document.querySelector(".title2");
const textAbout = document.querySelector(".titleabout");
const textJourney = document.querySelector(".titlejourney");
const textSchool = document.querySelector(".titleschoolfirst");
const textSchool2 = document.querySelector(".titleschoolsecond");
const textExperience = document.querySelector(".titleexperiences");
const textSoftware = document.querySelector(".titlesoftware");
const textContact = document.querySelector(".titlecontacts");
const textDesc = document.querySelector(".description");
const textIntro = document.querySelector(".introdescription");
const textUx = document.querySelector(".uxdescription");
const textPassion = document.querySelector(".passiondescription");
const textAni = document.querySelector(".animationdescription");
const textCompany = document.querySelector(".companydescription");
const textCompany1 = document.querySelector(".titlecompany");

function translatePageContent(language){
  buttons.forEach(button => {
    if (button.dataset.language === language) {
      if (langSec.querySelector(".active")){
        langSec.querySelector(".active").classList.remove("active");
      }
      button.classList.add("active");
    }
  });
  textTitle.textContent = textContent[language].title;
  textTitle2.textContent = textContent[language].title2;
  textAbout.textContent = textContent[language].titleabout;
  textJourney.textContent = textContent[language].titlejourney;
  textSchool.textContent = textContent[language].titleschoolfirst;
  textSchool2.textContent = textContent[language].titleschoolsecond;
  textExperience.textContent = textContent[language].titleexperiences;
  textSoftware.textContent = textContent[language].titlesoftware;
  textContact.textContent = textContent[language].titlecontacts;
  textCompany1.textContent = textContent[language].titlecompany;
  textDesc.textContent = textContent[language].description;
  textIntro.textContent = textContent[language].introdescription;
  textUx.textContent = textContent[language].uxdescription;
  textPassion.textContent = textContent[language].passiondescription;
  textAni.textContent = textContent[language].animationdescription;
  textCompany.textContent = textContent[language].companydescription;
}

const supportedLanguages = ['da', 'sv', 'en']
const browsersLanguage = navigator.language;


function defaultToBrowsersLanguage(language){
  if (supportedLanguages.includes(browsersLanguage)){
    translatePageContent(language)
  } else {
    // Fall back to english
    translatePageContent('en')
  }
}

defaultToBrowsersLanguage(browsersLanguage)



buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const attr = button.dataset.language
    translatePageContent(attr)
  });
});
