
import React, { useState, useEffect } from "react";
import axios from "axios";

interface UserData {
        name: string;
        // Add other properties here if needed
}

function Topics() {
        const url = "https://jsonplaceholder.typicode.com/users";
        const [data, setData] = useState<UserData[]>([]);

        const fetchInfo = () => {
                return axios.get(url).then((res) => setData(res.data));
        };

        useEffect(() => {
                fetchInfo();
        }, []);

        return (
                <div className="App">
                        <h1 style={{ color: "green" }}>using Axios Library to Fetch Data</h1>
                        <center>
                                {data.map((dataObj, index) => {
                                        return (
                                                <div
                                                        style={{
                                                                width: "15em",
                                                                backgroundColor: "#CD8FFD",
                                                                padding: 2,
                                                                borderRadius: 10,
                                                                marginBlock: 10,
                                                        }}
                                                >
                                                        <p style={{ fontSize: 20, color: "white" }}>{dataObj.name}</p>
                                                </div>
                                        );
                                })}
                        </center>
                </div>
        );
}

export default Topics;