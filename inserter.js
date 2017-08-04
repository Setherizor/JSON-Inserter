const URL = './data.json'

/**
 * Decouples map function so we can use it more cleverly
 * @param {Function} f
 * @param {Thing to Iterate over} x
 */
const map = x => f => Array.prototype.map.call(x, f)

/**
 * Uses Fetch API to make a request to given url
 * Converts data into JSON, then returns data
 * @param {Function} callback
 * @param {String} url
 */
const generalRequest = (callback, url) => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => callback(data))
}
/**
 * Either applies CSS Styles, or inserts body into element
 * @param {String} value
 * @param {JSON Object} obj
 * @param {DOM Element} el
 * @param {Obj Styles} ostyles
 */
const apply = function (value, obj, el, ostyles) {
  (value === 'body')
    ? el.innerHTML = obj[value]
    : el.style[value] = ostyles[value]
}
/**
 * Inserts body, checks for styles, then applys them if they exist
 * Undefined Styles Check with default case
 * @param {Object} obj
 * @param {Element} el
 */
const handleAttributes = function (obj, el) {
  const fancyAttributes = (obj) => {
    const styles = obj.style || {
      'backgroundColor': 'Beige ',
      'width': 'inherit',
      'fontWeight': '900'
    }
    apply('body', obj, el)
    const keys = Object.keys(styles)
    map(keys)((item) => {
      apply(item, obj, el, styles)
    })
  }
  (obj.type === 'html') ? fancyAttributes(obj) : el.innerText = obj
}
/**
 * Uses JSON to get elements with same "name"
 * Then maps each element from each "name"
 * @param {JSON} json
 */
const applyData = function (json) {
  const els = (x) => document.getElementsByName(x)
  map(Object.keys(json))((key) => {
    map(els(key))((element) => {
      handleAttributes(json[key], element)
    })
  })
}

// Final function to run everything
const getData = () => generalRequest((response) => applyData(response), URL)

getData()
