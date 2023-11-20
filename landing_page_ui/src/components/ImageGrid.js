import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/ImageGrid.css";

const ImageGrid = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    // Fetching logos with Axios
    const fetchData = async () => {
      try {
        const response = await axios.get("your-backend-endpoint");
        setLogos(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="image-grid">
      {logos.map((logo, index) => (
        <div key={index} className="logo-item">
          <img src={logo.url} alt={`logo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
