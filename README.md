<img src="./assets/img/moody dark theme logo.png" />

<hr>

You can easily create a dark mode and this dark mode is even saved, which means every time you reload the page the dark mode will remain until you turn it off.

###

> ### Make sure this script is above your script. </br>
> ### Otherwise errors could occur.

##

The first step is to paste this link in the head `<head>`
```html
<script src="https://cdn.jsdelivr.net/gh/philiphoney/Moody-Dark-theme/version/v2.1/moodytheme.js"></script>
```
##
### You can turn Dark Mode on or off with a switch. </br>
To do this, you write in the tag: `onclick="moodyThemeswitch()"`
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

### The dark mod can also be enabled or disabled via the system settings
To do this, you must set `matches` to `true` in the script.
```html
<script>
    
matches = true;
    
</script>
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

#### Css

When dark mode is activated, the `darkmode` class is passed to the body.

An example
```css
.darkmode {
    --color-darkemode: #4b4b4b;
    background-color: var(--color-darkemode);
}
```
