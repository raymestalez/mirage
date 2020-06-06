![](/adventures/wild-rat-chase/)
<img style="width:150px;margin:auto;display:block;"
src="/adventures/wild-rat-chase/"/>


<div className="stat">
<div className="title">
Memory
</div>
<div className="inputs-wrapper">
<span>{memoryCount} /</span>
<input type="number"
className="value"
value={sheet.memorySize}
onChange={(e)=>
    this.update(e.target.value,
		"memorySize")}/>
</div>
</div>


<div className="stat">
<div className="title">
Inventory
</div>
<div className="inputs-wrapper">
<span>{itemCount} /</span>
<input type="number"
className="value"
value={sheet.inventorySize}
onChange={(e)=>
    this.update(e.target.value,
		"inventorySize")}/>
</div>
</div>


can add more
var sheet = this.props.sheets[0]
var numberOfItems
var canAddMore
if (this.props.type == 'Spell' ||this.props.type == 'Ability') {
    numberOfItems = sheet.spells.length + sheet.abilities.length
    canAddMore = numberOfItems < sheet.memorySize
    //console.log(numberOfItems,sheet.memorySize)
} else {
    numberOfItems = sheet.magicItems.length + sheet.equipment.length
    canAddMore = numberOfItems < sheet.inventorySize
}

