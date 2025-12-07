import { rules } from "./_rules.js"

function getRulesFromEditor() {
    return document.querySelector(".cm-editor")?.querySelector(".cm-content").cmView.view.state.doc.toString()
}