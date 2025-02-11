'use client';

import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [message, setMessage] = useState<string>(''); // State to store the message

  useEffect(() => {
    // Fetching data from the Spring Boot backend
    fetch('http://localhost:8080/api/stocks')
      .then((response) => response.json())
      .then((data) => setMessage(data.message)) // Extract the message from the response object
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <h1>Message from Backend</h1>
      <p>{message}</p> {/* Render the message string */}
    </div>
  );
};

export default HomePage;
