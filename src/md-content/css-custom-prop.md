<section data-type="chapter" id="css-custom-props">

# <a id="advanced-custom-properties"></a>CSS Custom Properties and Houdini

One of the things that has always baffled me me about CSS is that you can't really reuse code, or portions there of.

Most of the time we see code like this where attributes llike `background-color` and `display` are repeated in two or more selectors:

```css
.one {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.two {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}

.three {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 75px;
}
```

This is fine for a small number of selectors like the ones show in the example above but it gets unwieldy for larger code bases or stylesheets where we repeat the same items dozens of times.

CSS Pre-processors like SASS introduced the concepts of variables that allow you to declare a value in one place and then reuse it in multiple places.

Take the following SCSS stylesheet. It defines two variables at the top and then use `$base-color` when defining `$border-dark` and we then use `$border-dark` as the color value of the `border` rule.

```scss
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;
}
```

This will produce the following CSS code when compiled:

```css
.alert {
  border: 1px solid rgba(198, 83, 140, 0.88);
}
```

While this is an improvement, SASS variables still have their shortcomings:

Sass variables are all compiled away by Sass and will not appear in the resulting CSS stylesheet. You have to recompile your stylesheets for changes to the variables to take effect.

Sass variables only have one value at a time; that means that multiple values for the same variable must be encoded into different variables.

Sass variables are imperative, which means if you use a variable and then change its value, the earlier use will stay the same until the next time you compile the stylesheet

[CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) address both the reusability problem and some of the shortcomings with pre processor stylesheets.

CSS variables are included in the CSS output so they are easier to reason through.

CSS variables can have different values for different elements, so we don't have to create multiple variables to hold the different possible values.

CSS variables are declarative, which means if you change the value, it’ll affect both earlier uses and later uses; all it takes is to reload the browser.


```css
:root {
  --color-primary: blue;
  --color-text: black;
  --color-bg: white;
  /* invert */
  --color-primary-invert: red;
  --color-text-invert: white;
  --color-bg-invert: black;
}

.component {
  color: var(--color-text);
  background-color: var(--color-bg);

  a {
    color: var(--color-primary);
  }
}

.component--dark {

  color: var(--color-text-invert);
  background-color: var(--color-bg-invert);

  a {
    color: var(--color-primary-invert);
  }
}
```

But we can go even further in our reuse. Rather than set values for each possible variant we can redefine the variable with new values depending on the setting.

In the following example, the `.component-dark` element redefines the colors and use those colors inside the element. This helps in two ways, it reduces the number of variables we have to handle and, by putting them inside the selector we want to use them with, help us understand the code better.

```css
:root {
  --color-primary: blue;
  --color-text: black;
  --color-bg: white;
}

.component {
  color: var(--color-text);
  background-color: var(--color-bg);

  a {
    color: var(--color-primary);
  }
}

.component--dark {
  --color-primary: red;
  --color-text: white;
  --color-bg: black;

  color: var(--color-text);
  background-color: var(--color-bg);

  a {
    color: var(--color-primary);
  }
}
```

The final awesome thing you can do with CSS variables is to use calculations via the `calc()` function available in CSS.

In this example we provide variables without a unit in the `:root` selector and use them we use `calc()` to assing a unit to it by multiplying the variable by 1 of the unit we want to use.

```css
:root{
  --base-font-size: 1;
  --spacer: 10;
}

.box{
  font-size: calc(var(--base-font-size)*1rem);
  padding: calc(var(--spacer)*1px)
}
```

This is much better, it allows for automatic updates when the variables change and it allows for dynamic updaes using Javascript. But it still has its flaws.

* Every rule that uses custom properties inherits by default. This may not always be the desired behavior
* All custom properties are treated as strings. This causes additional headaches when parsing them with Javascript.
* There are no default values.
* They cannot be animated with CSS
* They cannot be validated

Houdini [Custom Properties](https://drafts.css-houdini.org/css-properties-values-api/) provides an enhanced kind of custom properties defined in Javascript.

The example below defines a variable called `--my-color` using CSS.registerProperty.

Note that we wrap it in a feature query to see if the CSS object has a registerProperty method and we only add the property if the method is supported. In a fuller example I would do something if the method is not supported.

```js
if ('registerProperty' in CSS) {
  CSS.registerProperty({
    name: '--my-color',
    syntax: '<color>',
    inherits: true,
    initialValue: 'black'
  });
}
```

CSS.registerProperty has four attributes:

* **name** indicates the name of the variable. The two dashes in the beginning of the name are required
* **syntax** represent any of the supported values indicated in the [specification](https://drafts.css-houdini.org/css-properties-values-api/#supported-names). Multiple syntaxes are allowed
* **inherits** is a boolean that indicates whether children of the selector using this custom value inherit it or not
* **initialValue** gives a default value for the property

And that's it. With 8 lines of Javascript we've created a CSS variable with none of the drawbacks of the CSS native veersion

There are a couple of reasons that make custom properties particularly useful.

**Inheritance**: We now have control over our custom properties inheritance and we can now decide if the property will inherit down the document tree

**Validation**: Custom properties allow for default initial values that give developers a way to avoid errors or unexpected behavior.

If we define the following custom property:

```js
CSS.registerProperty({
  name: '--bg-color',
  syntax: '<color>',
  inherits: false,
  initialValue: 'red'
});
```

And mistakenly use the property with the following declaration below:

```css
.dark-theme-section {
  --bg-color: 1;
}
```

We would expect to get an error or, in CSS, to ignore the rule altogether. But, as the demo showed, the CSS will use the initial (default) value.

We can also test what the value is using Javascript.

```js
const section = document.querySelector('.smoosh3');
const styles = getComputedStyle(section);
const themeColor = styles.getPropertyValue('--bg-color');

console.log(themeColor); // "red"
```

**Animations**: CSS variables don’t provide good support for animation because the browser doesn’t know what type of value it has.

Because we assign a value to the property now the parser knows what to do with the property when we ask to animate it.

The [Codepen Demo](https://codepen.io/caraya/pen/KxZRKV) shows how the animation works.

We could do further modularization in the animation itself by creating properties for the animation parameters or the positioning of each individual content… but, for now, baby steps are OK.

**How to provide fallbacks**

Aas shown earlier, the first line of defensive coding is to only add the custom property if the `registerProperty` method exists in the `CSS` object.

If it exists, then we register it and it's ready for use

```js
if ('registerProperty' in CSS) {
  CSS.registerProperty({
    name: '--my-color',
    syntax: '<color>',
    inherits: true,
    initialValue: 'black'
  });
}
```

If the method doesn't exist then we add it as inline style to the element where we want to place it.

```js
const myElem = document.getElementClassName('box1');
// set variable on inline style
myElem.style.setProperty('--my-color', 'black');
```

</section>
