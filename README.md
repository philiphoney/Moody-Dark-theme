[![](https://data.jsdelivr.com/v1/package/gh/philiphoney/Moody-Dark-theme/badge)](./assets/moody%20dark%20theme%20logo.png)

<img src="https://cdn.discordapp.com/attachments/698641984499220531/995292155348254750/moody_dark_theme_logo.png" />

<hr>

You can easily create a dark mode and this dark mode is even saved, which means every time you reload the page the dark mode will remain until you turn it off.

##

The first step is to paste this link in the head `<head>`
```html
<script src="https://cdn.jsdelivr.net/gh/philiphoney/Moody-Dark-theme/moodytheme-v1.js"></script>
```
##
### You can turn Dark Mode on or off with a switch. </br>
To do this, you write in the tag: `onclick="moodyThemeswitch()`
```html
<button onclick="moodyThemeswitch()">dark or light</button>
```
### Create a single button for dark mode and dark mode off </br>
To turn on dark mode: `moodyButtonThemeEnabled()` </br>
To turn off dark mode: `moodyButtonThemeDisabled()`
```html
<button onclick="moodyButtonThemeEnabled()">dark mode on</button>
    
<button onclick="moodyButtonThemeDisabled()">dark mode off</button>
```

##

### Output

The output is as follows: </br>
When Dark Mode is activated: `moodyThemedarkEnabled()` </br>
When Dark Mode is disabled: `moodyThemedarkDisabled()`

An example
```js
function moodyThemedarkEnabled() {
   document.getElementById("body").style = "background-color: rgb(51, 51, 51);";
}

function moodyThemedarkDisabled() {
   document.getElementById("body").style = "background-color: white;";
}
```
