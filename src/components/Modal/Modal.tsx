import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  onClose: () => void;
  largeImage: string;
}

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

export default function Modal({ onClose, largeImage }: Props) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={largeImage} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}
