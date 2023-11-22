import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/ImageGrid.css";

const ImageGrid = () => {
  const [logos, setLogos] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Fetching logos with Axios
    const fetchData = async () => {
      try {
        //const response = await axios.get("http://127.0.0.1:8000/api/logos/?format=json");
        const response = await axios.get("http://127.0.0.1:8000/api/partners");
        console.log(response.data)

         // Sort the logos based on ID (asc - desc)
         const sortedLogos = response.data.sort((a, b) => {
          if (sortOrder === 'asc') {
            return a.id - b.id;
          } else {
            return b.id - a.id;
          }
        });

        setLogos(sortedLogos);
      } catch (error) {
        console.error("Error fetching images:", error);
      }

    };

    fetchData();
  }, [sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div>
  <button className="sortBtn" onClick={toggleSortOrder}>
          Toggle Order ({sortOrder.toUpperCase()})
        </button><br /><br /><br /><br />
      <div className="image-grid">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item"> 
            {/*<img src={logo.logo} alt={`logo ${index + 1}`} />*/}
            <img src={"http://localhost:8000/images/"+logo.logo} alt={`logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
