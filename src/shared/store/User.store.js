class User {
  location = window.location.pathname;
  referrer = document.referrer;
  visitedWebsites = history.length;
  language = navigator.language;
  languages = navigator.languages;
  onLine = navigator.onLine;
  cookiesEnabled = navigator.cookieEnabled;
}

export default new User();
