/*
import { basicSetup, EditorView } from "https://esm.sh/codemirror@6.0.2/"
import { javascript } from "https://esm.sh/@codemirror/lang-javascript@6.2.4/"
import { basicDark } from "https://esm.sh/@fsegurai/codemirror-theme-basic-dark@6.2.2/"
import * as rules from "./_rules.js"

runOnStartup(async runtime => {
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime) {

	let editorView = new EditorView({
		doc: JSON.stringify(rules.rules, null, 2),
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
*/