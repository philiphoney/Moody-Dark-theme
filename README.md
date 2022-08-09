
<p align="center">
<img src="./assets/img/moody%20logo%20new.png" width="20%" />
</p>

# Moody Dark theme

You can easily create a dark mode and this dark mode is even saved, which means every time you reload the page the dark mode will remain until you turn it off.

<p align="center">
<img src="./assets/img/dark-mode-img.png" />
</p>

###

> ### When using the script, please keep these things in mind [important](./important/important.md)

##

The first step is to paste this link in the head `<head>`
```html
<script src="https://cdn.jsdelivr.net/gh/philiphoney/Moody-Dark-theme/version/v3.1/moodytheme.js"></script>
```
##
### You can turn Dark Mode on or off with a switch. </br>
To do this, you write in the tag: `onclick="Themeswitch()"`
```html
<button onclick="Themeswitch()">dark or light</button>
```
### Create a single button for dark mode and dark mode off </br>
To turn on dark mode: `ButtonThemeEnabled()` </br>
To turn off dark mode: `ButtonThemeDisabled()`
```html
<button onclick="ButtonThemeEnabled()">dark mode on</button>
    
<button onclick="ButtonThemeDisabled()">dark mode off</button>
```
### Got a greener off wall of themes
You can create 5 themes and you can also control the Dark Mode and the Light mod.
```html
<select name="theme" id="select-theme" onchange="SelectTheme()"> 
    <!-- The current theme -->
    <option class="theme">Subjects</option>
    <!-- Theme option -->
    <option value="theme1">theme 1</option>
    <option value="theme2">theme 2</option>
    <option value="theme3">theme 3</option>
    <option value="theme4">theme 4</option>
    <option value="theme5">theme 5</option>
    <option value="dark">dark theme</option>
    <option value="light">light theme</option>
</select>
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
When Dark Mode is activated: `ThemedarkEnabled()` </br>
When Dark Mode is disabled: `ThemedarkDisabled()` </br>
When theme 1 is activated  `Theme1()`

An example
```js
function ThemedarkEnabled() {
   document.getElementById("body").style = "background-color: rgb(51, 51, 51);";
}

function ThemedarkDisabled() {
   document.getElementById("body").style = "background-color: white;";
}

function Theme1() {
   document.getElementById("body").style = "background-color: blue;";
}
```

#### Css

When dark mode is activated, the `darkmode` class is passed to the body. </br>
When a theme is activated, a class with the respective themes is created in the body. </br>

An example
```css
.darkmode {
    --color-darkemode: #4b4b4b;
    background-color: var(--color-darkemode);
}

.theme1 {
    --color-theme1: #113147;
    background-color: var(--color-theme1);
}
```
