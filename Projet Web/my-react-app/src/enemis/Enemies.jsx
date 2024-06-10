import React, { useState, useEffect } from 'react';
import runnersPic from '../assets/test_runner.webp';
import stalkersPic from '../assets/test.png';
import clickersPic from '../assets/test_claqueur.png';
import colossePic from '../assets/test_colosse.png';
import runnersVid from '../assets/runners.gif';
import stalkersVid from '../assets/stalkers.gif';
import clickersVid from '../assets/clickers.gif';
import colosseVid from '../assets/colosse.gif';
import Card from '../Card.jsx';
import Modal from '../Modal.jsx';

function Ennemis() {
  const [modalData, setModalData] = useState({ show: false, title: '', text: '', image: '' });

  const handleCardClick = (title, text, image) => {
    setModalData({ show: true, title, text, image });
  };

  const handleCloseModal = () => {
    setModalData({ ...modalData, show: false });
  };

  useEffect(() => {
    const appContainer = document.querySelector('.app-container');
    if (modalData.show) {
      appContainer.classList.add('blur-background');
    } else {
      appContainer.classList.remove('blur-background');
    }
  }, [modalData.show]);

  return (
    <div className='big-container'>
    <div className="cards-container">
      <Card 
        image={runnersPic}
        title="Les coureurs"
        text="Les coureurs sont les premiers et les plus faibles des infectés qui apparaissent dans The Last of Us. Faîtes attention à vous car ils très rapides."
        onClick={() => handleCardClick("Les coureurs", "Les coureurs sont les premiers et les plus faibles des infectés qui apparaissent dans The Last of Us. Faîtes attention à vous car ils très rapides.", runnersVid)}
      />
      <Card 
        image={stalkersPic}
        title="Les rôdeurs"
        text="Les rôdeurs sont le deuxième stade des infectés dans The Last of Us. Il leur faut entre deux semaines et un an pour atteindre ce stade d'infection."
        onClick={() => handleCardClick("Les rôdeurs", "Les rôdeurs sont le deuxième stade des infectés dans The Last of Us. Il leur faut entre deux semaines et un an pour atteindre ce stade d'infection.", stalkersVid)}
      />
      <Card
        image={clickersPic}
        title="Les claqueurs"
        text="Les claqueurs constituent le troisième stade de l'infection, ils ont subi une exposition prolongée au champignon et possèdent une force largement supérieure à celle des humains."
        onClick={() => handleCardClick("Les claqueurs", "Les claqueurs constituent le troisième stade de l'infection, ils ont subi une exposition prolongée au champignon et possèdent une force largement supérieure à celle des humains.", clickersVid)}
      />
      <Card
        image={colossePic}
        title="Les colosses"
        text="Les Colosses sont la quatrième et l'une des plus dangereuses étapes de l'infection, car elle est celle qui prend le plus de temps à se développer (environ une décennie)."
        onClick={() => handleCardClick("Les colosses", "Les Colosses sont la quatrième et l'une des plus dangereuses étapes de l'infection, car elle est celle qui prend le plus de temps à se développer (environ une décennie).", colosseVid)}
      />
      <Modal
        show={modalData.show}
        onClose={handleCloseModal}
        title={modalData.title}
        text={modalData.text}
        image={modalData.image}
      />
    </div>
    </div>
  );
}

export default Ennemis;
