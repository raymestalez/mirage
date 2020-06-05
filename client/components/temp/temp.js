
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
