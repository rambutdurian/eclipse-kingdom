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
    }, []);

    return (
        <div className="App">
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
        </div>
    );
}

export default App;
