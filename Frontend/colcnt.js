document.addEventListener("DOMContentLoaded", function() {
    get_py_data();
});
function get_py_data()
     {
        const socket = new WebSocket('ws://127.0.0.1:5000/otb/get_data_ws');

        const fileInput = document.getElementById("fileInput");
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

        document.getElementById("submitButton").addEventListener("click", async function(){
        // Define the JSON structure as described
        const jsonData = {
            fetch_from_db: true,
            page_size: 10,
            page_number: 0,
            history_date_range: { fro: '2024-12-01', to: '2023-12-13' },
            forecast_date_range: { fro: '2024-12-13', to: '2023-12-30' },
            sales_channel: [],
            product_family: [],
            sub_families: [],
            category: [],
            sub_category: [],
            suppliers: [],
            sku: [],
            top_items: [],
            store_class: [],
            select_all_kpi: false,
            table_changes: {},
            group_by: {
                status: false
            },
            expand: {
                status: false
            },
            secondary_filter: {
                HistoricalYear: [],
                history_dates: [],
                history_Quarter: [],
                history_month: [],
                history_week: [],
                history_Day: [],
                BudgetYear: [],
                BudgetDate: [],
                Quarter: [],
                month: [],
                week: [],
                Day: [],
                region: [],
                country: [],
                city: [],
                Store_Name: [],
                season: [],
                Channel: [],
                family: [],
                sub_family: [],
                supplier: [],
                category: [],
                dom_comm: [],
                sub_category: [],
                extended_sub_category: [],
                sub_category_supplier: [],
                article_score: []
            }
        };
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

    function processCSV(csvContent) {
        console.log("processing csv content")
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