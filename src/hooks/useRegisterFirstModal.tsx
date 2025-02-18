import { FirstModal } from '@components/modal/FirstModal';
import { useCallback } from 'react';
import { ModalPriority, useModal } from 'context/ModalContext';

export const useRegisterFirstModal = () => {
  const { addToQueue, removeFromQueue } = useModal();

  const registerModal = useCallback(() => {
    addToQueue({
      id: 'first-modal',
      component: <FirstModal />,
      priority: ModalPriority.FirstModal,
    });
  }, [addToQueue]);

  const unregisterModal = useCallback(() => {
    removeFromQueue('first-modal');
  }, [removeFromQueue]);

  return { registerModal, unregisterModal };
};
