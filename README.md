# Bootstrap Tooltip Custom Class
Extend Bootstrap 3 Tooltip plugin by adding custom classes.

Custom classes can be added using `customClass` parameter or via `data-custom-class` attribute.

There are 5 predefined custom classes in CSS: `.tooltip-primary`, `.tooltip-success`, `.tooltip-info`, `.tooltip-warning`, `.tooltip-danger`. 

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

## Setup

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

## Demo
[Codepen](http://codepen.io/andreivictor/pen/gmNeJq)
