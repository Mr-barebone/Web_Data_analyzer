// import {Bck_fetchDefaultFile} from "./Bck.js";
import {getADANIPORTSDefault} from "./Bck.js";
import {dropdownList} from "./dropdown.js";

document.addEventListener("DOMContentLoaded", function() {
    get_py_data();
});
function get_py_data() 
    {
        const socket = new WebSocket('ws://127.0.0.1:5000/otb/get_data_ws');

        // Ensure the connection is established before calling Bck_fetchDefaultFile.
        // The WebSocket connection is created synchronously, but WebSocket connections take some time to establish. 
        // Therefore, it's better to wait until the WebSocket is fully connected before using it in the 
        // Bck_fetchDefaultFile function.
        // socket.addEventListener('open', function (event) {
        //     console.log("WebSocket connection established");

        //     // Now the connection is ready, pass the socket to the function
            
        // });
        displayJSONData()
        // selected_data_set = dropdownList()
        // getADANIPORTSDefault().then(data=>{
        //     console.log("Received data:", data);
        //     processCSV(data)
        // }).catch(error=>{
        //     console.error("error fetching data", error);
        // });

        const fileInput = document.getElementById("fileInput");
        
        fileInput.addEventListener("change", function(){
        const file = fileInput.files[0];
        // Read file content
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const csvContent = event.target.result;
                console.log("Csv content: ", csvContent);
                displayCSVData(csvContent)
                processCSV(csvContent); // Nove you can process the csv content 
            };
            reader.readAsText(file);
        }else{
            alert("Please select a csv file")
        }
    });

        document.getElementById("submitButton").addEventListener("click", async function(){
        // 
        try{
            socket.send(JSON.stringify(jsonData));
        }catch (error) {
            console.error('Error; ', error);
        }
        });
        socket.onopen = function(event) {
            console.log('Connection is open');
        };
        socket.onmessage = function(event) {
            console.log(`Received message: ${event.data}`);
            try {
                const parsedData = JSON.parse(event.data);
                console.log(parsedData);
            } catch (e) {
                console.error('Error parsing JSON:', e);
            }
        };
        socket.onerror = function(error) {
            console.error('Error occured on Websocket connection: ', error)
        };
        socket.onclose = function() {
            console.log('Websocket connection closed');
        };
    }





