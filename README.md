# JSON Inserter
This tool is a simple way tool to use a .json file to manage pieces of text you want inserted into a website.
# Global Variables
- URL: complete url for file location
# Usage
- First create a JSON file with the data formatted as seen in the example data.json file.
- Then decide if you want to host the file alongside the rest of your site, or remotely.
- Change the URL global variables accordingly.
- Create HTML elements withe the "name" attrribute the same as the name in the JSON document.
# Misc Info
in the json document all entried will be of type text, or html.
- HTML will be treated as an object, then an element, and inserted, with extra styles or what have you.
- TEXT will have no extra fields, and will simply be read into the inner text of the corresponding element in the DOM.

Also, the remote request is written with callbacks.

# CSS to JS Attributes
| background                    | background                |
|-------------------------------|---------------------------|
| background-attachment         | backgroundAttachment      |
| background-color              | backgroundColor           |
| background-image              | backgroundImage           |
| background-position           | backgroundPosition        |
| background-repeat             | backgroundRepeat          |
| border                        | border                    |
| border-bottom                 | borderBottom              |
| border-bottom-color           | borderBottomColor         |
| border-bottom-style           | borderBottomStyle         |
| border-bottom-width           | borderBottomWidth         |
| border-color                  | borderColor               |
| border-left                   | borderLeft                |
| border-left-color             | borderLeftColor           |
| border-left-style             | borderLeftStyle           |
| border-left-width             | borderLeftWidth           |
| border-right                  | borderRight               |
| border-right-color            | borderRightColor          |
| border-right-style            | borderRightStyle          |
| border-right-width            | borderRightWidth          |
| border-style                  | borderStyle               |
| border-top                    | borderTop                 |
| border-top-color              | borderTopColor            |
| border-top-style              | borderTopStyle            |
| border-top-width              | borderTopWidth            |
| border-width                  | borderWidth               |
| clear                         | clear                     |
| clip                          | clip                      |
| color                         | color                     |
| cursor                        | cursor                    |
| display                       | display                   |
| filter                        | filter                    |
| font                          | font                      |
| font-family                   | fontFamily                |
| font-size                     | fontSize                  |
| font-variant                  | fontVariant               |
| font-weight                   | fontWeight                |
| height                        | height                    |
| left                          | left                      |
| letter-spacing                | letterSpacing             |
| line-height                   | lineHeight                |
| list-style                    | listStyle                 |
| list-style-image              | listStyleImage            |
| list-style-position           | listStylePosition         |
| list-style-type               | listStyleType             |
| margin                        | margin                    |
| margin-bottom                 | marginBottom              |
| margin-left                   | marginLeft                |
| margin-right                  | marginRight               |
| margin-top                    | marginTop                 |
| overflow                      | overflow                  |
| padding                       | padding                   |
| padding-bottom                | paddingBottom             |
| padding-left                  | paddingLeft               |
| padding-right                 | paddingRight              |
| padding-top                   | paddingTop                |
| page-break-after              | pageBreakAfter            |
| page-break-before             | pageBreakBefore           |
| position                      | position                  |
| float                         | styleFloat                |
| text-align                    | textAlign                 |
| text-decoration               | textDecoration            |
| text-decoration: blink        | textDecorationBlink       |
| text-decoration: line-through | textDecorationLineThrough |
| text-decoration: none         | textDecorationNone        |
| text-decoration: overline     | textDecorationOverline    |
| text-decoration: underline    | textDecorationUnderline   |
| text-indent                   | textIndent                |
| text-transform                | textTransform             |
| top                           | top                       |
| vertical-align                | verticalAlign             |
| visibility                    | visibility                |
| width                         | width                     |
| z-index                       | zIndex                    |