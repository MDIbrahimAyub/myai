let btn = document.querySelector("button");
let content = document.querySelector(".content");
let voice = document.querySelector(".voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate - 1;
  text_speak.pitche1;
  text_speak.volune = 1;
  window.speechSynthesis.speak(text_speak);
}
function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if ((hours >= 0) & (hours < 12)) {
    speak("Good Morning Sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good afternoon Sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good afternoon Sir");
  } else {
    speak("Good Evening Sir");
  }
}
// window.addEventListener("load", () => {
//   wishMe();
// });

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
};
btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});
function takeCommand(message) {
  btn.style.display = "block";
  voice.style.display = "none";
  if (message.includes("hello")) {
    speak("hello sir,what can i help you?");
  } else if (message.includes("hu r u") || message.includes("who are you")) {
    speak("i am virtual assistant created by Muhammad Ibrahim");
  } else if (message.includes("open youtube")) {
    speak("opening youtube...");
    window.open("https:/youtube.com/", "_blank");
  } else if (message.includes("open goggle")) {
    speak("opening goggle...");
    window.open("https:/goggle.com/", "_blank");
  } else if (message.includes("open facebook")) {
    speak("opening facebook...");
    window.open("https:/facebook.com/", "_blank");
  } else if (message.includes("open instagram")) {
    speak("opening instagram...");
    window.open("https:/instagram.com/", "_blank");
  } else if (message.includes("open linkedin")) {
    speak("opening linkedin...");
    window.open("https:/linkedin.com/", "_blank");
  } else if (message.includes("open whatsapp")) {
    speak("opening whatsapp...");
    window.open("https:/whatsapp.com/", "_blank");
  } else if (message.includes("open calculato")) {
    speak("opening calculato...");
    window.open("calculator://", "_blank");
  } else if (message.includes("what time is it")) {
    let time = new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"}) 
    speak(time)
  }
  else if (message.includes("what is the date")) {
    let date = new Date().toLocaleDateString(undefined,{day:"numeric",month:"short"}) 
    speak(date)
  } else {
    let finalText =
      "this is how i found on internet regardin" + message.replace("max", "");
    speak(finalText);
    window.open(
      `https://www.google.com/search?q= ${message.replace("max", "")}`,
      "_blank"
    );
  }
}
