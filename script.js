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
    textCompany1.textContent = data[attr].titlecompany;
    textDesc.textContent = data[attr].description;
    textIntro.textContent = data[attr].introdescription;
    textUx.textContent = data[attr].uxdescription;
    textPassion.textContent = data[attr].passiondescription;
    textAni.textContent = data[attr].animationdescription;
    textCompany.textContent = data[attr].companydescription;
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
    titlecompany: "05.02 ✦ Company site",
    description:
      "I am a 20-year-old girl who recently moved to Denmark to study Multimedia Design. My goal is to become a web designer in the future, combining my love for creativity and technology. In my free time, I enjoy gaming and drawing, it’s a great way to relax and express myself. I also went to art school to improve my drawing skills, which has really helped me grow as an artist.",
    introdescription:
      "First project in the 1st semester was really an interesting entry into web development. It introduced the basics of HTML and CSS, which allowed us create and style pages. We even learned how to set our domain, giving real experience of launching a website. This project formed the basis of our knowledge of web technologies and the process of getting a website online.",
    uxdescription:
      "In this particular project, we have implemented almost everything that we learned from the previous one. We worked mainly on designing with Figma, which was a new technique for all of us. I relied on the experience I had acquired from the last project and created something I was really excited to work on. Moreover, I also used JavaScript for the first time in accomplishing the desired functionality that I envisioned since it was not something we had learned yet.",
    passiondescription:
      "We partnered up in pairs to create a video using Adobe Premiere where we learned the basics of video editing and applied various effects to make it more appealing. Upon completion of the video, we designed a website focused on the individual whom we interviewed, wherein they shared their passion and the story for a larger audience. This project helped us develop technical video production skills, but also those creative storytelling abilities found through web design.",
    animationdescription:
      "Through this project, we came to learn how to animate upon gaining a deeper understanding of JavaScript which a big part was used in creating a web-based game. We also developed some skills in generating ideas and sharing them among people and taking feedback for the further improvement of our work.",
    companydescription:
      "Interviewing and redesigning a company that we selected as a group of four was our last project for this initial semester. Each member of the team was assigned to create their page, and mine happens to be about what educational products are offered by this company. The site applied everything we had learned during the entire project, using design, content creation, and collaboration to develop a well-structured and engaging website.",
  },

  swedish: {
    title: "Vaelkomna",
    title2: "Jag heter...",
    titleabout: "Om",
    titlejourney: "Resa",
    titleschoolfirst: "Sturegymnasiet Bild och form",
    titleschoolsecond: "Köpenhamns Handelsakademi: KEA",
    titleexperiences: "Erfarenheter",
    titlesoftware: "Programvara",
    titlecontacts: "Kontakter",
    titlecompany: "05.02 ✦ Verksamhet webbplats",
    description:
      "Jag är en 20-årig tjej som nyligen flyttade till Danmark för att studera multimediadesign. Mitt mål är att bli webbdesigner i framtiden genom att kombinera min kärlek till kreativitet och teknik. På min fritid tycker jag om att spela och rita, det är ett bra sätt att koppla av och uttrycka mig. Jag gick också på konstskola för att förbättra mina teckningsfärdigheter, vilket verkligen har hjälpt mig att växa som konstnär.",
    introdescription:
      "Första projektet under den första terminen var verkligen en intressant introduktion till webbutveckling. Det introducerade grunderna i HTML och CSS, vilket gjorde att vi kunde skapa och designa sidor. Vi lärde oss till och med hur man sätter upp en domän, vilket gav oss verklig erfarenhet av att lansera en webbplats. Detta projekt utgjorde grunden för vår kunskap om webbteknologier och processen att få en webbplats online.",
    uxdescription:
      "I det här specifika projektet har vi implementerat nästan allt vi lärde oss från det föregående. Vi arbetade främst med design i Figma, vilket var en ny teknik för oss alla. Jag förlitade mig på den erfarenhet jag hade fått från det förra projektet och skapade något jag verkligen var entusiastisk över att arbeta med. Dessutom använde jag JavaScript för första gången för att uppnå den önskade funktionaliteten som jag hade föreställt mig, eftersom det inte var något vi hade lärt oss ännu.",
    passiondescription:
      "Vi parades ihop i par för att skapa en video med Adobe Premiere, där vi lärde oss grunderna i videoredigering och tillämpade olika effekter för att göra den mer tilltalande. Efter att ha slutfört videon designade vi en webbplats med fokus på den person vi intervjuade, där de delade med sig av sin passion och sin berättelse till en större publik. Detta projekt hjälpte oss att utveckla tekniska färdigheter inom videoproduktion, men också de kreativa berättarkunskaper som hittas genom webbdesign.",
    animationdescription:
      "Genom det här projektet lärde vi oss hur man animerar genom att fördjupa vår förståelse för JavaScript, vilket till stor del användes för att skapa ett webbaserat spel. Vi utvecklade också färdigheter i att generera idéer och dela dem med andra samt att ta emot feedback för att ytterligare förbättra vårt arbete.",
    companydescription:
      "Att intervjua och omdesigna ett företag som vi valde som en grupp på fyra var vårt sista projekt för denna första termin. Varje medlem i teamet fick i uppgift att skapa sin sida, och min handlade om vilka utbildningsprodukter som erbjuds av detta företag. Webbplatsen tillämpade allt vi hade lärt oss under hela projektet, med hjälp av design, innehållsskapande och samarbete för att utveckla en välstrukturerad och engagerande webbplats.",
  },

  danish: {
    title: "Velkommen",
    title2: "Mit navn er...",
    titleabout: "Om",
    titlejourney: "Rejse",
    titleschoolfirst: "Sturegymnasiet Billed og form",
    titleschoolsecond: "Københavns Erhvervsakademi: KEA",
    titleexperiences: "Oplevelser",
    titlesoftware: "Software",
    titlecontacts: "Kontakte",
    titlecompany: "05.02 ✦ Virksomhedssite",
    description:
      "Jag är en 20-årig tjej som nyligen flyttade till Danmark för att studera multimediadesign. Mitt mål är att bli webbdesigner i framtiden genom att kombinera min kärlek till kreativitet och teknik. På min fritid tycker jag om att spela och rita, det är ett bra sätt att koppla av och uttrycka mig. Jag gick också på konstskola för att förbättra mina teckningsfärdigheter, vilket verkligen har hjälpt mig att växa som konstnär.",
    introdescription:
      "Første projekt i 1. semester var virkelig en interessant introduktion til webudvikling. Det introducerede grundlæggende HTML og CSS, som gjorde det muligt for os at oprette og style sider. Vi lærte endda, hvordan man opsætter vores egen domæne, hvilket gav os reel erfaring med at lancere en hjemmeside. Dette projekt dannede grundlaget for vores viden om webteknologier og processen med at få en hjemmeside online.",
    uxdescription:
      "I dette specifikke projekt har vi implementeret næsten alt, hvad vi lærte fra det foregående. Vi arbejdede hovedsageligt med design i Figma, hvilket var en ny teknik for os alle. Jeg byggede på den erfaring, jeg havde opnået fra det sidste projekt, og skabte noget, jeg virkelig var begejstret for at arbejde på. Derudover brugte jeg også JavaScript for første gang for at opnå den ønskede funktionalitet, som jeg havde forestillet mig, da det ikke var noget, vi havde lært endnu.",
    passiondescription:
      "Vi blev parret op i par for at skabe en video med Adobe Premiere, hvor vi lærte grundlæggende videoredigering og anvendte forskellige effekter for at gøre den mere tiltalende. Efter at have færdiggjort videoen designede vi en hjemmeside med fokus på den person, vi interviewede, hvor de delte deres passion og historie med et større publikum. Dette projekt hjalp os med at udvikle tekniske færdigheder inden for videoproduktion, men også de kreative fortælleevner, der findes gennem webdesign.",
    animationdescription:
      "Gennem dette projekt lærte vi, hvordan man animerer ved at uddybe vores forståelse af JavaScript, som i høj grad blev brugt til at skabe et webbaseret spil. Vi udviklede også færdigheder i at generere idéer og dele dem med andre samt modtage feedback for yderligere at forbedre vores arbejde.",
    companydescription:
      "At interviewe og redesigne en virksomhed, vi valgte som en gruppe på fire, var vores afsluttende projekt for dette første semester. Hvert medlem af teamet fik til opgave at oprette deres side, og min handlede om de pædagogiske produkter, som denne virksomhed tilbyder. Hjemmesiden anvendte alt, hvad vi havde lært gennem hele projektet, ved at bruge design, indholdsskabelse og samarbejde til at udvikle en velstruktureret og engagerende hjemmeside.",
  },
};
