# Learning to build the web

This is by no means an exhaustive treatment of  the content to be covered and, like the outline before it, it's meant as a starting point and will definitely get further elaboration over time.

## What is the web

The web is many things.  It's a development platform;  it delivers applications, it delivers content, it plays media (encrypted or not). There is very few things that the web can't display on its own. Rather than address the latest and greatest framework we'll cover the building blocks of the web how to use them and where to go once you've learned the basics.

### History

# Basic Components of the web

We group these componentstogether without implying one is more important than the other. Developers need to use all these technologies together to make the web work (well). This is most important when we discuss accessibility as this will permeate the other areas.

## HTML

HTML (HyperText Markup Language) is the language we use to write web content. Whether it's a simple page or a complex application, they all sue the saame structure and presentation tags.

We'll use the following example throughout our discussion of HTML and its components.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello!</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <script src="/script.js" defer></script>
  </head>
  <body>
    <h1>Hi there!</h1>

    <p>I'm your cool new webpage.</p>

  </body>
</html>
```

In these sections we'll cover the following topics:

- Structural Markup
- Presentational Markup
- Elements, Attributes and Accessibility
- Integrating CSS and JS to our web pages

