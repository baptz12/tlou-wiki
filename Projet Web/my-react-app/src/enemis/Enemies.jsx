import runnersPic from '../assets/runners2.jpg';
import stalkersPic from '../assets/stalkers2.jpg';
import clickersPic from '../assets/clickers2.jpg';
import colossePic from '../assets/colosse.jpg';
import Card from '../Card.jsx';

function Ennemis() {
    return (
      <div className="cards-container">
        <Card 
          image={runnersPic}
          title="Les coureurs" 
          text="Les coureurs sont les premiers et les plus faibles des infectés qui apparaissent dans The Last of Us. Faîtes attention à vous car ils très rapides" 
        />
        <Card 
          image={stalkersPic}
          title="Les rôdeurs" 
          text="Les rôdeurs sont le deuxième stade des infectés dans The Last of Us. Il leur faut entre deux semaines et un an pour atteindre ce stade d'infection." 
        />
        <Card
          image={clickersPic}
          title="Les claqueurs" 
          text="Les claqueurs constituent le troisième stade de l'infection, ils ont subi une exposition prolongée au champignon et possèdent une force largement supérieure à celle des humains." 
        />
        <Card
          image={colossePic}
          title="Les colosses" 
          text="Les Colosses sont la quatrième et l'une des plus dangereuses étapes de l'infection, car elle est celle qui prend le plus de temps à se développer (environ une décennie)." 
        />
      </div>
    );
  }

export default Ennemis;
