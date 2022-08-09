# Important

It is very important that your css file comes before the Moodytheme script otherwise it can lead to errors.
And your JS should come after it 

An example

```html
<style>
  .darkmode {
  --color-text: #ffffff;
  --color-body: rgb(39, 39, 39);
}
</style>
<link rel="stylesheet" href="./style.css">

<script src="./moodytheme.js"></script>

<script>
function ThemedarkDisabled() {}
function ThemedarkEnabled() {}
</script>
<script src="./index.js"></script>

```