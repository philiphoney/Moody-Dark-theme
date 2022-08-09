//
//    © Philiphoney 2022
//    Author: Philiphoney https://github.com/philiphoney
//    Version 3.0
//    MoodyTheme: https://github.com/philiphoney/Moody-Dark-theme
//

var matches = false;

// This is executed when the web page is started
setTimeout (screen_loaded, 0); function screen_loaded() {

    // Theme
    if (localStorage["moodytheme"] == 'enabled') {enabled(); moodyThemedarkEnabled();}
    if (localStorage["moodytheme"] == 'disabled') {disabled(); moodyThemedarkDisabled();}
    
    // Select Theme
    if (localStorage["SelectTheme"] != null) {
        var themestart = localStorage["SelectTheme"];
        var tehmelist = JSON.parse(themestart);
        var themeOutput = tehmelist[0];
        document.getElementsByClassName("theme")[0].innerHTML = (themeOutput);
    }
    CustomTheme();
}

// moody theme button
function moodyButtonThemeEnabled() {localStorage.setItem('moodytheme', 'enabled');enabled(); moodyThemedarkEnabled();}
function moodyButtonThemeDisabled() {localStorage.setItem('moodytheme', 'disabled');disabled(); moodyThemedarkDisabled();}

function ButtonThemeEnabled() {localStorage.setItem('moodytheme', 'enabled');enabled(); moodyThemedarkEnabled();}
function ButtonThemeDisabled() {localStorage.setItem('moodytheme', 'disabled');disabled(); moodyThemedarkDisabled();}

// moody theme switch
function Themeswitch() {moodyThemeswitch();}
function moodyThemeswitch() {
    // first switch start
    if (localStorage["moodytheme"] != null) {}
    else{localStorage.setItem('moodytheme', 'disabled')}

    // normal start
    if (localStorage["moodytheme"] == 'disabled') {
        localStorage.setItem('moodytheme', 'enabled');
        enabled();
        moodyThemedarkEnabled();
    } 
    else {
        localStorage.setItem('moodytheme', 'disabled');
        disabled();
        moodyThemedarkDisabled();
    }
}

// Run from the system settings
window.setInterval('moodymatches()', 0); function moodymatches() {
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {

    if (matches == true) {
    localStorage.setItem('moodytheme', 'enabled');
    moodyThemedarkEnabled();
    enabled();
    }}
    else {

    if (matches == true) {
    localStorage.setItem('moodytheme', 'disabled');
    moodyThemedarkDisabled();
    disabled()
}}}

// Select theme
function SelectTheme() {
    var element = document.getElementById('select-theme');
    var name = element.options[element.selectedIndex].text;
    var value = element.options[element.selectedIndex].value;
    let theme = [name, value];
    localStorage.setItem('SelectTheme', JSON.stringify (theme));
    document.getElementsByClassName("theme")[0].innerHTML = name;

    if (value == "dark") {
        localStorage.setItem('moodytheme', 'enabled');
        moodyThemedarkEnabled();
        enabled();
    } else {document.body.classList.remove('darkmode');}

    if (value == "light") {
        localStorage.setItem('moodytheme', 'disabled');
        moodyThemedarkDisabled();
        disabled()
    }

    CustomTheme();
}

// Custom Theme
function CustomTheme() {
    var C_theme = localStorage["SelectTheme"];
    var C_tehmelist = JSON.parse(C_theme);
    var C_value = C_tehmelist[1];

    if (C_value == "theme1") {
        document.body.classList.add('theme1');
        localStorage.setItem('moodytheme', "theme1");
        Theme1();
    } else {document.body.classList.remove('theme1');}

    if (C_value == "theme2") {
        document.body.classList.add('theme2');
        localStorage.setItem('moodytheme', "theme2");
        Theme2();
    } else {document.body.classList.remove('theme2');}

    if (C_value == "theme3") {
        document.body.classList.add('theme3');
        localStorage.setItem('moodytheme', "theme3");
        Theme3();
    } else {document.body.classList.remove('theme3');}

    if (C_value == "theme4") {
        document.body.classList.add('theme4');
        localStorage.setItem('moodytheme', "theme4");
        Theme4();
    } else {document.body.classList.remove('theme4');}

    if (C_value == "theme5") {
        document.body.classList.add('theme5');
        localStorage.setItem('moodytheme', "theme5");
        Theme5();
    } else {document.body.classList.remove('theme5');}

}

// Change Body
function enabled() {
    document.body.classList.add('darkmode');
}

function disabled() {
    document.body.classList.remove('darkmode');
}

// Output
function moodyThemedarkDisabled() {ThemedarkDisabled();}
function moodyThemedarkEnabled() {ThemedarkEnabled();}

function ThemedarkDisabled() {}
function ThemedarkEnabled() {}

function Theme1() {}
function Theme2() {}
function Theme3() {}
function Theme4() {}
function Theme5() {}