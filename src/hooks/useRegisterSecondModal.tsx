import { SecondModal, SecondModalProps } from '@components/modal/SecondModal';
import { ModalPriority, useModal } from 'context/ModalContext';
import { useCallback } from 'react';

export const useRegisterSecondModal = () => {
  const { addToQueue, removeFromQueue } = useModal();

  const registerModal = useCallback(
    (props: SecondModalProps) => {
      addToQueue({
        id: 'second-modal',
        component: <SecondModal {...props} />,
        priority: ModalPriority.SecondModal,
      });
    },
    [addToQueue],
  );

  const unregisterModal = useCallback(() => {
    removeFromQueue('second-modal');
  }, [removeFromQueue]);

  return { registerModal, unregisterModal };
};
