const translations = {
  de: {
    nav_features:"Funktionen",nav_about:"Über NEXUS",nav_download:"Download",nav_cta:"Jetzt entdecken",
    eyebrow:"DEINE PRODUKTIVITÄT. NEU GEDACHT.",hero_title:'Mehr Überblick.<br><span>Mehr Möglichkeiten.</span>',
    hero_text:"NEXUS AI vereint Aufgaben, Kalender, Notizen und KI-Unterstützung in einer übersichtlichen Desktop-Anwendung.",hero_cta:"NEXUS AI entdecken",hero_secondary:"Funktionen ansehen",hero_meta:"Windows-Desktop · Erste öffentliche Preview",
    mock_greeting:"DEIN ÜBERBLICK",mock_title:"Guten Tag.",mock_subtitle:"Alles Wichtige an einem Ort.",mock_tasks:"AUFGABEN",mock_open:"offen",mock_notes:"NOTIZEN",mock_saved:"gespeichert",mock_today:"Heute im Fokus",mock_task1:"Projekt planen",mock_task2:"Notizen sortieren",mock_task3:"Wochenziele festlegen",mock_ai:"Dein KI-Assistent",mock_ai_sub:"Bereit, dich zu unterstützen.",
    trust_label:"EIN ZENTRALER ORT FÜR DEINEN ALLTAG",features_eyebrow:"ALLES VERBUNDEN",features_title:'Weniger wechseln.<br><span>Mehr erreichen.</span>',features_text:"Die Werkzeuge, die du täglich brauchst – an einem übersichtlichen Ort.",
    feature_tasks_title:"Aufgaben & Überblick",feature_tasks_text:"Halte deine Aufgaben fest, setze Prioritäten und behalte den nächsten Schritt im Blick.",feature_calendar_title:"Kalender",feature_calendar_text:"Plane Termine und behalte deine Woche im Blick.",feature_notes_title:"Notizen",feature_notes_text:"Sammle Gedanken und wichtige Informationen an einem Platz.",feature_ai_title:"KI-Assistent",feature_ai_text:"Nutze deinen lokalen KI-Assistenten mit Ollama oder konfiguriere einen Cloud-Anbieter.",feature_search_title:"Suche & Organisation",feature_search_text:"Finde Inhalte schneller und bringe Struktur in deine Arbeit.",search_placeholder:"Suchen ...",
    about_eyebrow:"DIE IDEE DAHINTER",about_title:'Ein klarer Kopf<br><span>beginnt mit Klarheit.</span>',about_text:"NEXUS AI entsteht aus einer einfachen Idee: Die täglichen Dinge sollten leichter zu organisieren sein. Wir entwickeln das Produkt Schritt für Schritt weiter – gemeinsam mit Menschen, die es ausprobieren.",signature:"Unabhängiges Softwareprojekt",
    download_eyebrow:"ERSTE ÖFFENTLICHE VERSION",download_title:"Lerne NEXUS AI kennen.",download_text:"Die erste Windows-Preview ist veröffentlicht. Probiere NEXUS AI aus und hilf uns mit deinem Feedback, das Produkt weiterzuentwickeln.",download_cta:"Windows-Version herunterladen",download_note:"Kostenlose Preview · Windows · ZIP-Datei",release_caveat:"Hinweis: Dies ist eine frühe Preview. Bitte sichere wichtige Daten regelmäßig und melde uns mögliche Fehler.",footer_tagline:"Your productivity. Your intelligence.",footer_contact:"Kontakt",footer_note:"Mit Sorgfalt entwickelt.",legal_placeholder:"Impressum und Datenschutz vor Veröffentlichung ergänzen."
  },
  en: {
    nav_features:"Features",nav_about:"About NEXUS",nav_download:"Download",nav_cta:"Explore now",
    eyebrow:"YOUR PRODUCTIVITY. REIMAGINED.",hero_title:'More clarity.<br><span>More possibilities.</span>',
    hero_text:"NEXUS AI brings tasks, calendar, notes and AI assistance together in one clear desktop application.",hero_cta:"Explore NEXUS AI",hero_secondary:"Explore features",hero_meta:"Windows desktop · First public preview",
    mock_greeting:"YOUR OVERVIEW",mock_title:"Good day.",mock_subtitle:"Everything important in one place.",mock_tasks:"TASKS",mock_open:"open",mock_notes:"NOTES",mock_saved:"saved",mock_today:"Today's focus",mock_task1:"Plan the project",mock_task2:"Organize notes",mock_task3:"Set weekly goals",mock_ai:"Your AI assistant",mock_ai_sub:"Ready to help you.",
    trust_label:"ONE PLACE FOR YOUR EVERYDAY WORK",features_eyebrow:"CONNECTED IN ONE PLACE",features_title:'Switch less.<br><span>Accomplish more.</span>',features_text:"The tools you need every day, brought together in one clear workspace.",
    feature_tasks_title:"Tasks & overview",feature_tasks_text:"Capture tasks, set priorities and keep your next step in sight.",feature_calendar_title:"Calendar",feature_calendar_text:"Plan events and keep your week in view.",feature_notes_title:"Notes",feature_notes_text:"Keep ideas and important information in one place.",feature_ai_title:"AI assistant",feature_ai_text:"Use your local AI assistant with Ollama or configure a cloud provider.",feature_search_title:"Search & organization",feature_search_text:"Find information faster and bring structure to your work.",search_placeholder:"Search ...",
    about_eyebrow:"THE IDEA",about_title:'A clearer mind<br><span>starts with clarity.</span>',about_text:"NEXUS AI started with a simple idea: everyday work should be easier to organize. We are improving the product step by step, together with the people who try it.",signature:"Independent software project",
    download_eyebrow:"FIRST PUBLIC VERSION",download_title:"Meet NEXUS AI.",download_text:"The first Windows preview is now available. Try NEXUS AI and help us improve it by sharing your feedback.",download_cta:"Download for Windows",download_note:"Free preview · Windows · ZIP file",release_caveat:"Note: This is an early preview. Please back up important data regularly and report any issues you find.",footer_tagline:"Your productivity. Your intelligence.",footer_contact:"Contact",footer_note:"Made with care.",legal_placeholder:"Add legal notice and privacy policy before public launch."
  }
};
let currentLanguage = "de";
const langButton = document.getElementById("languageToggle");
function setLanguage(language){
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[language][key]) el.innerHTML = translations[language][key];
  });
  langButton.textContent = language === "de" ? "EN" : "DE";
  langButton.setAttribute("aria-label", language === "de" ? "Switch to English" : "Zu Deutsch wechseln");
}
langButton.addEventListener("click",()=>setLanguage(currentLanguage==="de"?"en":"de"));
document.getElementById("year").textContent = new Date().getFullYear();
const menuButton=document.getElementById("mobileMenuButton");
const nav=document.querySelector(".desktop-nav");
menuButton.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded",String(open));
  menuButton.textContent=open?"×":"☰";
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");menuButton.textContent="☰";}));

// Vor Veröffentlichung die echte GitHub-Release-URL eintragen.
const DOWNLOAD_URL = "https://github.com/Yarkeix/NEXUS-AI-Downloads/releases/download/v.1.0.0/NEXUS_AI_1.0.0_Windows.zip";
const downloadButton=document.getElementById("downloadButton");
downloadButton.addEventListener("click",event=>{
  if(DOWNLOAD_URL.startsWith("ADD_")){
    event.preventDefault();
    alert(currentLanguage==="de" ? "Der Download-Link wird vor dem Website-Launch eingetragen." : "The download link will be added before the website launch.");
  } else {
    downloadButton.href=DOWNLOAD_URL;
    downloadButton.target="_blank";
    downloadButton.rel="noopener noreferrer";
  }
});
