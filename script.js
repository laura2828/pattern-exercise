document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded(){

    var tableSize = prompt("Please enter the desired table size:");

    if (tableSize == null || tableSize == "" || tableSize==0) {
        tableSize = prompt("You need to enter a value. Please enter the desired table size:");
        createTable(tableSize);
    } else {
        createTable(tableSize);
    }

    function createTable(size) {
        var gridTable = document.getElementById("grid-table");
        
        for(var i=0; i<size; i++) {
            var row = document.createElement("tr");
            for(var j=0; j<size; j++) {
                var cell = document.createElement("td");

                if(i%2==0) {
                    if(j%2==1) {
                        cell.className = "black-box";
                    } else if(j%2==0) {
                        cell.className = "white-box";
                    }
                } else {
                    if(j%2==0) {
                        cell.className = "black-box";
                    } else if(j%2==1) {
                        cell.className = "white-box";
                    }
                }
                row.appendChild(cell);
                gridTable.appendChild(row);
            }
        } 
    }
}