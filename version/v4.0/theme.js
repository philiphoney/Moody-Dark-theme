function toggleMode() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    let newTheme;
    if (currentTheme === 'light') {
        newTheme = 'dark';
    } else {
        newTheme = 'light';
    }
    setThemePreference(newTheme);
}

function setThemePreference(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
}

function setIconBasedOnTheme() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {} else {}
}

const currentTheme = localStorage.getItem('theme');
if (!currentTheme) {
    setThemePreference('dark');
}
setThemePreference(currentTheme || 'light');
setIconBasedOnTheme();