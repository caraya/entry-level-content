<section data-type="chapter">

# <a id="css"></a>CSS

The second component of a web page is [Cascading Style Sheets](https://www.w3.org/Style/CSS/). The style sheets provide a way to style (or change the style) od the content on your web pages without adding elements and attributes beyond classes and IDs.

##  <a id="usingcss"></a>Using stylesheets

Before we start looking at how to build our stylesheets we need to look at where to load them from.

The first option is to use the `link` element with the following attributes:

* `rel=stylesheet` to indicate that the linked item is a style sheet
* `href` with the path to where the stylesheet is loaded

```html
<link rel="stylesheet" href="path/to/style.css">
```

The second alternative is to add the styles directly to the page using the `style` element inside the head of the page as the very last element (if you're not using scripts)

```html
<style>
 body {
   font-family: Roboto, arial, sans-serif;
   font-size: 16px;
 }
</style>
```

Each of these elements has advantages and disadvantages.

Using Link stylesheets stops the browser from rendering the page as the HTML renderer will wait for the CSS to load and process before finishing the rendering.

Using inline styles (the `style` element) means that you have to add the styles manually for every single page and, depending on how big your styles are, may bloat the size of your page.

We'll discuss the structure of individual rules in <a href="#creatingcssrules" class="xref">Creating CSS rules</a> these and we'll cover performance items when we talk about performance, later in the book.

<aside class="warning">
<p>There is no way we can cover all of CSS, or even just the visual components, so we'll cover a basic subset to make visually pleasing pages.<p>

<p>Likewise, there is no way we can cover everything you can do with CSS. There are dozens of book that cover what CSS can do. My recommendations are <a href="#meyer-css-tdg">CSS: The Definitive Guide</a> from O'Reilly and the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS Documentation</a> from the Mozilla Developer Network.</p>

<p>Will provide a more complete list of resrouces in the <a class="xref" href="#biblio">anotated bibliography</a>.</p>
</aside>

### <a id="css-measuring"></a>Measuring and describing things in CSS

Because we are using CSS, primarily to do layout and size items in a page, we have to measure abd tell the browser how to lay the items we specify. There are different ways to

#### <a id="css-text">Text values

Text data types are either `string`, a quoted series of characters, or a "CSS Identifier" which is an unquoted string. A `string` must be quoted with either single or double quotes. CSS Identifiers, must be unquoted.

####  <a id="css-text-predefned"></a>Pre-defined keyword values

Pre-defined keywords are text values defined by the specification for a given property. These keywords are used without quotes.

```css
.myImage {
  float: right;
}
```

#### <a id="css-css-wide"></a>CSS Wide Values

In addition to the pre-defined keywords that are part of the specification for an individual property or group of properties, all CSS properties accept the CSS-wide property values `initial`, `inherit`, and `unset`, which explicitly specify defaulting behaviors.

* The initial keyword represents the value specified as the property’s initial value.
* The inherit keyword represents the computed value of the property on the element’s parent, provided it is inherited.
* The unset keyword acts as either inherit or initial, depending on whether the property is inherited or not.

#### <a id="css-url"></a>URL Values

A `url` type uses functional notation, which accepts a `string` that is a URL. This may be an absolute URL (full path to the resource) or a relative URL (partial path relative to the element in which it's stored). For example, if you wanted to include a background image, you might use either of the following.

```css
/* Relative URL*/
.box {
  background-image: url("images/my-background.png");
}

/* Absolute URL */
.box {
  background-image: url("/images/my-background.png");
}

/* External URL */
.box {
  background-image:
    url("https://exammple.com/img/my-background.png");
}
```

The parameter for url() can be either quoted or unquoted. For the most part use quotes surrounding the URL

#### <a id="css-numeric"></a>Numeric Values

* integer
* number
* dimension
* percentage

<dl>
<dt>Integers</dt>
<dd>An positive or negative integer is one or more decimal digits, 0 through 9, such as 1024 or -55. An integer may be preceded by a + or - symbol, with no space between the symbol and the integer

<dt>Numbers
<dd>A number represents a positive or negative real number, which may or may not have a decimal point with a fractional component

<dt>Dimensions
<dd>A dimension is a number with a unit attached to it, for example 45deg, 100ms, or 10px. The attached unit identifier is case insensitive. Spaces between the number and the unit are not allowed.
</dl>

CSS uses dimensions to specify:

* length (Distance units)
* angle
* time
* resolution

These are all covered in subsections below.

#### <a id="css-numeric-distance"></a>Distance Units

Where a distance unit, also known as a length, is allowed as a value for a property, this is described as the `length` type. There are two types of lengths in CSS: relative and absolute.

Relative length units specify a length in relation to something else. For example, em is relative to the font size on the element and vh is relative to the viewport height.

<table>
  <thead>
    <tr>
      <th>Unit</th>
      <th>Relative to</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>em</td>
      <td>Font size of the element</td>
    </tr>
    <tr>
      <td>rem</td>
      <td>Font size of the root element</td>
    </tr>
    <tr>
      <td>ex</td>
      <td>x-height of the element's font</td>
    </tr>
    <tr>
      <td>cap</td>
      <td>Cap height (the nominal height of capital letters)</td>
    </tr>
    <tr>
      <td>ch</td>
      <td>Average character advance of a narrow glyph in the element’s font, as represented by the “0” (ZERO, U+0030) glyph.</td>
    </tr>
    <tr>
      <td>ic</td>
      <td> Average character advance of a full width glyph in the element’s font, as represented by the “水” (CJK water ideograph, U+6C34) glyph.</td>
    </tr>
    <tr>
      <td>lh</td>
      <td>line height of the element</td>
    </tr>
    <tr>
      <td>rlh</td>
      <td>line height of the root element</td>
    </tr>
    <tr>
      <td>vw</td>
      <td>1% of viewport's width</td>
    </tr>
    <tr>
      <td>vh</td>
      <td>1% of viewport's height</td>
    </tr>
    <tr>
      <td>vi</td>
      <td>1% of viewport's size in the root element's inline axis</td>
    </tr>
    <tr>
      <td>vb</td>
      <td>1% of viewport's size in the root element's block axis</td>
    </tr>
    <tr>
      <td>vmin</td>
      <td>1% of viewport's smaller dimension</td>
    </tr>
    <tr>
      <td>vmax</td>
      <td>1% of viewport's larger dimension</td>
    </tr>
  </tbody>
</table>

Absolute length units are fixed to a physical length: either an inch or a centimeter. Many of these units are therefore more useful when the output is a fixed size media, such as print. For example, mm is a physical millimeter, 1/10th of a centimeter.

<table>
  <thead>
    <tr>
      <th>Unit</th>
      <th>Name</th>
      <th>Equivalent to</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>cm</td>
      <td>Centimeters</td>
      <td>1cm = 96px/2.54</td>
    </tr>
    <tr>
      <td>mm</td>
      <td>Millimeters</td>
      <td>1mm = 1/10th of 1cm</td>
    </tr>
    <tr>
      <td>Q</td>
      <td>Quarter-millimeters</td>
      <td>1Q = 1/40th of 1cm</td>
    </tr>
    <tr>
      <td>in</td>
      <td>Inches</td>
      <td>1in = 2.54cm = 96px</td>
    </tr>
    <tr>
      <td>pc</td>
      <td>Picas</td>
      <td>1pc = 1/16th of 1in</td>
    </tr>
    <tr>
      <td>pt</td>
      <td>Points</td>
      <td>1pt = 1/72th of 1in</td>
    </tr>
    <tr>
      <td>px</td>
      <td>Pixels</td>
      <td>1px = 1/96th of 1in</td>
    </tr>
  </tbody>
</table>

When including a length value, if the length is 0, the unit identifier is not required. Otherwise, the unit identifier is required, is case insensitive, and must come immedediately after the numeric part of the value, with no space in-between.

#### <a id="css-numeric-angle"></a>Angle Units

Angle values are represented by the type angle and accept the following values:

<table>
  <thead>
    <tr>
      <th>Unit</th>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>deg</td>
      <td>Degrees</td>
      <td>There are 360 degrees in a full circle</td>
    </tr>
    <tr>
      <td>grad</td>
      <td>Gradians</td>
      <td>There are 400 gradians in a circle</td>
    </tr>
    <tr>
      <td>rad</td>
      <td>Radians</td>
      <td>There are 2π radians in a circle</td>
    </tr>
    <tr>
      <td>turn</td>
      <td>Turns</td>
      <td>There is 1 turn in a full circle</td>
    </tr>
  </tbody>
</table>

##### <a id="css-numeric-time"></a>Time Units

Time values are represented by the type time. When including a time value, the unit identifier -- s or ms -- is required. It accepts the following values.

<table>
  <thead>
    <tr>
      <th>Unit</th>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>s</td>
      <td>Seconds</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>ms</td>
      <td>Milliseconds</td>
      <td>There are 1,000 milliseconds in a second.</td>
    </tr>
  </tbody>
</table>

##### <a id="css-numeric-frequency"></a>Frequency Units

Frequency values are represented by the type frequency. It accepts the following values.

<table>
  <thead>
    <tr>
      <th>Unit</th>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hz</td>
      <td>Hertz</td>
      <td>Represents the number of occurances per second</td>
    </tr>
    <tr>
      <td>kHz</td>
      <td>KiloHertz</td>
      <td>A kiloHertz is 1000 Hertz.</td>
    </tr>
  </tbody>
</table>

1Hz, which can also be written as 1hz or 1HZ, is one cycle per second.

##### <a id="css-numeric-resolution"></a>Resolution Units

Resolution units are represented by the type resolution. They represent the size of a single dot in a graphical representation, such as a screen, by indicating how many of these dots fit in a CSS inch, centimeter, or pixel. It accepts the following values:

<table>
  <thead>
    <tr>
      <th>Unit</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>dpi</td>
      <td>Dots per inch</td>
    </tr>
    <tr>
      <td>dpcm</td>
      <td>Dots per centimeter</td>
    </tr>
    <tr>
      <td>dppx, x</td>
      <td>Dots per px unit (pixel)</td>
    </tr>
  </tbody>
</table>

#### <a id="css-numeric-percentages"></a>Percentages

A percentage is a type that represents a fraction of some other value.

Percentage values are always relative to another quantity, for example a length. Each property that allows percentages also defines the quantity to which the percentage refers. This quantity can be a value of another property of the same element, the value of a property of an ancestor element, a measurement of a containing block, or something else.

As an example, if you specify the width of an box as a percentage, it refers to the percentage of the box's parent's computed width:

```css
.box {
  width: 50%;
}
```
#### <a id="css-functional"></a>Functional Units

There are additional values that allow you to create more complex values than the primitives discussed in earlier sections without having to calculate the values ahead of time.

<dl>

<dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/calc()">calc()</a></dt>
<dd>Lets you perform calculations when specifying CSS property values</dd>
<dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/min">min()</a></dt>
<dd>Sets the smallest value from a list of comma-separated expressions as the value of a CSS property</dd>
<dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/max">max()</a></dt>
<dd>set the largest value from a list of comma-separated expressions as the value of a CSS property</dd>
<dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp">clamp()</a></dt>
<dd>Clamps a value between an upper and lower bound. clamp() enables selecting a middle value within a range of values between a defined minimum and maximum. It takes three parameters: a minimum value, a preferred value, and a maximum allowed value</dd>
<dt><a href="https://drafts.csswg.org/css-values-4/#funcdef-toggle">toggle()</a><dt>
<dd>Allows descendant elements to cycle over a list of values instead of inheriting the same value.</dd>
<dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/attr">attr()</a></dt>
<dd>Retrieves the value of an attribute of the selected element and use it in the stylesheet. It can also be used on pseudo-elements, in which case the value of the attribute on the pseudo-element's originating element is returned.</dd>
</dl>

Note that some of the values may not be supported in all browsers so test your code and be mindful of what you put in your production code.

### <a id="css-targeting"></a>Targeting specific elements

The easiest way to use CSS is to target specific HTML elements and style them as needed. In the example below we style paragraphs (represented by the `p` element) with font family, size and line height information.

We also style the `blockquote` elements left and right margin. We are using the long form attributes where we state each attribute individually. There are shortcut forms that we'll save for the advanced portion of CSS.

```css
p {
  font-family: Roboto, Verdana, Arial;
  font-size: 1em;
  line-height: 1.25;
}

blockquote {
  margin-left: 2em;
  margin-right: 2em;
}
```

### <a id="css-target-class-id"></a>Using `class` and `id` HTML attributes

When we discussed HTML we talked about the `class` and `id` attributes of HTML elements. We can leverage these attributes for styling with CSS.

* HTML classes are represented by a period followed by the name of the class (`.myClass`)
* HTML id attributes are written as a hash followed by the name of the ID (`#myID`)

> The difference between classes and IDs is that IDs are unique to a document while classes can match multiple elements in the same document.

The first example takes a class indicated by `.myClass` and gives it a green color.

The second example uses an ID, defined as `#myID` and assigns a different color.


```css
.myClass {
  color: #00ff00;
}

#myID {
   color: #0000ff;
}
```

### <a id="css-target-attributes"></a>Targeting attributes

CSS also gives authors the option of matching attribute values, either the full attribute values or parts located in different parts of the value.

Take the following example for the `a` element and its attributes as described below.

```css
a {
  color: blue;
}

/* Internal links, beginning with "#" */
a[href^="#"] {
  background-color: gold;
}

/* Links with "example" anywhere in the URL */
a[href*="example"] {
  background-color: silver;
}

/*  Links with "document" anywhere in the URL,
    regardless of capitalization */
a[href*="document" i] {
  color: cyan;
}

/* Links that end in ".org" */
a[href$=".org"] {
  color: red;
}
/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"] {
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}
```

The price of this flexibility is complexity. The different attribute matches use different characters to indicate what they represent and match.

<dl>
  <dt><code>[attr]</code></dt>
  <dd>This selector will select all elements with the attribute attr, whatever its value</dd>
  <dt><code>[attr=val]</code></dt>
  <dd>This selector will select all elements with the attribute attr, but only if its value is the full value</dd>
  <dt><code>[attr~=val]</code></dt>
  <dd>This selector will select all elements with the attribute attr, but only if the value val is one of a space-separated list of values contained in the attribute</dd>
  <dt><code>[attr|=val]</code></dt>
  <dd>This selector will select all elements with the attribute attr for which the value is exactly val or starts with val-. The dash here isn't a mistake, this is to handle language codes</dd>
  <dt><code>[attr^=val]</code></dt>
  <dd>This selector will select all elements with the attribute attr for which the value starts with val</dd>
  <dt><code>[attr$=val]</code></dt>
  <dd>This selector will select all elements with the attribute attr for which the value ends with val</dd>
  <dt><code>[attr*=val]</code></dt>
  <dd>This selector will select all elements with the attribute attr for which the value contains the string val (unlike [attr~=val]. This selector doesn't treat spaces as value separators but as part of the attribute value</dd>
</dl>

You can find more information about attribute selector values in MDN's [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) and CSS-Tricks' [The Skinny on CSS Attribute Selectors](https://css-tricks.com/attribute-selectors/)

### <a id="css-complex-selectors"></a>Writing more complex selectors

So far we've worked with single item selectors. They are good but fairly limited on what they can do. We will now look at different way to combine selectors to achieve the results we want. The table below, taken from [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors) shows the basic combinators and how you write them and how you can expect them to work.

<table>
 <thead>
  <tr>
   <th scope="col">Name</th>
   <th scope="col">Syntax</th>
   <th scope="col">Selects</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Selector list</td>
   <td><code>A, B</code></td>
   <td>Any element matching A or B. <strong>Group of Selectors</strong> is not considered to be a combinator).</td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_selectors">Descendant combinator</a></td>
   <td><code>A B</code></td>
   <td>Any element matching B that is a <em>descendant</em> of an element matching A (that is, a child, or a child of a child, etc.). the combinator is one or more spaces or dual greater than signs.</td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors">Child combinator</a></td>
   <td><code>A &gt; B</code></td>
   <td>Any element matching B that is a <em>direct child</em> of an element matching A.</td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_selectors">Adjacent sibling combinator</a></td>
   <td><code>A + B</code></td>
   <td>Any element matching B that is the next <em>sibling</em> of an element matching A (that is, the next child of the same parent).</td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_selectors">General sibling combinator</a></td>
   <td><code>A ~ B</code></td>
   <td>Any element matching B that is one of the next <em>siblings</em> of an element matching A (that is, one of the next children of the same parent).</td>
  </tr>
 </tbody>
</table>

### <a id="css-selector-list"></a>Selector List

When you want more than one element on the page to have the same style you use selector lists. For example, let's say that we want all headings to have the same font, different than the one we use on the copy/body text. We can use something like this:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: roboto-slab, sans-serif
}
```

This declaration uses [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) where available and falls back to a generic sans serif font when the primary is not available.

### <a id="css-descendant-combinators">Descendant Combinators

These combinators are perfect when we want to style children of a given element. It doesn't matter how deep the children are, if the parent has a child matching the subsequent attribute (you can have more than two) then the selector matches.

In this example we have two selectors.

The first one will match all the paragraphs (`p` elements) that are inside a `div`.

The second selector will only match if the paragraph descendent has a descendant child `em` and will change the size of the text and make it italics.

```css
div p {
  font-family: Roboto, Verdana, Arial;
  font-size: 1rem;
}

div p em {
  font-family: Roboto, Verdana, Arial;
  font-size: 0.8rem;
  font-style: italic;
}
```

### <a id="css-child-combinators"></a>Child Combinators

Any element matching B that is a direct child of an element matching A. The difference with the general desccendant selector is where the child has to be located. With child combinator the second selector must be a direct child of the element to its left; for example the following selector would choose all the `p` elements inside the `body` but no the `p` elements inside a `div` that is inside the `body` element

```css
body > p {
  font-size: 16px;
}
```


### <a id="css-adjacent-sibling-selector"></a>Adjacent sibling combinator

An adjacent combinator matches when the second element is the next immediate sibling of an element matching the first (that is, the next child of the same parent).

This example takes advantage that the first paragraph of a document doesn't have a paragraph sibling (there are no paragraphs before the first) and uses it to give indentation to all other paragraphs.

```css
p + p {
  text-indent: 2em;
}
```

### <a id="css-general-sibling-selector"></a>General sibling combinator

Any element matching B that is one of the next siblings of an element matching A (that is, one of the next children of the same parent). It doesn't have to be the immediate sibling like with the adjacent sibling combinator, as long as there is a matching element for the second part of our selector then it will match.

This example will work as long as there are two paragraphs at the same level, like inside the body or a div element.

```css
p ~ p {
  text-indent: 2em;
}
```


## <a id="css-structural"></a>Structural pseudo-classes

Newer versions of the slectors specification introduced the concept of structural pseudo-classes to allow selection based on information that is in the document but cannot be represented by other means in CSS.

### <a id="css-structural-root"></a>:root pseudo-class

The :root pseudo-class represents an element that is the root of the document. In HTML, this is always the HTML element.

:root is equivalent to HTML but has a higher specificity.

The
```css
:root {
  font-family: "Roboto", Verdana, Arial;
}
```

### <a id="css-structure-nthchild"></a>:nth-child() pseudo-class

The `:nth-child(an+b)` pseudo-class notation represents an element that has an+b-1 siblings before it in the document tree, for any positive integer or zero value of n.

Since it works in siblings, `:nth-child()` is not required to have a parent.

For values of a and b greater than zero, this divides the element's children into groups of a elements with the last group taking the remainder, and selecting the bth element of each group.

For example, this allows the selectors to address every other row in a table, and could be used to alternate the color of paragraph text in a cycle of four.

The a and b values must be integers (positive, negative, or zero). The index of the first child of an element is 1.

`:nth-child()` can also take **odd** and **even** as arguments. **odd** has the same signification as 2n+1, and **even** has the same signification as 2n.

```css
/* represents every odd row of an HTML table */
tr:nth-child(2n+1) {
  background-color: lightgrey;
}
tr:nth-child(odd) {
  background-color: lightgrey;
}

/* represents every even row of an HTML table */
tr:nth-child(2n)  {
  background-color: white;
}
/* same */
tr:nth-child(even)  {
  background-color: white;
}
```

### <a id="css-structure-nthoftype"></a>:nth-of-type()

The :nth-of-type(an+b) pseudo-class is similar to `:nth-child` but represents an element that has the specified number of identical siblings (with the same element name) before it in the document tree.

It is not required to have a parent. It also accepts the `even` and `odd` values.

This allows an author to alternate the position of floated images. Odd images (2n+1) are floated to the left and even images float to the left.

```css
img:nth-of-type(2n+1) {
  float: right;
}

img:nth-of-type(2n) {
  float: left;
}
```

### <a id="css-structure-nthlastoftype">:nth-last-of-type()

The :nth-last-of-type(an+b) pseudo-class notation represents an element that is in a given position among its peers (has an+b-1 identical siblings after it) in the document tree.  This is the inverse of `nth-first-of-type()`.

It is not required to have a parent because it only deals with siblings elements. It also accepts the ‘even’ and ‘odd’ values.

To represent the last h2 children of an XHTML body except the first and last, the CSS could look like this:

```css
h2:nth-last-of-type(1) {
  background-color: pink;
}
```

### <a id="css-structure-firstchild"></a>:first-child

The `:first-child` pseudo-class represents an element that is first in a list of siblings. This is equivalent to `:nth-child(1)`.

The example below makes the first paragraph inside a div slightly larger than what the other paragraphs will look llike.

```css
div > p:first-child {
  font-size: 112%;
}
```

### <a id="css-structure-lastchild"></a>:last-child

 The `:last-child` pseudo-class represents an element that is last in a list of siblings. It is equivalent to `:nth-last-child(1)`.

The following selector represents the last direct li child of an ordered list.

```css
ol > li:last-child {
  margin-bottom: 2em;
}
```

### <a id="css-structure-firstoftype"></a>:first-of-type

The :first-of-type pseudo-class represents an element that is the first sibling of its type. This is the same as using :nth-of-type(1).

The following selector represents a definition title dt inside a definition list dl, this dt being the first of its type in the list of children of its parent element.

```css
dl dt:first-of-type {
  margin-top: 1.25em;
}
```

It is a valid description for the first two dt elements in the following example but not for the third one:

```html
<dl>
 <dt>gigogne</dt> <!-- matches -->
 <dd>
  <dl>
   <dt>fusée</dt> <!-- matches -->
   <dd>multistage rocket</dd>
   <dt>table</dt> <!-- does not match -->
   <dd>nest of tables</dd>
  </dl>
 </dd>
</dl>
```

### <a id="css-structure-lastoftype"></a>:last-of-type

The :last-of-type pseudo-class represents an element that is the last sibling of its type. Same as :nth-last-of-type(1).

The following selector represents the last data cell td of a table row tr.

```css
tr > td:last-of-type {
  background-color: lightblue;
}
```

### <a id="css-structure-onlychild"></a>:only-child

The :only-child pseudo-class represents an element that has no siblings, meaning that it's the only element inside the parent.

If the div element has only one child, then the selector will match.

```css
div p:only-child {
  background-color: lime;
}
```

### <a id="css-structure-onlyoftype"></a>:only-of-type

The :only-of-type pseudo-class represents an element that has no siblings with the same type. Unlike the `:only-child` pseudo class, there can be other elements in the parent.

The example below matches if there is one, and only one `p` element inside its parent div.

```css
div p:only-of-type {
  background-color: lime;
}
```

### <a id="css-structure-empty"></a>:empty

The :empty pseudo-class represents an element that has no children at all. Children can be either element nodes or text (including whitespace). Comments, processing instructions, and CSS content do not affect whether an element is considered empty.

`p:empty` is a valid representation of the following fragment:

```html
<p></p>
```

### <a id="css-structure-not"></a>The negation pseudo-class

The negation pseudo-class, `:not()`, is a functional notation taking a simple selector (excluding the negation pseudo-class itself) as an argument. It represents an element that is not represented by its argument.

Negations may not be nested; :not(:not(...)) is invalid.

Note also that since pseudo-elements are not simple selectors, they are not a valid argument to :not(). Because of this limitation we cannot do things like `:not(:first-of-type())`

The selector below will match all children inside our div that are not paragraphs (the `p` element).

```css
div :not(p) {
  color: blue;
}
```

## <a id="css-origin-and-cascade"></a>Stylesheet origin and the cascade

We've figured out how to write CSS but that intoduces the following issue. Let's say that we have two different rules defined for the same element.

```css
p {
  color: lightgrey;
  font-family: Roboto, Verdana, Arial;
  font-size: 1em;
  line-height: 1.5;
}

p {
  font-family: Verdana, Arial;
  font-size: 0.75em;
  line-height: 1.25;
}
```

**Which one will the browser use?**

IF there are no other rules covering the elements and the rules, the element would take the following properties

```css
p {
  color: lightgrey; /* no competing rule */
  font-family: Verdana, Arial; /* last one wins */
  font-size: 0.75em; /* last one wins */
  line-height: 1.25; /* last one wins */
}
```

<aside class="info">
  <p>Firefox is the only remaining browser that has a way for users to set their own stylesheets. Check out <a href="https://davidwalsh.name/firefox-user-stylesheet">How to Add a User Stylesheet in Firefox</a> for more information on how to use them.</p>
</aside>

### <a id="css-which-definition"></a>Which definition will the browser use?

The example in the last section covered multiple rules affecting the element in the stylesheet you created. That's the simplest of all scenarios.

To confuse matters furter, let's say that one of the rules is in the browser's default style stylesheet and one in the style sheet you created. Does the answer change?

Does the answer change if the second rule is in a user's custom style sheet that they use to make reading web content easier?

To answer these questions we need to work with three concepts: the origin of a style sheet, the cascade and specificity.

The CSS cascade is the algorithm that selects CSS declarations to set the correct value for CSS properties. CSS declarations originate from different origins:

- The browser has a basic style sheet that gives a default style to any document. These style sheets are named **user-agent stylesheets**
- The author of the Web page defines styles for the document. These are the most common style sheets. Oftentimes, several of them are defined. In this context they are known as **author styelseheets**
- The reader, the user of the browser, may have a custom style sheet to tailor its experience. They are known as **user stylesheets**

Style sheets come from these different origins and they overlap in scope (different stylesheets will define styles for the same element). The cascade defines how they interact. The cascade performs the following tasks

1. It first filters all the rules from the different sources to keep only the rules that apply to a given element. That means rules whose selector matches the given element and which are part of an appropriate media at-rule.
2. Then it sorts these rules according to their importance, that is, whether or not they are followed by `!important`, and by their origin.

The cascade is in ascending order, which means that `!important` values from a user-defined style sheet have precedence over normal values originated from a user-agent style sheet. The precedence order is show in the table below:

<table>
   <thead>
    <tr>
     <th scope="col">&nbsp;</th>
     <th scope="col">Origin</th>
     <th scope="col">Importance</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>1</td>
     <td>user agent</td>
     <td>normal</td>
    </tr>
    <tr>
     <td>2</td>
     <td>user</td>
     <td>normal</td>
    </tr>
    <tr>
     <td>3</td>
     <td>author</td>
     <td>normal</td>
    </tr>
    <tr>
     <td>4</td>
     <td>CSS Animations</td>
     <td><em>Will be discussed in a separate document</em></td>
    </tr>
    <tr>
     <td>5</td>
     <td>author</td>
     <td><code>!important</code></td>
    </tr>
    <tr>
     <td>6</td>
     <td>user</td>
     <td><code>!important</code></td>
    </tr>
    <tr>
     <td>7</td>
     <td>user agent</td>
     <td><code>!important</code></td>
    </tr>
   </tbody>
  </table>

In case of equality, the rule that appears last in the last document according to the list wins and gets used.

### <a id="css-specificity"></a>Specificity

Specificity is how the CSS engine in your web browser knows how to piroritize CSS rules that live in the same stylesheet. Specificity is built based on the rules complexity. The figure below, taken from <a href="http://www.standardista.com/css3/css-specificity/">Estelle Weyl's blog</a> gives you an idea of the different specificity weight for different CSS selectors

<figure>
  <img src="https://publishing-project.rivendellweb.net/wp-content/uploads/2017/12/specificityimg.png" alt="description of the CSS cascade using marine life and analogies">
  <figcaption>CSS speciFISHity from <a href="http://www.standardista.com/css3/css-specificity/">Estelle Weyl</a></figcaption>
</figure>


Between the cascade and specificity we have a fairly flexible system that, in addition to providing us with conflict resolution when our rules conflict, gives us the basic of writing CSS, which we'll cover in mode detail in the next section.


## <a id="css-building-stylesheets"></a>Building Stylesheets

The syntax for CSS is fairly simple. You have a selector (the item that we want to style) and one or more rules that will change individual asppects of the selector visual display. The basic syntax for CSS looks like this:

```css
selectorName {
  ruleName: RuleValue;
}
```

One or more of these rules make up a stylsheet. We'll look at an example styelseheet below. Don't worry too much about what the different selectors and rules do. We'll cover some of them in <a href="#exercises" class="xref">exercises</a> and <a href="#advanced" class="xref">advanced topics</a>; you can also copy the stylesheet to use on your own projects.

```css

/* Adds a font and color to the root of the document */
html {
  font-family: Roboto, Arial, sans-serif;
  color: #000000;
}

/* Make all headers navy blue */
h1, h2, h3, h4, h5, h6 {
  color: navy;
}

/* Make level 5 and 6 headings uppercase*/
h5, h6 {
  text-transform: uppercase;
}


```

</section>
