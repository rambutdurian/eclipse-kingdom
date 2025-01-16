<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import ExampleComponent from './ExampleComponent';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080')  // Make sure the backend is running on this port
            .then((response) => response.json())  // Parse the response as JSON
            .then((data) => setData(data.message))  // Update state with the message
            .catch((error) => console.error('Error fetching data:', error));
=======
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import "./App.css";

function App() {
    const [data, setData] = useState([]);

    // Fetch data from the backend when the component mounts
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/data")
            .then((response) => {
                setData(response.data); // Update state with the data
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
>>>>>>> ed60205b05aa60b40e6baf3aaf3a90d647bb5db0
    }, []);

    return (
        <div className="App">
<<<<<<< HEAD
            <h1>React with Java Backend</h1>
            <ExampleComponent />
            <p>{data ? data : 'Loading...'}</p>
=======
            <Header />
            <main>
                <h2>Welcome to Eclipse Kingdom</h2>
                <p>Enjoy your day at the theme park!</p>
                <h3>Items Available:</h3>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
>>>>>>> ed60205b05aa60b40e6baf3aaf3a90d647bb5db0
        </div>
    );
}

export default App;
