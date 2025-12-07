
/*
import { basicSetup, EditorView } from "https://cdn.jsdelivr.net/npm/codemirror/+esm"
import { javascript } from "https://cdn.jsdelivr.net/npm/@codemirror/lang-javascript/+esm"
*/
import { basicSetup, EditorView } from "https://esm.sh/codemirror/"
import { javascript } from "https://esm.sh/@codemirror/lang-javascript/"
//import { Compartment } from "https://esm.sh/@codemirror/state"
//import { EditorView } from "https://esm.sh/@codemirror/view"
import { basicDark } from "https://esm.sh/@fsegurai/codemirror-theme-basic-dark"

function initCodeMirror() {

    console.log("rule editor element", document.getElementById("rule-editor"))
    console.log("basicSetup", basicSetup)
/*
    const myTheme = EditorView.theme({
        "&": {
            color: "white",
            backgroundColor: "#034"
        },
        ".cm-content": {
            caretColor: "#0e9"
        },
        "&.cm-focused .cm-cursor": {
            borderLeftColor: "#0e9"
        },
        "&.cm-focused .cm-selectionBackground, ::selection": {
            backgroundColor: "#074"
        },
        ".cm-gutters": {
            backgroundColor: "#045",
            color: "#ddd",
            border: "none"
        }
    }, { dark: true })
*/
    const editorView = new EditorView({
        doc: JSON.stringify(rules, null, 2),
        extensions: [basicSetup, javascript(), basicDark],
        parent: document.getElementById("rule-editor"),
    })


    /*
        let theme = new Compartment;
    
        editorView.dispatch({
            effects: theme.reconfigure(myTheme)
        })*/
}

function addStyle(styleString) {
    const style = document.createElement('style')
    style.textContent = styleString
    document.head.append(style)
}

//addStyle(`#rule-editor .cm-editor {font-size: 1rem;background:white}`)

addStyle(`
#rule-editor {overflow: auto}
`)

const rules = {

    "Player": { // Player rules
        "Health": 100,
        "Health_Max": 100,
        //"Health_Max_Multiplier": 1.05,
        "Experience_Target": 40,
        "Experience_Target_Multiplier": 1.15
    },

    // todo waves (with string names/labels)

    "Wave": { // Wave rules

        "Items": { // Item spawning
            "Cooldown": 10
        },

        "Enemies": { // Enemy spawning
            "Cooldown": 2,
            "Amount": 10,
        },

    },

    "Pools": {
        "Upgrades": [
            [1, "Heal1"],
            [1, "MaxHealth"],
            /*
[1, "MoveSpeed"],
[1, "WeaponLevelUpRandom"],
[1, "WeaponLevelUpAll"],
*/
        ],

        "Enemies": [
            [4, "Slime"],
            [1, "Rat"],
        ]
    },

    "Upgrades": {
        "Heal1": {
            "Label": "Minor healing",
            "Rule_Value": "Player.Health",
            "Rule_Max": "Player.Health_Max",
            "Multiply": 1,
            "Add": 20
        },
        "MaxHealth": {
            "Label": "Increase max health",
            "Rule_Value": "Player.Health_Max",
            "Multiply": 1.1,
            "Add": 0
        }
    },

    "Enemies": { // Enemy rules

        // todo: Slime Rat Crab Snake Werewolf Ent Ghost Tentacle Golem Dwarf Ogre Cultist Beholder
        "Slime": {
            "Health": 3,
            "Damage": 25,
            "Experience": 4,
            "Speed": 1
        },
        "Rat": {
            "Health": 5,
            "Damage": 50,
            "Experience": 9,
            "Speed": 2
        }
    },

    "Weapons": { // Weapon rules
        "Sword": {
            "Cooldown": 1,
            "Level": 2,
            "Damage": 10,
            //"Pierce": 2
        }
        // todo more weapons
    }

}

/*

# todo
[ ] enemy types: advanced spawning, damage and xp drop amounts
[ ] damage numbers
[ ] more weapons
[ ] stat upgrades: player speed, player max health, pickup distance
[ ] weapon upgrades: level, cooldown
[ ] game over screen

*/