const HTML = require('./json_to_html')

let obj = HTML.parseObj({
    "a": {
		"class": "button button-red",
		"href": "#test",
		"b":{
			"text":"Click me"
		}
	}
})

console.log(obj)
// should log <a class="button button-red" href="#test"><b>Click me</b></a>