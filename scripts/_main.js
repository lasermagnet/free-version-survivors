/*
The project uses the MIT licensed CodeMirror 5 library which is linked through esm.sh.

All other code (and events) in this project file are available under MIT license.

Kenney art assets are CC0 licensed, other assets are copyright (C) by Tibor Kovács (Teebor9).

MIT License

Copyright (C) 2025 by Bence Fodor (Fodi) <fodi.be>.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
import { basicSetup, EditorView } from "https://esm.sh/codemirror@6.0.2/"
import { javascript } from "https://esm.sh/@codemirror/lang-javascript@6.2.4/"
import { basicDark } from "https://esm.sh/@fsegurai/codemirror-theme-basic-dark@6.2.2/"
import { rules } from "./_rules.js"

runOnStartup(async runtime => {
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime) {

	function customStringify(obj, space = 2) {
		const isPrimitiveArray = arr =>
			Array.isArray(arr) && arr.every(isPrimitiveType => ['string', 'number', 'boolean'].includes(typeof isPrimitiveType))

		return JSON.stringify(obj, (key, value) => value, space)
			.replace(/(\[\s+)([^[\]]+?)(\s+\])/g, replacement => {
				try {
					const parsed = JSON.parse(replacement)
					return isPrimitiveArray(parsed) ? JSON.stringify(parsed) : replacement
				} catch {
					return replacement
				}
			})
	}

	let editorView = new EditorView({
		doc: customStringify(rules),
		extensions: [basicSetup, javascript(), basicDark],
		parent: document.getElementById("rule-editor"),
	})

	function addStyle(styleString) {
		const style = document.createElement('style')
		style.textContent = styleString
		document.head.append(style)
	}
	addStyle(`#rule-editor {overflow: auto}`)
}
