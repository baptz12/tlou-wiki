import runnersPic from '../assets/runners.jpg';
import stalkersPic from '../assets/stalkers.jpg';
import clickersPic from '../assets/clickers.jpg';
import Card from '../Card.jsx'

function Ennemis() {
    return (
      <div>
        <Card 
          image={runnersPic}
          title="Les coureurs" 
          text="Les coureurs sont les premiers et les plus faibles des infectés qui apparaissent dans The Last of Us." 
        />
        <Card 
          image={stalkersPic}
          title="Les rôdeurs" 
          text="Les rôdeurs sont le deuxième stade des infectés dans The Last of Us. Il leur faut entre deux semaines et un an pour atteindre ce stade d'infection." 
        />
        <Card 
          image={clickersPic}
          title="Les claqueurs" 
          text="Les cliqueurs constituent le troisième stade de l'infection dans The Last of Us, ils ont subi une exposition prolongée au champignon et possèdent désormais une force qui dépasse largement celle d'un humain moyen." 
        />
      </div>
    );
  }

export default Ennemis;