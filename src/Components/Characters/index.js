//import "./index.css";

//const Characters = () => {
//return (
//  <div className="CharactersContainer">
//    <div className="card">
//      <img src="https://images.rtl.fr/~c/770v513/rtl/www/1200629-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg" />
//      <div className="legend"> Harry </div>
//    </div>
//    <div className="card">
//      <img src="https://images.rtl.fr/~c/770v513/rtl/www/1200629-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg" />
//      <div className="legend"> Harry </div>
//    </div>
//    <div className="card">
//      <img src="https://images.rtl.fr/~c/770v513/rtl/www/1200629-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg" />
//      <div className="legend"> Harry </div>
//    </div>
//  </div>
//  );
//};

//export default Characters;

import "./index.css";
import Card from "../Card";

const Characters = (props) => {
  // le tableau de data est props.data

  return (
    <div className="BigCharactersContainer">
      <div className="CharactersContainer">
        {props.data.map((Character) => {
          console.log(Character);
          return <Card name={Character.name} imageUrl={Character.image} />;
        })}
      </div>
    </div>
  );
};

export default Characters;
