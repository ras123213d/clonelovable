function getPlaceHolderInitials(name) {
  const [firstName, lastName] = name.split(" ");

  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }
  return firstName.substring(0, 2).toUpperCase();
}

/**
 * @description - This function will toggle the window of the chatbot on desktop
 * And will open the chatbot on another tab on mobile
 * @returns {void}
 */
function toggleChatbot() {
  const container = document.querySelector("#chatbot-container");
  container.classList.toggle("chatbot-container-closed");
}

const iframeId = "chatbot-iframe";

const setCustomData = (customData) => {
  const iframe = document.getElementById(iframeId);
  iframe.contentWindow.postMessage({
    payload: customData,
    type: "set-custom-data",
  }, "*");
}

function getCustomDataFromURL(url) {
  const parsedUrl = new URL(url);
  const customDataString = parsedUrl.searchParams.get('custom');
  if (customDataString) {
    return JSON.parse(decodeURIComponent(customDataString));
  }
}

let basePath = '';
switch(true) {
  case window.location.hostname.includes('localhost'):
  case window.location.hostname.includes('0.0.0.0'):
    basePath = 'http://localhost:3005'; break;
  case window.location.hostname.includes('platform.stg.zaia.app'):
    basePath = 'https://platform.stg.zaia.app'; break;
  default:
    basePath = 'https://platform.zaia.app';
}

function loadWidget() {
  const widgetConfig = window.ZWidget || window.Widget || {};

  window.ZWidget = {
    ...widgetConfig,
    setCustomData,
  };

  window.Widget = window.ZWidget;

  const head = document.querySelector("head");
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `${basePath}/script/style.css`;
  head.appendChild(link);

  const chatBotContainer = document.createElement("div");
  chatBotContainer.id = "chatbot-container";
  chatBotContainer.classList.add("chatbot-container-closed");

  const chatBotIframe = document.createElement("iframe");
  chatBotIframe.src = window.ZWidget.AgentURL || window.Widget.AgentURL;
  chatBotIframe.id = iframeId;
  chatBotContainer.appendChild(chatBotIframe);

  const chatBotFab = document.createElement("button");
  chatBotFab.id = "chatbot-fab";
  chatBotFab.classList.add("button-hidden");

  chatBotFab.addEventListener("click", toggleChatbot);
  document.body.appendChild(chatBotContainer);
  document.body.appendChild(chatBotFab);

  // Extract and set custom data from the iframe URL
  const customData = getCustomDataFromURL(window.ZWidget.AgentURL || window.Widget.AgentURL);
  if (customData) {
    setCustomData(customData);
  }

  /** @description - Listen to iFrame Events to render the widget buttons */
  window.addEventListener("message", function (event) {
    if (event.data.type === "open-widget") {
      const chatbotContainer = document.querySelector("#chatbot-container");
      chatbotContainer?.classList.remove("chatbot-container-closed");
    }

    if (event.data.type === "close-widget") {
      const chatbotContainer = document.querySelector("#chatbot-container");
      chatbotContainer?.classList.toggle("chatbot-container-closed");
    }

    if (event.data.payload && event.data.type === "widget-data") {
      /**
       * @typedef {object} Message
       * @property {number} id
       * @property {string} pictureURL
       * @property {string} name
       */
      const payload = event.data.payload;

      /** @type {HTMLImageElement} */
      if (payload.pictureURL) {
        const chatBotFabIcon = document.createElement("img");
        chatBotFabIcon.src = payload.pictureURL;
        chatBotFabIcon.id = "chatbot-picture";
        chatBotFab.appendChild(chatBotFabIcon);
      } else {
        const placeholder = document.createElement("div");
        placeholder.id = "chatbot-placeholder";
        placeholder.innerText = getPlaceHolderInitials(payload.name);
        placeholder.style.background =
          "linear-gradient(to right, #5D43DC, #8C2ACD)";
        placeholder.style.width = "60px";
        placeholder.style.height = "60px";
        placeholder.style.display = "flex";
        placeholder.style.justifyContent = "center";
        placeholder.style.alignItems = "center";
        placeholder.style.fontWeight = "400";
        placeholder.style.fontSize = "20px";
        placeholder.style.color = "#ffffff";
        placeholder.style.backgroundImage =
          "linear-gradient(to right, #5D43DC, #8C2ACD)";
        placeholder.style.borderRadius = "100%";
        chatBotFab.appendChild(placeholder);
      }
      document.querySelector("#chatbot-fab").classList.remove("button-hidden");
    }
  });
}

if(document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", loadWidget);
} else {
  loadWidget();
}
