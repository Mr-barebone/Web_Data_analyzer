// import {Bck_fetchDefaultFile} from "./Bck.js";
import {getADANIPORTSDefault} from "./Bck.js";
import {dropdownList} from "./dropdown.js";
import {apiStructure} from "./apiStructure.js"
// import { initializeWebSocket } from "./socket.js";


document.addEventListener("DOMContentLoaded", function() {
    initializeWebSocket(handleReceivedData)
    get_py_data();
});
function get_py_data() 
    {
        const socket = new WebSocket('ws://127.0.0.1:5000/otb/get_data_ws');
        const dropdown = document.getElementById("dropdownMenu");
        dropdown.value = "ADANIPORTS.csv"; 

        getJSONData()


        // Add an event listener to the button
        document.getElementById('cumulativeButton').addEventListener('click', function() {
            sendCumulative(socket);
        });
    }

function handleReceivedData(receivedData) {
    try {
        // Parse the received data (assuming it's JSON)
        const parsedData = JSON.parse(receivedData);
        console.log('Parsed WebSocket data:', parsedData);
        displayJSONData(parsedData);
    } catch (error) {
        console.error('Error parsing WebSocket data:', error);
    }
}

async function displayJSONData(JSONdata) {
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
}


async function getJSONData() {
    console.log('we sre in getJSONData')
    const dropdown = document.getElementById("dropdownMenu");
    const SelectedValue = dropdown.value;
    console.log(SelectedValue)
    // let JSONdata = null;
    var JSONdata = await getADANIPORTSDefault();
    dropdown.addEventListener('change', async function () {
        const SelectedValue = dropdown.value;
            console.log(SelectedValue)
            JSONdata = await dropdownList(SelectedValue);
            displayJSONData(JSONdata);

        // }
    })
    // console.log('Data of display:', JSONdata); // This is a JavaScript object
    // Check if jsonData is valid
    if (!JSONdata) {
        console.error('Failed to retrieve or parse data.');
        return;
    }
    displayJSONData(JSONdata);


}

function sendCumulative(socket) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        apiStructure.cumulative = true; // Update cumulative field
        apiStructure.company = document.getElementById('dropdownMenu').value;
        // Send the message over the WebSocket
        socket.send(JSON.stringify(apiStructure));
        console.log("Cumulative sent:", apiStructure);
    } else {
        console.log("WebSocket is not connected.");
    }
}

// WebSocket URL for the server
const WS_URL = 'ws://127.0.0.1:5000/otb/get_data_ws';
let socket;

function initializeWebSocket(onMessageCallback) {
    // Create a WebSocket connection
    console.log("iniitializing ws");
    socket = new WebSocket(WS_URL);

    // Connection opened
    socket.onopen = function (event) {
        console.log('WebSocket connection opened:', event);
    };

    // Listen for messages
    socket.onmessage = function (event) {
        console.log('Received message:', event.data);
        if (typeof onMessageCallback === 'function') {
            onMessageCallback(event.data); // Pass received data to callback
        }
    };

    // Handle WebSocket errors
    socket.onerror = function (error) {
        console.error('WebSocket error:', error);
    };

    // Handle WebSocket close event
    socket.onclose = function () {
        console.log('WebSocket connection closed');
    };

    return socket;
}
