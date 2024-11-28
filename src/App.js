import { useEffect, useState } from "react";
import Lists from "./Lists";

function App() {
  const [images, setImages] = useState([]);
  const [errors, setError] = useState([]);

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
      {!errors ? <p>errors.message</p> : <Lists images={images} />}
    </div>
  );
}

export default App;
