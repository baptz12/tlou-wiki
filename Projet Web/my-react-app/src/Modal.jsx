
function Modal({ show, onClose, title, text, image }) {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="modal-close" onClick={onClose}>&times;</span>
          <img className="modal-image" src={image} alt={title} />
          <h2 className="modal-title">{title}</h2>
          <p className="modal-text">{text}</p>
        </div>
      </div>
    );
  }
  
export default Modal;
