# Bootstrap Tooltip Custom Class
Extend Bootstrap Tooltip plugin by adding custom classes. Available for **Bootstrap 3** and **Boostrap 4**.

Custom classes can be added using `customClass` parameter or via `data-custom-class` attribute.

There are 5 predefined custom classes in CSS: `.tooltip-primary`, `.tooltip-success`, `.tooltip-info`, `.tooltip-warning`, `.tooltip-danger`.


![Bootstrap Tooltip Custom Class Preview](https://i.imgur.com/CNoQ13w.png)


## Installation
To install latest version via `npm` run:

```
$ npm install bootstrap-tooltip-custom-class
```

## Setup

**Use the appropriate files according to Bootstrap version that you use.**

#### CSS
Include `bootstrap-tooltip-custom-class.css` in your project or use the `.scss` file:
```html
<link rel="stylesheet" href="bootstrap-tooltip-custom-class.css" media="all" />
```
#### SASS:
```sass
@import "bootstrap-tooltip-custom-class";
```
Use the mixin `tooltip-custom` to create styles for your custom tooltip:
````sass
.tooltip-custom {
  @include tooltip-custom(#f2653c);
}
````

#### Javascript
Include the script after Bootstrap's main javascript file:
```html
<script src="bootstrap.js"></script>
<script src="bootstrap-tooltip-custom-class.js"></script>
```

## Usage

- Use `data-custom-class` attribute:

```html
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" data-custom-class="tooltip-custom" title="Custom tooltip example">Tooltip example</button>
```

or

- Use `customClass` parameter on plugin initialization:
```javascript
$(function () {
  $('.my-element').tooltip({
    customClass: 'tooltip-custom'
  });
});
```

## Demo

- Bootstrap v4 (Bootstrap v4.0.0-beta, Bootstrap v4.0.0, Bootstrap v4.1): [Codepen](https://codepen.io/andreivictor/pen/ayewjW)
- Bootstrap v4.0.0-alpha.6: [Codepen](http://codepen.io/andreivictor/pen/MpNQNL)
- Bootstrap 3: [Codepen](http://codepen.io/andreivictor/pen/gmNeJq)


