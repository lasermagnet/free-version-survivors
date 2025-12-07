import { rules } from "./_rules.js"

console.log("Default ruleset:", rules)

function getEditorContent() {
    let cmEditorElement = document.querySelector(".cm-editor")
    let editorView = cmEditorElement.querySelector(".cm-content").cmView.view
    return editorView.state.doc.toString()
}

