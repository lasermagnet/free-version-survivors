import { rules } from "./rules.js"

console.log("Default rules:", rules)

function getModifiedRules() {
    let cmEditorElement = document.querySelector(".cm-editor")
    let editorView = cmEditorElement.querySelector(".cm-content").cmView.view
    return editorView.state.doc.toString()
}

