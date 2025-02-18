import { useEffect, useState } from 'react';
import { useRegisterSecondModal } from './useRegisterSecondModal';
import { calculateNextShowTime } from '../pages/home/utils';
import { SECOND_MODAL_SHOW_THRESHOLD } from './constants';
import { DateTime } from 'luxon';

export const useShowSecondModal = () => {
  const { registerModal, unregisterModal } = useRegisterSecondModal();
  const [nextShowTime, setNextShowTime] = useState<number | null>(null);

  const getNextShowTime = () => {
    if (!nextShowTime) {
      const nextShowTime = calculateNextShowTime(SECOND_MODAL_SHOW_THRESHOLD);

      setNextShowTime(nextShowTime);
      return nextShowTime;
    }

    return nextShowTime;
  };

  const updateNextShowTime = () => {
    setNextShowTime(calculateNextShowTime(SECOND_MODAL_SHOW_THRESHOLD));
  };

  useEffect(() => {
    const nextShowTime = getNextShowTime();

    const timeout = setTimeout(() => {
      registerModal({ someProp: DateTime.now().toFormat('HH:mm:ss') });
    }, nextShowTime);

    return () => clearTimeout(timeout);
  }, []);

  const closeModal = () => {
    updateNextShowTime();
    unregisterModal();
  };

  return { nextShowTime, closeModal };
};
