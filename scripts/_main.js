/*
import { basicSetup, EditorView } from "https://esm.sh/codemirror@6.0.2/"
import { javascript } from "https://esm.sh/@codemirror/lang-javascript@6.2.4/"
import { basicDark } from "https://esm.sh/@fsegurai/codemirror-theme-basic-dark@6.2.2/"
import { rules } from "./_rules.js"
*/
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
	/*
		let editorView = new EditorView({
			doc: customStringify(rules),
			extensions: [basicSetup, javascript(), basicDark],
			parent: document.getElementById("rule-editor"),
		})
	*/
	function addStyle(styleString) {
		const style = document.createElement('style')
		style.textContent = styleString
		document.head.append(style)
	}
	addStyle(`#rule-editor {overflow: auto}`)
}
