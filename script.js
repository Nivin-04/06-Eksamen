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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    langSec.querySelector(".active").classList.remove("active");
    button.classList.add("active");

    const attr = button.getAttribute("language");

    textTitle.textContent = data[attr].title;
    textTitle2.textContent = data[attr].title2;
    textAbout.textContent = data[attr].titleabout;
    textJourney.textContent = data[attr].titlejourney;
    textSchool.textContent = data[attr].titleschoolfirst;
    textSchool2.textContent = data[attr].titleschoolsecond;
    textExperience.textContent = data[attr].titleexperiences;
    textSoftware.textContent = data[attr].titlesoftware;
    textContact.textContent = data[attr].titlecontacts;
    textDesc.textContent = data[attr].description;
  });
});

const data = {
  english: {
    title: "Welcome",
    title2: "My name is...",
    titleabout: "About",
    titlejourney: "Journey",
    titleschoolfirst: "Sturegymnasiet Image and form",
    titleschoolsecond: "Copenhagen Business Academy: KEA",
    titleexperiences: "Experiences",
    titlesoftware: "Software",
    titlecontacts: "Contacts",
    description:
      "I am a 20-year-old girl who recently moved to Denmark to study Multimedia Design. My goal is to become a web designer in the future, combining my love for creativity and technology. In my free time, I enjoy gaming and drawing, it’s a great way to relax and express myself. I also went to art school to improve my drawing skills, which has really helped me grow as an artist.",
  },

  swedish: {
    title: "Välkomna",
    title2: "Jag heter...",
    titleabout: "Om",
    titlejourney: "Resa",
    titleschoolfirst: "Sturegymnasiet Bild och form",
    titleschoolsecond: "Köpenhamns Handelsakademi: KEA",
    titleexperiences: "Erfarenheter",
    titlesoftware: "Programvara",
    titlecontacts: "Kontakter",
    description:
      "Jag är en 20-årig tjej som nyligen flyttade till Danmark för att studera multimediadesign. Mitt mål är att bli webbdesigner i framtiden genom att kombinera min kärlek till kreativitet och teknik. På min fritid tycker jag om att spela och rita, det är ett bra sätt att koppla av och uttrycka mig. Jag gick också på konstskola för att förbättra mina teckningsfärdigheter, vilket verkligen har hjälpt mig att växa som konstnär.",
  },
};
