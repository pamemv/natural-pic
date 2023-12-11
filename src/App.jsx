import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
const PHOTOS_URL = "/photos.json";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(PHOTOS_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.photos);
      })
      .catch((error) => {
        console.error("Error fetching photos.json:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {!loading && (
        <Routes>
          <Route path="/" element={<Home photos={data} />} />
          <Route path="/favoritos" element={<Favorites photos={data} />} />
        </Routes>
      )}
    </div>
  );
};
export default App;
