# Bootstrap Tooltip Custom Class
Extends Bootstrap Tooltips and Popovers by adding custom classes. Available for **Bootstrap 3** and **Bootstrap 4**.

Define your own custom class or use the predefined custom classes: 
- tooltips: `.tooltip-primary`, `.tooltip-success`, `.tooltip-info`, `.tooltip-warning`, `.tooltip-danger`.
- popovers: `.popover-primary`, `.popover-success`, `.popover-info`, `.popover-warning`, `.popover-danger`.

![Bootstrap Tooltip Custom Class Preview](https://i.imgur.com/CNoQ13w.png)

![Bootstrap Popover Custom Class Preview](https://i.imgur.com/FFUqwUq.png)

In **Bootstrap 4**, the predefined tooltips and popovers are built from the `$theme-colors` map, so there are 3 more custom classes:
- tooltips: `.tooltip-secondary`, `.tooltip-light`, `.tooltip-dark`.
- popovers: `.popover-secondary`, `.popover-light`, `.popover-dark`.


## Installation
To install latest version via `npm` run:

```
npm install bootstrap-tooltip-custom-class
```
or via `yarn` run:

```
yarn add bootstrap-tooltip-custom-class
```

## Setup

**The implementations for [Tooltips][1] and [Popovers][2] are independent. You can include them together or you can use them separately.**

**Use the appropriate files according to Bootstrap version that you use: `bootstrap-v3`, `bootstrap-v4` or `bootstrap-v4-alpha`.**

### Tooltips

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
  @include tooltip-custom(#f2653c, #fff);
}
````

#### Less (only for Bootstrap v3):
```less
@import "bootstrap-tooltip-custom-class.less";
```
Use the mixin `tooltip-custom`:
````less
.tooltip-custom {
  .tooltip-custom(#f2653c, #fff);
}
````

#### Javascript
Include the script after Bootstrap's main javascript file:
```html
<script src="bootstrap.js"></script>
<script src="bootstrap-tooltip-custom-class.js"></script>
```

### Popovers
#### CSS
Include `bootstrap-popover-custom-class.css` in your project or use the `.scss` file:
```html
<link rel="stylesheet" href="bootstrap-popover-custom-class.css" media="all" />
```
#### SASS:
```sass
@import "bootstrap-popover-custom-class";
```
Use the mixin `popover-custom` to create styles for your custom popover:
````sass
.popover-custom {
  @include popover-custom(#f2653c, #fff);
}
````

#### Less (only for Bootstrap v3):
```less
@import "bootstrap-popover-custom-class.less";
```
Use the mixin `popover-custom`:
````less
.popover-custom {
  .popover-custom(#f2653c, #fff);
}
````

#### Javascript
Include the script after Bootstrap's main javascript file:
```html
<script src="bootstrap.js"></script>
<script src="bootstrap-popover-custom-class.js"></script>
```

## Usage

- Use `data-custom-class` attribute:

```html
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" data-custom-class="tooltip-custom" title="Custom tooltip example">Tooltip example</button>
```
```html
<button type="button" class="btn btn-default" data-toggle="popover" data-placement="top" data-custom-class="popover-custom" title="Custom popover example" data-content="Vivamus sagittis lacus vel augue laoreet">Popover example</button>
```

or

- Use `customClass` parameter on plugin initialization:
```javascript
$(function () {
  $('.has-tooltip').tooltip({
    customClass: 'tooltip-custom'
  });
});
```
```javascript
$(function () {
  $('.has-popover').popover({
    customClass: 'popover-custom'
  });
});
```

## Demo

#### Local
Local demo files can be found in the `demo` folder of each project.
First, execute the following instructions in the root:

```
$ npm install
$ npm run install-#project_alias# (or) npm run install-all
$ npm run build-#project_alias# (or) npm run build-all

(project_alias = v3 / v4 / v4-alpha)
```

#### Online
- Bootstrap v4: [Codepen](https://codepen.io/andreivictor/full/ayewjW)
- Bootstrap v4-alpha: [Codepen](http://codepen.io/andreivictor/full/MpNQNL)
- Bootstrap 3: [Codepen](https://codepen.io/andreivictor/full/gmNeJq)


[1]: #tooltips
[2]: #popovers
