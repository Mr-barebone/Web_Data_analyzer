document.addEventListener("DOMContentLoaded", function() {
    get_py_data();
});
function get_py_data()
     {
        const socket = new WebSocket('ws://127.0.0.1:5000/otb/get_data_ws');
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