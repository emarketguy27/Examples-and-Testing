// get theme color on page load
const localStorageTheme = localStorage.getItem("theme");
document.querySelector("html").setAttribute("data-theme", localStorageTheme);
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

function calcSettingsAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

let currentThemeSetting = calcSettingsAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

const themeToggle = document.querySelector("[data-theme-toggle]");

themeToggle.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  const newCta =
    newTheme === "dark" ? "Change to light theme" : "Change to dark theme";
  themeToggle.setAttribute("aria-label", newCta);

  // update theme attribute to switch theme
  document.querySelector("html").setAttribute("data-theme", newTheme);
  // update local storage
  localStorage.setItem("theme", newTheme);
  // update currentThemeSetting in memory
  currentThemeSetting = newTheme;
});
