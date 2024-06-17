import React, { useState, useEffect } from 'react';
import joelPic from '../assets/joel_test.webp';
import joelVid from '../assets/joel_video.gif';
import Card from '../Card.jsx';
import Modal from '../Modal.jsx';

function Cast() {
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
    <div className="cast-container">
        <Card
        image={joelPic}
        title="Joel Miller"
        text="Joel Miller est l'un des deux protagonistes principaux du jeu. C'est un survivant endurci qui vit et travaille comme chasseur, puis comme contrebandier et trafiquant d'armes."
        onClick={() => handleCardClick("Joel Miller", "Joel est un acteur impitoyable du marché noir. Indépendant et astucieux, il s'est endurci à la suite d'un terrible drame. Au cours de son périple, il trouve la force d'endosser le rôle de père et de se battre afin de créer un avenir meilleur pour lui et Ellie. Cinq ans plus tard, Joel s'est installé à Jackson, dans le Wyoming, aux côtés de son frère Tommy et de sa femme Maria, et, bien sûr, d'Ellie. S'il ne regrette pas la décision qu'il a prise cinq années auparavant, il devra bientôt faire face aux conséquences de ses actions.", joelVid)}
        />
        <Modal
        show={modalData.show}
        onClose={handleCloseModal}
        title={modalData.title}
        text={modalData.text}
        image={modalData.image}
      />
    </div>
    );
}

export default Cast;