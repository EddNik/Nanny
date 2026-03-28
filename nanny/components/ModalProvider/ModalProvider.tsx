'use client';

import { useAuthStore } from '@/lib/store/authStore';
import LoginForm from '../AuthForms/LoginForm';
import Modal from '../Modal/Modal';
import RegistrationForm from '../AuthForms/RegistrationForm';

export default function ModalProvider() {
  const {
    isLoginModalOpen,
    isRegisterModalOpen,
    closeLoginModal,
    closeRegisterModal,
  } = useAuthStore();

  return (
    <>
      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <LoginForm onSuccess={closeLoginModal} />
      </Modal>

      <Modal isOpen={isRegisterModalOpen} onClose={closeRegisterModal}>
        <RegistrationForm onSuccess={closeRegisterModal} />
      </Modal>
    </>
  );
}
