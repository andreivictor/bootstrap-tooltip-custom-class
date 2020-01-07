# Bootstrap Tooltip Custom Class
Extend Bootstrap Tooltip plugin by adding custom classes. Available for **Bootstrap 3** and **Boostrap 4**.

Custom classes can be added using `customClass` parameter or via `data-custom-class` attribute.

There are 5 predefined custom classes in CSS: `.tooltip-primary`, `.tooltip-success`, `.tooltip-info`, `.tooltip-warning`, `.tooltip-danger`.


![Bootstrap Tooltip Custom Class Preview](https://i.imgur.com/CNoQ13w.png)


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

#### Local
Local demo files can be found in the `demo` folder inside of each project(`bootstrap-v3`, `bootstrap-v4`, `bootstrap-v4-alpha`).
First, run the following instructions in the project's root folder:

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


