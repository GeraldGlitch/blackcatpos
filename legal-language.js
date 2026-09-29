// Keep the landing-page language in sync with the language of legal pages.
try {
  localStorage.setItem('blackcatpos-language', document.documentElement.lang);
} catch {
  // Storage can be unavailable in private browsing or restricted environments.
}
