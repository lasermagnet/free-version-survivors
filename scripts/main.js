
import { basicSetup, EditorView } from "https://esm.sh/codemirror@6.0.2/"
import { javascript } from "https://esm.sh/@codemirror/lang-javascript@6.2.4/"
import { basicDark } from "https://esm.sh/@fsegurai/codemirror-theme-basic-dark@6.2.2/"
import * as rules from "./rules.js"

runOnStartup(async runtime => {
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.

	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime) {
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.

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

	//runtime.addEventListener("tick", () => Tick(runtime));


}
/*
function Tick(runtime) {
	// Code to run every tick
}
*/