function insert_Row() {
    //Write your code here	
	const tbl = document.getElementById("sampleTable");
	let rowCount = tbl.rows.length;
	let newRowCt = rowCount+1;
    // console.log("Total number of rows: " + rowCount);
	
	let newRow = document.createElement("tr");
	
	let newCell1 = document.createElement("td");
	newCell1.textContent = `New Cell1`;
	// newCell1.textContent = `Row${newRowCt} cell1`;
	
	let newCell2 = document.createElement("td");
	newCell2.textContent = `New Cell2`;
	// newCell2.textContent = `Row${newRowCt} cell2`;

	newRow.appendChild(newCell1);
	newRow.appendChild(newCell2);

	tbl.appendChild(newRow);
}
