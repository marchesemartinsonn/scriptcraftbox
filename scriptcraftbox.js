// Create a class named ScriptCraftBox
class ScriptCraftBox {
    constructor() {
        this.scripts = [];
    }

    // Method: add a script to the ScriptCraftBox
    addScript(script) {
        this.scripts.push(script);
        console.log(`Added ${script} to the ScriptCraftBox.`);
    }

    // Method: remove a script from the ScriptCraftBox
    removeScript(script) {
        const index = this.scripts.indexOf(script);
        if (index !== -1) {
            this.scripts.splice(index, 1);
            console.log(`Removed ${script} from the ScriptCraftBox.`);
        } else {
            console.log(`${script} is not found in the ScriptCraftBox.`);
        }
    }

    // Method: list all scripts in the ScriptCraftBox
    listScripts() {
        console.log("Scripts in the ScriptCraftBox:");
        this.scripts.forEach(script => {
            console.log(script);
        });
    }
}

// Create an instance of ScriptCraftBox named myScriptCraftBox
const myScriptCraftBox = new ScriptCraftBox();

// Add scripts to the ScriptCraftBox
myScriptCraftBox.addScript("Script 1");
myScriptCraftBox.addScript("Script 2");
myScriptCraftBox.addScript("Script 3");

// List all scripts in the ScriptCraftBox
myScriptCraftBox.listScripts();

// Remove a script from the ScriptCraftBox
myScriptCraftBox.removeScript("Script 2");

// List all scripts in the ScriptCraftBox after removal
myScriptCraftBox.listScripts();
