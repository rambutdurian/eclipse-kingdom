const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for all origins
app.use(cors());

// Sample data
const data = [
    { id: 1, name: "Item 1", description: "PLEASE BAGI JADI" },
    { id: 2, name: "Item 2", description: "HELLO GUYSS" },
    { id: 3, name: "Item 3", description: "PIJA TESTINGGG " },
];

// API route to get data
app.get("/api/data", (req, res) => {
    res.json(data); // Send data as JSON response
});

// Default route to check if the server is running
app.get("/", (req, res) => {
    res.send("Server is working!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
