# Presentational Markup

These element change the way your content looks and/or behaves in visual browsers. Some of these elements also support accessibility attributes beyond. You can customize the looks of these elements beyond it's default presentation using CSS. We'll talk about attributes in the next section and take a deeper look at accessibility in a later section of this tutorial.

<section class="message warning">
<p>I've classed these elements by function. It may not be the correct grouping.</p>
</section>

## Paragraphs

The most basic structual element in HTML is the [&lt;p>](https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element) element that represents a paragraph of information.

## Preformated text and code samples

By default HTML paragraphs ignore extra spacing. There are times, however, when we want to preserve the spacing on our text when we're working with computer code or poetry. This is where the [pre](https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element) element comes in handy.

The following example shows a Pascal program that we want to show our readers.

```html
<pre>var i: Integer;
begin
   i := 1;
end.</pre>
```

By wrapping it with `<pre>` tags we make sure that the spacing of the code will be preserved. It will look like this:

<pre>var i: Integer;
begin
   i := 1;
end.</pre>


The [code](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-elemen) comes works in a different situation. Say for example that you're writing code documentation and want to highlight the name of a file or a shell command. THis is where you'd use this element; it  represents a fragment of computer code. This could be an HTML element name, a file name, a command to run in the command line, a computer program, or any other string that a computer would recognize.

```html
<p>Install NPM by running <code>npm i -g npm</code> from your terminal</p>
```

And the code will look like this:

<p>Install NPM by running <code>npm i -g npm</code> from your terminal</p>

We can combine the two elements to give a semantically accurate structure to the markup surrounding our programs. We can re-write the program example like this:

```html
<pre><code>var i: Integer;
begin
   i := 1;
end.</code></pre>
```

and it should look the same as it did earlier.

<pre><code  style="background-color: transparent">var i: Integer;
begin
   i := 1;
end.</code></pre>

&nbsp;

### Citing content

Because of the orginal use for the web as a document sharing system, we have support for block quotations and sourcing where appropriate. The
[blockquote](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element) element acts as a container one or more elements from a different document and source.

The [cite](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-cite-element) elements indicates the name of the source the quotation is from. This is an inline element. In the example below the `cite` element  is inside a paragraph, which is one way I would normally cite content in blocks.

```html
<section>
 <blockquote>
  <p>The truth may be puzzling. It may take some work to grapple with.
  It may be counterintuitive. It may contradict deeply held
  prejudices. It may not be consonant with what we desperately want to
  be true. But our preferences do not determine what's true. We have a
  method, and that method helps us to reach not absolute truth, only
  asymptotic approaches to the truth — never there, just closer
  and closer, always finding vast new oceans of undiscovered
  possibilities. Cleverly designed experiments are the key.</p>
 </blockquote>
  <p>Carl Sagan, in "<cite>Wonder and Skepticism</cite>", from
 the <cite>Skeptical Inquirer</cite> Volume 19, Issue 1 (January-February
 1995)</p>
</div>
```

Blockquote works with large blocks of content but there are times when we need to quote smaller fragments inside a paragraph. That's the intended use of the
[q](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element) element. Here we also use the cite element as an attribute and provide a URL to point to the resource cited in the parent element.

```html
<p>The W3C page <cite>About W3C</cite> says the W3C's
mission is <q cite="https://www.w3.org/Consortium/">To lead the
World Wide Web to its full potential by developing protocols and
guidelines that ensure long-term growth for the Web</q>.</p>
```

### Listing content

- [ol](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)
- [ul](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)
- [li](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element)

### Definition Lists

- dl
- dt
- dd

### Figures and images

- [figure](https://html.spec.whatwg.org/#the-figure-element)
- [figcaption](https://html.spec.whatwg.org/#the-figcaption-element)
- [img](https://html.spec.whatwg.org/#the-img-element)


### Multimedia

- [video](https://html.spec.whatwg.org/#the-video-element)
- [audio](https://html.spec.whatwg.org/#the-audio-element)
- [track](https://html.spec.whatwg.org/#the-track-element)

### Special Containers

- div
- span

### Hyperlinks

- a

### Typographical styles

- em
- strong
- small
- dfn
- abbr
- sub and sup

### Semantic Inflections

- i
- b
- u

### When to break and when not to

- br
- wbr

### Class and ID attributes

- Class Attribute

The class and id attributes may be specified on all HTML elements.

When specified on HTML elements, the class attribute must have a value that is a set of space-separated tokens representing the various classes that the element belongs to.

Assigning classes to an element affects class matching in selectors in CSS, the getElementsByClassName() method in the DOM, and other such features.

There are no additional restrictions on the tokens authors can use in the class attribute, but authors are encouraged to use values that describe the nature of the content, rather than values that describe the desired presentation of the content.

- ID attribute

When specified on HTML elements, the id attribute value must be unique amongst all the IDs in the element's tree and must contain at least one character. The value must not contain any ASCII whitespace.

The id attribute specifies its element's unique identifier (ID).

There are no other restrictions on what form an ID can take; in particular, IDs can consist of just digits, start with a digit, start with an underscore, consist of just punctuation, etc.

An element's unique identifier can be used for a variety of purposes, most notably as a way to link to specific parts of a document using fragments, as a way to target an element when scripting, and as a way to style a specific element from CSS.


### Accessibility and Assistive Technology acommodations

[alt attribute](https://html.spec.whatwg.org/#attr-img-alt) for images




### Integrating CSS and JS to our web pages
