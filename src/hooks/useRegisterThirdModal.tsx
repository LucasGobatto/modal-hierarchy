import { ModalPriority } from 'context/ModalContext';

import { ThirdModal } from '@components/modal/ThirdModal';
import { useModal } from 'context/ModalContext';

export const useRegisterThirdModal = () => {
  const { addToQueue, removeFromQueue } = useModal();

  const registerModal = () => {
    addToQueue({
      id: 'third-modal',
      component: <ThirdModal />,
      priority: ModalPriority.ThirdModal,
    });
  };

  const unregisterModal = () => {
    removeFromQueue('third-modal');
  };

  return { registerModal, unregisterModal };
};
