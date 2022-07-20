
//
//    © Philiphoney 2022
//    Author: Philiphoney https://github.com/philiphoney
//    Version 2.1
//    MoodyTheme: https://github.com/philiphoney/Moody-Dark-theme
//

var matches = false;

// This is executed when the web page is started
setTimeout (screen_loaded, 0); function screen_loaded() {

    // Theme
    if (localStorage["moodytheme"] == 'enabled') {enabled(); moodyThemedarkEnabled();}
    else {disabled(); moodyThemedarkDisabled();}

}

// moody theme button
function moodyButtonThemeEnabled() {localStorage.setItem('moodytheme', 'enabled');enabled(); moodyThemedarkEnabled();}
function moodyButtonThemeDisabled() {localStorage.setItem('moodytheme', 'disabled');disabled(); moodyThemedarkDisabled();}

// moody theme switch
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

// function moodyThemedarkEnabled() {}
// function moodyThemedarkDisabled() {}

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

// Change Body
function enabled() {
    document.body.classList.add('darkmode');
}

function disabled() {
    document.body.classList.remove('darkmode');
}