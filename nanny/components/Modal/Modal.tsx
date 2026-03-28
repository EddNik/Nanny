'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { X } from 'lucide-react';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

function Modal({ children, onClose, isOpen }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    const originalOverflow = document.body.style.overflow;

    // if (isOpen) {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    // } else {
    // document.body.style.overflow = 'auto';
    // }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose, isOpen]);

  function handleBackDropClose(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
  if (!isOpen) return null;

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label="Close modal"
      onClick={handleBackDropClose}
    >
      <div className={css.modalContent}>
        <button
          className={css.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
