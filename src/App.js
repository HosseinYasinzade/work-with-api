import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.com/v2/all";
    try {
      const fetchData = async () => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("field to fetch Please Reload");
        }
        const result = await response.json();
        console.log(result);

        setImages(result);
      };
      fetchData();
    } catch (error) {
      setError(error);
    }
  }, []);
  return (
    <div className="App">
      <ul>
        {images.map((img) => (
          <li key={img.alpha2Code}>
            <img src={img.flag}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
