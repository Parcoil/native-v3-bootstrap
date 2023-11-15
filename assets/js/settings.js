/*
Hello epic hacker (maybe skid) you are looking at one of the many scripts that powers the site,
this script has extra comments and info to help you understand what is going on.

This JavaScript code defines functions that manage the state of a web page's tab,
such as its title and icon, and its theme.

It retrieves a JSON object from local storage, which contains the current state of the tab,
and updates the web page's elements with the stored values.

The code provides functions to modify the tab state and settings, such as setTitle, setFavicon,
resetTab, setTheme, and setThemeColor.

These functions update the web page's elements and store the updated state in local storage.
*/

// Check if there is a saved tab data in localStorage
var tab = localStorage.getItem("tab");

if (tab) {
  // If there is saved data, try to parse it
  try {
    var tabData = JSON.parse(tab);
  } catch {
    // If there is an error in parsing, create an empty object
    var tabData = {};
  }
} else {
  // If there is no saved data, create an empty object
  var tabData = {};
}

// Set the title and icon fields to the values saved in tabData, if they exist
if (tabData.title) {
  document.getElementById("title").value = tabData.title;
}
if (tabData.icon) {
  document.getElementById("icon").value = tabData.icon;
}

// Default tab settings
var settingsDefaultTab = {
  title: "Settings | Native",
  icon: "./images/logo.png",
};

// Function to set the document title
function setTitle(title = "") {
  if (title) {
    document.title = title;
  } else {
    document.title = settingsDefaultTab.title;
  }

  // Update the saved tab data with the new title
  var tab = localStorage.getItem("tab");

  if (tab) {
    // If there is saved data, try to parse it
    try {
      var tabData = JSON.parse(tab);
    } catch {
      // If there is an error in parsing, create an empty object
      var tabData = {};
    }
  } else {
    // If there is no saved data, create an empty object
    var tabData = {};
  }

  if (title) {
    // If there is a new title, update tabData
    tabData.title = title;
  } else {
    // If the title is empty, delete the title field from tabData
    delete tabData.title;
  }

  // Save the updated tab data to localStorage
  localStorage.setItem("tab", JSON.stringify(tabData));
}

// Function to set the favicon
function setFavicon(icon) {
  if (icon) {
    document.querySelector("link[rel='icon']").href = icon;
  } else {
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  }

  // Update the saved tab data with the new icon
  var tab = localStorage.getItem("tab");

  if (tab) {
    // If there is saved data, try to parse it
    try {
      var tabData = JSON.parse(tab);
    } catch {
      // If there is an error in parsing, create an empty object
      var tabData = {};
    }
  } else {
    // If there is no saved data, create an empty object
    var tabData = {};
  }

  if (icon) {
    // If there is a new icon, update tabData
    tabData.icon = icon;
  } else {
    // If the icon is empty, delete the icon field from tabData
    delete tabData.icon;
  }

  // Save the updated tab data to localStorage
  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setCloak(cloak) { // applies only to premade cloaks
  switch (cloak) {
    case "search": // Google Search
      setTitle("Google");
      setFavicon("./cloaks/Google Search.ico");
      location.reload();
      break;
    case "drive": // Google Drive
      setTitle("My Drive - Google Drive");
      setFavicon("./cloaks/Google Drive.ico");
      location.reload();
      break;
      case "librex": // LibreX
      setTitle("LibreX");
      setFavicon("./cloaks/9A58D8BC-6595-476A-AD95-B6D8880683C8.ico");
      location.reload();
      break;
         case "bing": // Bing
      setTitle("Bing");
      setFavicon("./cloaks/60D97501-319D-490E-ABE8-C1EB41DCC09A.ico");
      location.reload();
      break;
    case "youtube": // YouTube 
      setTitle("YouTube");
      setFavicon("./cloaks/YouTube.ico");
      location.reload();
      break;  
    case "gmail": // Gmail
      setTitle("Gmail");
      setFavicon("./cloaks/Gmail.ico");
      location.reload();
      break;
    case "calendar": // Google Calendar
      setTitle("Google Calendar");
      setFavicon("./cloaks/Calendar.ico");
      location.reload();
      break;
    case "meets": // Google Meet
      setTitle("Google Meet");
      setFavicon("./cloaks/Meet.ico");
      location.reload();
      break;
    case "classroom": // Google Classroom
      setTitle("Classes");
      setFavicon("./cloaks/Classroom.png");
      location.reload();
      break;
    case "canvas": // Canvas 
      setTitle("Canvas");
      setFavicon("./cloaks/Canvas.ico");
      location.reload();
      break;
    case "zoom": // Zoom
      setTitle("Zoom");
      setFavicon("./cloaks/Zoom.ico");
      location.reload();
      break;
    case "nitter": // Nitter
      setTitle("nitter");
      setFavicon("./cloaks/63DFB320-0EEC-4F06-AF02-C50DFD2B49AB.ico");
      location.reload();
      break;
      case "teddit": // Teddit
      setTitle("teddit");
      setFavicon("./cloaks/EB4D8FE9-10E9-44B8-A6CE-3F9A0040F94A.ico");
      location.reload();
      break;
      case "cornhub": // Cornhub
      setTitle("Cornhub");
      setFavicon("./cloaks/8FE4C273-914D-431D-907E-3FCF5BB0399F.ico");
      location.reload();
      break;
      case "indivious": // Indivious
      setTitle("Indivious");
      setFavicon("./cloaks/2255E848-AB69-43C1-B470-DBFDA40FAD10.ico");
      location.reload();
      break;
    case "khan": // Khan Academy
      setTitle("Dashboard | Khan Academy"); 
      setFavicon("./cloaks/Khan Academy.ico");
      location.reload();
      break;
  }
}

// Function to reset the tab settings to default
function resetTab() {
  document.title = settingsDefaultTab.title;
  document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  document.getElementById("title").value = "";
  document.getElementById("icon").value = "";
  localStorage.setItem("tab", JSON.stringify({}));
}

// Function to set the theme
function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.body.setAttribute("theme", theme);
  document.body.style = "";
  localStorage.removeItem("theme_color");

  // Find the theme color from the themes array and set the color
  themes.forEach((palette) => {
    if (palette.theme == theme) {
      document.querySelector("#theme_color").value = palette.color;
    }
  });
}

