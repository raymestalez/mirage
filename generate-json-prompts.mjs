import fs from 'fs'

function readFile(fileName) {
  return fs.promises.readFile(fileName, {encoding: 'utf-8'});
}

function getFirstLine(text) {

    var firstline = lines.shift();   // read and remove first line
    var rest = lines.join("\n");     // re-join the remaining lines
    return firstline
}

function getText(text) {
    var lines = text.split("\n");   // split all lines into array
    var firstline = lines.shift();   // read and remove first line
    var rest = lines.join("\n");     // re-join the remaining lines
    return rest
}

function removeHashtags(text) {
    text = text.split(" ")
    text.shift()
    text = text.join(" ")
    return text
}



var files = [
    "./markdown/prompts/goals.md",
    "./markdown/prompts/action-adventure.md",
    "./markdown/prompts/exploration.md",
    "./markdown/prompts/social.md",
    "./markdown/prompts/mystery.md",
    "./markdown/prompts/stealth.md",
    "./markdown/prompts/complications.md",
    "./markdown/prompts/villains.md",
    "./markdown/prompts/villain-goals.md",
    "./markdown/prompts/villain-powers.md",    
]
var categories = [
    "Adventure Goal",
    "Action/Adventure",
    "Exploration",
    "Social/Intrigue",
    "Mystery/Investigation",
    "Stealth/Heist",
    "Complication",
    "Description",
    "Goal",
    "Powers"
]
var outputs = [
    './json/prompts/goals.json',
    './json/prompts/action-adventure.json',
    './json/prompts/exploration.json',
    './json/prompts/social.json',
    './json/prompts/mystery.json',
    './json/prompts/stealth.json',
    './json/prompts/complications.json',
    "./json/prompts/villains.json",
    "./json/prompts/villain-goals.json",
    "./json/prompts/villain-powers.json",    
    
]
var categoriesJson = []
files.map((file,i) => {
    console.log("Processing ", file)
    readFile(file).then((text)=>{
	var lines = text.split("\n")
	lines = lines.map((line)=>{
	    line = line.trim()
	    return line
	})
	lines = lines.filter(l => l) // filter out empty strings
	var categoryJson = {
	    type: categories[i],
	    prompts: lines
	}
	categoriesJson.push(categoryJson)
	var outputJson = JSON.stringify(categoryJson)
	console.log("Writing ", outputs[i])
	fs.writeFile(outputs[i], outputJson , 'utf8', ()=>{})
    })

})

setTimeout(() => {
    var writeJson = JSON.stringify(categoriesJson)
    fs.writeFile('./json/prompts/prompts.json', writeJson, 'utf8', ()=>{})
}, 1000);
