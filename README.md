# procs-comms-schedule

> A Vue.js project

## Installation

### CDN (Browser)

```html
<!-- include babel-polyfill for IE11 Promise support -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js"></script>
<!-- include polyfill for IE11 fetch support -->
<script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@2.0.3/fetch.min.js"></script>
<!-- sets HcPrsMrsDepts as a variable -->
<script src="https://commbocc.github.io/procs-comms-schedule/dist/build.js"></script>
```

```html
<div id="Schedule"></div>

<script type="text/javascript">
new HcProcsComms.Schedule().$mount('#Schedule')
</script>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
