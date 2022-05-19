import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Characters from "./Components/Characters";
import axios from "axios";
import { useState, useEffect } from "react";

//const url = "http://hp-api.herokuapp.com/api/characters";

// const fetchData = async () => {
//const response = axios.get(url);
// const response = await axios.get(url);
//console.log("re", Response);
// };
// fetchData();

function App() {
  // const data = [
  //   {
  //     name: "harry",
  //     url: "https://images.rtl.fr/~c/770v513/rtl/www/1200629-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg",
  //   },
  //   {
  //     name: "hermione",
  //     url: "https://lespotiches.com/wp-content/uploads/2020/06/hermione-granger-portrait-flickr.jpg",
  //   },
  //   {
  //     name: "ron",
  //     url: "https://resize.programme-television.ladmedia.fr/r/650,406/img/var/premiere/storage/images/tele-7-jours/diapos-tv/harry-potter-ron-weasley-neville-londubat-que-sont-devenus-les-eleves-de-poudlard-photos-4634970/poudlard/95453998-1-fre-FR/Poudlard.jpg",
  //   },
  // ];
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://hp-api.herokuapp.com/api/characters"
      );
      console.log("response.data", response.data);

      const modifiedData = response.data.splice(0, 10);

      setData(modifiedData);
    };

    // fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      {data !== null ? <Characters data={data} /> : null}
    </div>
  );
}
// <Characters data={data} /> a la place de {data ....}ds
export default App;
