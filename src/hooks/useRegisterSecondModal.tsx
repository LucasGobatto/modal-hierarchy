import { SecondModal, SecondModalProps } from '@components/modal/SecondModal';
import { ModalPriority, useModal } from 'context/ModalContext';

export const useRegisterSecondModal = () => {
  const { addToQueue, removeFromQueue } = useModal();

  const registerModal = (props: SecondModalProps) => {
    addToQueue({
      id: 'second-modal',
      component: <SecondModal {...props} />,
      priority: ModalPriority.SecondModal,
    });
  };

  const unregisterModal = () => {
    removeFromQueue('second-modal');
  };

  return { registerModal, unregisterModal };
};
