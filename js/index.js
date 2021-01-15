// (function () {
//   function tempFunc(){console.log("yeah?");};

// })();

// document.getElementById("myTable").innerHTML = "<h3>No Records Found!!</h3>";
function enter_data(e) {
	e.preventDefault();
	var table = document.getElementById("showTable"); 		  
		
    if(table.rows.length <= 1)
    {
    	table.innerHTML = `<tr><th>Personnel</th><th>Action</th></tr>`;
    }
 	var row = table.insertRow(table.rows.length);//find the no of rows
 	var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    // console.log(table.insertRow(table.rows.length))
    // if()

    cell1.innerHTML =  document.getElementById("showText").value; 
    document.getElementById("showText").value= "";
    cell2.innerHTML = `<i class="fa fa-trash" onclick="deleteFunction(this)"></i>`;
    // this keyword refers to the current object in a method or constructor. 
}	

function deleteFunction(row) {
	if ( confirm("Do you want to delete a Row?") ) {
		let table = document.getElementById("showTable"); 
		// debuggers
		let rowIndex = row.parentNode.parentNode.rowIndex;

		table.deleteRow(rowIndex);

		if(table.rows.length === 1) {
			table.innerHTML = '<tr>No Personnels available</tr>';
		}
	} else {
		return false;
	}
}
