function insert_Row() {
    //Write your code here	
	/*
	const tbl = document.getElementById("sampleTable");
	let rowCount = tbl.rows.length;
	let newRowCt = rowCount+1;
    // console.log("Total number of rows: " + rowCount);
	
	let newRow = document.createElement("tr");
	
	let newCell1 = document.createElement("td");
	newCell1.textContent = `New Cell1`;
	
	let newCell2 = document.createElement("td");
	newCell2.textContent = `New Cell2`;

	newRow.appendChild(newCell1);
	newRow.appendChild(newCell2);

	tbl.appendChild(newRow);
	*/

	let table = document.getElementById('sampleTable');
	//let btn = document.querySelector('input');
	//btn.addEventListener("click", addRow);
 
	//function addRow(){
		let row = table.insertRow(0);
		row.insertCell(0).innerHTML = "New Cell1";
		row.insertCell(1).innerHTML = "New Cell2";
}
