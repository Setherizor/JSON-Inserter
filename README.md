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