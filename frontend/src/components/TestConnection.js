import React, { useState } from "react";
import axiosInstance from "../api/axiosConfig";

const TestConnection = () => {
  const [response, setResponse] = useState(null);

  const testConnection = async () => {
    try {
      const res = await axiosInstance.get("/products"); // Example: Fetch all products
      setResponse(res.data); // Save the response data
    } catch (error) {
      console.error("Error connecting to backend:", error);
      setResponse({ error: "Failed to connect to backend" });
    }
  };

  return (
    <div>
      <h1>Test Backend Connection</h1>
      <button onClick={testConnection}>Test Connection</button>
      {response && (
        <pre>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default TestConnection;