// Function to set the custom theme color
function setThemeColor(theme) {
  localStorage.setItem("theme", "custom");
  localStorage.setItem("theme_color", theme);
  document.body.setAttribute("theme", "custom");
  document.body.style = `--theme: ${theme}; --background: ${getContrastHex(theme)}; --text: ${getColorHex(theme)}; --text-secondary: ${getColorHex(theme)};`;
}
// =======================
/*
More custom cloak tomfoolery(searchable dropdown)
*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showccdrop() { // show
  document.getElementById("ccdrop").classList.toggle("show");
}
// the below has been stolen from w3schools
function search() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("ccsearch"); // the search bar in the dropdown
  filter = input.value.toUpperCase();
  div = document.getElementById("ccdrop"); // dropdown(self-explainatory)
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
 // Panic Button
 // Check if the URL is stored in localStorage
    const storedURL = localStorage.getItem('targetURL');
    const  panicurlInput = document.getElementById(' panicurlInput');
    
    // Set the input value to the stored URL, if available
    if (storedURL) {
       panicurlInput.value = storedURL;
    }

    // Save button click event to update the URL
    document.getElementById('panicsaveButton').addEventListener('click', function() {
      const newURL =  panicurlInput.value;
      localStorage.setItem('targetURL', newURL);
    });

    // Button click event to navigate to the URL
    document.getElementById('navigateButton').addEventListener('click', function() {
      const storedURL = localStorage.getItem('targetURL');
      if (storedURL) {
        window.location.href = storedURL;
      } else {
        alert('Please set a URL first.');
      }
    });

// Themes

const themeSelect = document.getElementById('themeSelect');
const body = document.body;

// Define a default theme
const defaultTheme = 'light';

// Retrieve the theme from localStorage or use the default
const savedTheme = localStorage.getItem('selectedTheme') || defaultTheme;

// Apply the theme on initial load
applyTheme(savedTheme);

// Set the dropdown to the saved theme
themeSelect.value = savedTheme;

// Event listener for theme change
themeSelect.addEventListener('change', function() {
  const selectedTheme = themeSelect.value;
  applyTheme(selectedTheme);
  // Save selected theme to localStorage
  localStorage.setItem('selectedTheme', selectedTheme);
});

function applyTheme(theme) {
  switch (theme) {
    case 'light':
      body.style.backgroundColor = '#fff';
      body.style.color = '#333';
      break;
    case 'dark':
      body.style.backgroundColor = '#333';
      body.style.color = '#fff';
      break;
    case 'blue':
      body.style.backgroundColor = '#3498db';
      body.style.color = '#fff';
      break;
    case 'green':
      body.style.backgroundColor = '#2ecc71';
      body.style.color = '#fff';
      break;
      case '3.0':
        body.style.backgroundColor = '#1a2023';
        body.style.color = '#fff';
        break;
        case '2.0':
          body.style.backgroundColor = '#212f3c';
          body.style.color = '#fff';
          break;
    default:
      break;
  }
}
