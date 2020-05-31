import fs from 'fs'

function readFile(fileName) {
  return fs.promises.readFile(fileName, {encoding: 'utf-8'});
}

function getFirstLine(text) {
    var lines = text.split("\n");   // split all lines into array
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

var spellsJson = []
readFile("./markdown/spells.md").then((text)=>{
    var categories = text.split("----")
    
    categories.map((category)=>{
	category = category.trim()
	var categoryTitle = getFirstLine(category);
	categoryTitle = removeHashtags(categoryTitle).trim()
	var spells = getText(category).split("\n\n")
	spells.map((spell)=> {
	    var spellHeader = getFirstLine(spell)
	    var spellDescription = getText(spell)
	    spellHeader = removeHashtags(spellHeader).trim()
	    var spellTitle = spellHeader.split("|")[0].trim()
	    var spellLevel = parseInt(spellHeader.split("|")[1].trim())

	    var spellJson = {
		title: spellTitle,
		description: spellDescription,
		type: "Spell",
		category: categoryTitle,
		level: spellLevel
	    }

	    //console.log(spellJson)
	    spellsJson.push(JSON.stringify(spellJson))
	})
    })

    //console.log(spellsJson)
    fs.writeFile('./client/data/spells.json', "["+spellsJson+"]", 'utf8', ()=>{})
})



