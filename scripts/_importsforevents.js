import { rules } from "./_rules.js"

function getEditorContent() {
    let cmEditorElement = document.querySelector(".cm-editor")
    let editorView = cmEditorElement.querySelector(".cm-content").cmView.view
    return editorView.state.doc.toString()
}