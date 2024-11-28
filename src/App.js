import { useEffect, useState } from "react";
import Lists from "./Lists";

function App() {
  const [images, setImages] = useState([]);
  const [errors, setError] = useState(null);

  useEffect(() => {
    const url = "https://restcountries.com/v2/all";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("field to fetch Please Reload");
        }
        const result = await response.json();
        setImages(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {errors ? (
        <p>{errors.message}</p>
      ) : images.length > 0 ? (
        <Lists images={images} />
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}

export default App;
