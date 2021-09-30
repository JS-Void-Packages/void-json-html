/*
    Author - Mrthomas20121
    Version: 1.0.0
    License: MIT
 */
const fs = require('fs')

/**
 * Parse a Json file to html
 * @param {string} file 
 */
const parse = (file) => {
    // convert the file to Javascript Object
    const obj = JSON.parse(fs.readFileSync(file, 'utf8'))
    return parseObj(obj)
}

/**
 * Parse a Json object to html
 * @param {{}} obj 
 */
 const parseObj = (obj) => {
    // convert the file to Javascript Object
    let html = ''
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            html = convertObjectToHTML(key, obj[key], '')
        }
    }
    return html
}

/**
 * Convert an Object to HTML
 * @param {string} name current object name
 * @param {{}} object object data
 * @param {string} html html code
 */
const convertObjectToHTML = (name, object, html) => {
    html+=`<${name}>`
    for(let key in object) {
        if(object.hasOwnProperty(key)) {
            let o = object[key]
            // if it's an object, run the function on that object
            if(typeof o === 'object') {
                html = convertObjectToHTML(key, o, html)
            }
            // if it's a text.
            else if(key == 'text') {
                html+= o
            }
            // anything else that isn't a text or an object
            else {
                if(html.endsWith('>')) {
                    html = html.slice(0, html.length-1)
                }
                html+=` ${key}="${o}">`
            }
        }

    }
    html+=`</${name}>`
    return html
}

module.exports = {
    parse,
    parseObj
}