//function to give theme/color-scheme

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme

function toggleTheme() {
    if(localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// invoke the function to set the theme on init load

function renderTheme () {
    setTheme('theme-dark');
}

renderTheme();