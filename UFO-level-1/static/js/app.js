// from data.js
var tableData = data;

// YOUR CODE HERE!
// Reference the table body
var tbody = d3.select("tbody");

// print console
    console.log(tableData);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");
var dateinput = d3.select("#datetime")

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Select the input element and get the raw HTML node
var tableElement = d3.select("tbody");
function buildTable(data){
    tableElement.html("")
    console.log(data)
    data.forEach(element => {
        const row = tableElement.append("tr")
        Object.values(element).forEach(value =>{
            let cell = row.append("td")
            cell.text(value)
        })

    });
}
buildTable(tableData)

// Get the value property of the input element

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    var datevalue = dateinput.property("value");

    var filteredData = tableData.filter(row => row.datetime === datevalue);

    console.log(filteredData);
    buildTable(filteredData)
}