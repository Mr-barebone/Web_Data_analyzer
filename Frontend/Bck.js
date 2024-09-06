// Function to fetch the default file from FastAPI. when calling Bck_fetchDefaultFile, you will get a promise and can handle the data wherever needed.
// The export keyword makes this function available to be used in other files
export function Bck_fetchDefaultFile(socket) {

    // creates and returns a Promise. A Promise is a special object in JavaScript that represents 
    // the result of an asynchronous operation (like fetching data over the WebSocket).
    return new Promise((resolve, reject) => {
        // resolve: A function that you call when the operation is successful (i.e., when you get the data).
        // reject: A function you call when there’s an error or failure (i.e., if the data cannot be fetched). 
        
        // Connection opened is already handled in index.js
        // Listen for messages from the server
        // Here attachong an eventListener to the websocket that will fires when the server sends a message to the websocket.
        // When the event occurs the code inside the function runs
        socket.addEventListener('message', function (event) {
        console.log("Message from server", event.data);
        try{
        // Assuming the server sends the CSV data in JSON format
        const data = JSON.parse(event.data);// converts JSON string into javascript object
        resolve(data); //  calls the resolve function, which completes the promise successfully and sends the parsed data back to the code that called this function.
        }catch (error) {
            reject("Error parsing data from the server: "+ error);
        }
    });

    // Handle errors
    socket.addEventListener('error', function (error) {
        console.error("WebSocket error:", error);
        reject("WebSocket error: " + error);
    });

    // Handle WebSocket closure
    socket.addEventListener('close', function (event) {
        console.log("WebSocket connection closed:", event);
        reject("WebSocket closed before receiving data.");
    });

    // Send a message to the server to request the default file
    socket.send(JSON.stringify({ type: "get_default_file" }));
})
}

export async function getADANIPORTSDefault() {
    try {
        // Perform the GET request
        const response = await fetch('http://127.0.0.1:5000/otb/get_default');
        
        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Parse the JSON response
        const result = await response.json();
        
        // Access the JSON string from the result
        const dataJson = result.data;
        
        // Parse the JSON string into a JavaScript object
        const dataObject = JSON.parse(dataJson);
        
        console.log('Parsed Data:', dataObject); // This is a JavaScript object
        
        return dataObject
        // Use the data as needed
        // e.g., populate a table or chart
        
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

export async function populateDropdown() {
    // Perform the GET request
    const response = await fetch('http://127.0.0.1:5000/otb/get_available_companies');
    // Check if the response is ok
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    // Parse the JSON response
    const result = await response.json();
        
    // Access the JSON string from the result
    const dataJson = result.data;
    
    // Parse the JSON string into a JavaScript object
    const dataObject = JSON.parse(dataJson);
    
    console.log('Parsed Data:', dataObject); // This is a JavaScript object 
}