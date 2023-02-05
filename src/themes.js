const lightThemeBackgroundColor = "#fff";
const lightThemeModalBackgroundColor = "#0003";
const lightThemeTextColor = "#000";
const lightThemeButtonColor = "rgb(0, 174, 255)";
const lightThemeButtonTextColor = "#fff";
const lightThemeButtonHoverColor = "rgb(79, 199, 255)";
const lightThemeButtonClickColor = "rgb(0, 137, 201)";

const darkThemeBackgroundColor = "#000";
const darkThemeModalBackgroundColor = "#ffffff75";
const darkThemeTextColor = "#fff";
const darkThemeButtonColor = "#230046";
const darkThemeButtonTextColor = "#fff";
const darkThemeButtonHoverColor = "#420085";
const darkThemeButtonClickColor = "#1e013b";

const joshThemeBackgroundColor = "#000";
const joshThemeModalBackgroundColor = "#ffffff75";
const joshThemeTextColor = "#fff";
const joshThemeButtonColor = "#230046";
const joshThemeButtonTextColor = "#fff";
const joshThemeButtonHoverColor = "#420085";
const joshThemeButtonClickColor = "#1e013b";

const root = document.querySelector(":root");

function changeTheme(newThemeValue) {
  switch (newThemeValue) {
    case "light":
      _setThemeValues(
        lightThemeBackgroundColor,
        lightThemeModalBackgroundColor,
        lightThemeTextColor,
        lightThemeButtonColor,
        lightThemeButtonTextColor,
        lightThemeButtonHoverColor,
        lightThemeButtonClickColor
      );
      break;
    case "dark":
      _setThemeValues(
        darkThemeBackgroundColor,
        darkThemeModalBackgroundColor,
        darkThemeTextColor,
        darkThemeButtonColor,
        darkThemeButtonTextColor,
        darkThemeButtonHoverColor,
        darkThemeButtonClickColor
      );
      break;
    case "josh":
      _setThemeValues(
        joshThemeBackgroundColor,
        joshThemeModalBackgroundColor,
        joshThemeTextColor,
        joshThemeButtonColor,
        joshThemeButtonTextColor,
        joshThemeButtonHoverColor,
        joshThemeButtonClickColor
      );
      break;
  }
}

function _setThemeValues(
  backgroundColor,
  modalBackgroundClor,
  textColor,
  buttonColor,
  buttonTextColor,
  buttonHoverColor,
  buttonClickColor
) {
  root.style.setProperty("--background-color", backgroundColor);
  root.style.setProperty("--modal-background-color", modalBackgroundClor);
  root.style.setProperty("--text-color", textColor);
  root.style.setProperty("--button-color", buttonColor);
  root.style.setProperty("--button-text-color", buttonTextColor);
  root.style.setProperty("--button-hover-color", buttonHoverColor);
  root.style.setProperty("--button-click-color", buttonClickColor);
}

export { changeTheme };
