![preview](https://raw.githubusercontent.com/sinapsa/vForm/develop/docs/logo.png)

[min]: https://raw.githubusercontent.com/sinapsa/vForm/master/dist/vform.min.js
[max]: https://raw.githubusercontent.com/sinapsa/vForm/master/dist/vform.js
[docs]: http://sinapsa.github.io/vForm/

### Install
Optionally, you can install vForm with bower:
```shell
bower install bower install vform
```
Or download the [production version][min] / [development version][max].


### Requirements
vForm is working best with jQuery 2.X, however it can work well with older version of jQuery as well 1.11.x
if you're using an older version - you can run the unit test.

### Including files

```html
<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
<script src="vform.min.js"></script>
```

### How to use it
```javascript
var form = $('#my-form').vForm(function(){
	return form.validate();
});
```

### Documentation
See the full [documentation & examples][docs].

### Compatibility
vForm is fully functional on all modern browsers, as well as some old ones such as IE 8+. It is also designed to work on touch devices such as mobile phones or tablets.

## License

[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Sinapsa - R&D Center

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
