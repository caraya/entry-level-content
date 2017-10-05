
# Structural Markup

The first set of elements we'll discuss are structural elements or tags. These are the elements that represent the organization of the content in the page.

The first group of tags are the ones that organize the page: `<html>`, `<head>` and `<body>`.

The `<html>` element is our main container for the page.

The `<head>` of the document is where we place information about the page


These are some of the metadata elements that can go inside the `<head>` of an HTML document

- [link](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element)  allows authors to link their document to other resources. The destination of the link(s) is given by the href attribute, which must be present and must contain a valid URL. If the href attribute is absent, then the element does not define a link
- [meta](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element)  represents various kinds of metadata that cannot be expressed using other elements in this list. The most often used is the charset attribute to indicate the character set used in the document
- [noscript](https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element)  represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed
- [script](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element) allows authors to include dynamic script and data blocks in their documents. The element is invisible the user
- [style](https://html.spec.whatwg.org/multipage/semantics.html#the-style-element) embeds CSS style sheets in their documents. The style element is one of several inputs to the styling processing model. The element is also invisible to the user
- [title](https://html.spec.whatwg.org/multipage/semantics.html#the-title-element)  represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context

The `<body>` holds the content of the page. This is where we will place the majority of our content.

A second group of structural tags will help further organize the page content. These elements tell the browser to create a new hierarchy of elements inside them and are different than the third group we'll discuss later that are logical containers that will not change the document outline.

- [article](https://html.spec.whatwg.org/multipage/sections.html#the-article-element) represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content
- [aside](https://html.spec.whatwg.org/multipage/sections.html#the-aside-element) represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed publications
- [nav](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element)  represents a section of a page that links to other pages or to parts within the page: a section with navigation links
- [section](https://html.spec.whatwg.org/multipage/sections.html#the-section-element) represents a generic section of a document or application. A section, in this context, is a thematic grouping of content, typically with a heading

The third, and last, group of structural elements are logical containers for other elements and elements that represent the content hierarchy (headings, subheadings and heading groups) of the page's content.

- [header](https://html.spec.whatwg.org/multipage/sections.html#the-header-element)  represents a group of introductory or navigational aids
- [footer](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element)  represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like
- [h1-h6 and hgroup](https://html.spec.whatwg.org/multipage/sections.html#headings-and-sections) The first element of heading content in an element of sectioning content represents the heading for that section. Subsequent headings of equal or higher rank start new (implied) sections, headings of lower rank start implied subsections that are part of the previous one. In both cases, the element represents the heading of the implied section.

<aside class="message info">
<h2>Tag Soup Markup</h2>

While we strive to create good web content and to show you how you do it, the wider web doesn't always play by the rules. You may find demos and pages that have markup like this:

```html
<html>
  <body>
    <h1>Page title</h1>
    <p>Content</p>
  </body>
</html>
```

While this is technically valid HTML (in the sense that a browser will still display the content of a page like the example above) it is not correct HTML.

Browsers must render old content, some of it 20+ years old, as faithfully as possible. This include working with tags and practices that have been deprecated by the groups that recommends standards for the web or removed by one or more browser vendors.


So it boils down to this: **Do things the right way from the start**

</aside>