async function displayJSONData() {
    const dropdown = document.getElementById("dropdownMenu");
    const SelectedValue = dropdown.value;
    console.log(SelectedValue)
    // let JSONdata = null;
    var JSONdata = await getADANIPORTSDefault();
    dropdown.addEventListener('change', async function () {
        const SelectedValue = dropdown.value;

        // if (SelectedValue == "ADANIPORTS.csv")
        //     try{
        //     JSONdata = await getADANIPORTSDefault();
        //     }catch (error){
        //         console.error(error)
        //     }
        // else{
        //     console.log("Drop changed")
            console.log(SelectedValue)
            JSONdata = await dropdownList(SelectedValue);
            // dropdown.value = "ADANIPORTS.csv"; // This sets the dropdown to the desired default value
                // Parse JSON data and display with dynamic table
    const data = JSONdata.data;
    const columns = JSONdata.columns;

    console.log('Data:', data); // Log data to verify structure
    console.log('Columns:', columns); // Log columns to verify structure
    // Ensure data and columns are defined
    if (data && columns) {
        const tableHeader = document.getElementById("tableHeader");
        const tableBody = document.getElementById("tableBody");

        //clear existing content
        tableHeader.innerHTML = "";
        tableBody.innerHTML = "";

        // Create table headers from column names
        columns.forEach(column => {
            const th = document.createElement("th");
            th.textContent = column;
            tableHeader.appendChild(th);
        });

        // Create table rows from data
        data.forEach(row => {
            const tr = document.createElement("tr");
            columns.forEach((column, index) => {
                const td = document.createElement("td");
                td.textContent = row[index] || ""; // Access row data using index
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    } else {
        console.error('Data or columns are undefined.');
    }

        // }
    })
    // console.log('Data of display:', JSONdata); // This is a JavaScript object
    // Check if jsonData is valid
    if (!JSONdata) {
        console.error('Failed to retrieve or parse data.');
        return;
    }

    // Parse JSON data and display with dynamic table
    const data = JSONdata.data;
    const columns = JSONdata.columns;

    console.log('Data:', data); // Log data to verify structure
    console.log('Columns:', columns); // Log columns to verify structure
    // Ensure data and columns are defined
    if (data && columns) {
        const tableHeader = document.getElementById("tableHeader");
        const tableBody = document.getElementById("tableBody");

        //clear existing content
        tableHeader.innerHTML = "";
        tableBody.innerHTML = "";

        // Create table headers from column names
        columns.forEach(column => {
            const th = document.createElement("th");
            th.textContent = column;
            tableHeader.appendChild(th);
        });

        // Create table rows from data
        data.forEach(row => {
            const tr = document.createElement("tr");
            columns.forEach((column, index) => {
                const td = document.createElement("td");
                td.textContent = row[index] || ""; // Access row data using index
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    } else {
        console.error('Data or columns are undefined.');
    }


    function displayCSVData(csvContent) {
        const rows = csvContent.split("\n");
        const firstFiveRows = rows.slice(0, 6); // Get first 5 rows with 1 header
        
        const tableHeader = document.getElementById("tableHeader");
        const tableBody = document.getElementById("tableBody");
    
        //clear existing content
        tableHeader.innerHTML = "";
        tableBody.innerHTML = "";
    
        // Create table headers from first row (header row)
        const headers = firstFiveRows[0].split(",")
        headers.forEach(header => {
            const th = document.createElement("th");
            th.textContent = header.trim();
            tableHeader.appendChild(th)
        })
    }
    // ********Create table rows from data previous error************
    // data.forEach(row => {
    //     const tr = document.createElement("tr");
    //     columns.forEach((column, index) => {
    //         const td = document.createElement("td");
    //         td.textContent = row[column] || ""; // Use index to access row data
    //         tr.appendChild(td);
    //     });
    //     tableBody.appendChild(tr);
    // });

}

// addEventListener() method attaches an event handler to an element without overwriting existing event handlers. 
// You can add many event handlers to one element. You can add many event handlers of the same type to one element, 
// i.e two "click" events.

function processCSV(csvContent) {
    console.log("processing csv content")
}
// API
// Define the JSON structure as described
        // const jsonData = {
        //     fetch_from_db: true,
        //     page_size: 10,
        //     page_number: 0,
        //     history_date_range: { fro: '2024-12-01', to: '2023-12-13' },
        //     forecast_date_range: { fro: '2024-12-13', to: '2023-12-30' },
        //     sales_channel: [],
        //     product_family: [],
        //     sub_families: [],
        //     category: [],
        //     sub_category: [],
        //     suppliers: [],
        //     sku: [],
        //     top_items: [],
        //     store_class: [],
        //     select_all_kpi: false,
        //     table_changes: {},
        //     group_by: {
        //         status: false
        //     },
        //     expand: {
        //         status: false
        //     },
        //     secondary_filter: {
        //         HistoricalYear: [],
        //         history_dates: [],
        //         history_Quarter: [],
        //         history_month: [],
        //         history_week: [],
        //         history_Day: [],
        //         BudgetYear: [],
        //         BudgetDate: [],
        //         Quarter: [],
        //         month: [],
        //         week: [],
        //         Day: [],
        //         region: [],
        //         country: [],
        //         city: [],
        //         Store_Name: [],
        //         season: [],
        //         Channel: [],
        //         family: [],
        //         sub_family: [],
        //         supplier: [],
        //         category: [],
        //         dom_comm: [],
        //         sub_category: [],
        //         extended_sub_category: [],
        //         sub_category_supplier: [],
        //         article_score: []
        //     }
        // };