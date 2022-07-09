//
//    © Philiphoney 2022
//    Author: Philiphoney https://github.com/philiphoney
//    Version 1.0
//    MoodyTheme: 
//

// This is executed when the web page is started
setTimeout (screen_loaded, 0); function screen_loaded() {

    // Theme
    if (localStorage["moodytheme"] == 'dark') {moodyThemedark();}
    else {moodyThemelight();}
}

// Theme

function moodyButtonThemedark() {localStorage.setItem('moodytheme', 'dark'); moodyThemedark()}
function moodyButtonThemelight() {localStorage.setItem('moodytheme', 'light'); moodyThemelight()}

function moodyThemeswitch() {
    // first start
    if (localStorage["moodytheme"] != null) {}
    else{localStorage.setItem('moodytheme', 'light')}

    // normal start
    if (localStorage["moodytheme"] == 'light') {
        localStorage.setItem('moodytheme', 'dark');
        moodyThemedark();
    } else {
        localStorage.setItem('moodytheme', 'light');
        moodyThemelight();
    }
}