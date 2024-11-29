import { useEffect, useState } from "react";
import Lists from "./Lists";

function App() {
  const [images, setImages] = useState([]);
  const [errors, setError] = useState(null);
  const [load, setLoad] = useState(1);
  const newItem = 20;

  const url = "https://restcountries.com/v2/all";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("field to fetch Please Reload");
      }
      const result = await response.json();

      const start = (load - 1) * newItem;
      const end = start + newItem;
      const newCountries = result.slice(start, end);

      setImages((prev) => {
        const refresh = new Set(prev.map((country) => country.alpha3Code));
        return [
          ...prev,
          ...newCountries.filter((country) => !refresh.has(country.alpha3Code)),
        ];
      });
    } catch (error) {
      setError(error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setLoad((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [load]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
