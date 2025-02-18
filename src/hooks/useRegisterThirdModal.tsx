import { ThirdModal } from '@components/modal/ThirdModal';
import { ModalPriority, useModal } from 'context/ModalContext';
import { useCallback } from 'react';

export const useRegisterThirdModal = () => {
  const { addToQueue, removeFromQueue } = useModal();

  const registerModal = useCallback(() => {
    addToQueue({
      id: 'third-modal',
      component: <ThirdModal />,
      priority: ModalPriority.ThirdModal,
    });
  }, [addToQueue]);

  const unregisterModal = useCallback(() => {
    removeFromQueue('third-modal');
  }, [removeFromQueue]);

  return { registerModal, unregisterModal };
};
