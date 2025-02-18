import { useEffect, useState } from 'react';
import { useRegisterFirstModal } from './useRegisterFirstModal';
import { calculateNextShowTime } from '../pages/home/utils';
import { FIRST_MODAL_SHOW_THRESHOLD } from './constants';

export const useShowFirstModal = () => {
  const { registerModal, unregisterModal } = useRegisterFirstModal();
  const [nextShowTime, setNextShowTime] = useState<number | null>(null);

  const getNextShowTime = () => {
    if (!nextShowTime) {
      const nextShowTime = calculateNextShowTime(FIRST_MODAL_SHOW_THRESHOLD);

      setNextShowTime(nextShowTime);
      return nextShowTime;
    }

    return nextShowTime;
  };

  const updateNextShowTime = () => {
    setNextShowTime(calculateNextShowTime(FIRST_MODAL_SHOW_THRESHOLD));
  };

  useEffect(() => {
    const nextShowTime = getNextShowTime();

    const timeout = setTimeout(() => {
      registerModal();
    }, nextShowTime);

    return () => clearTimeout(timeout);
  }, []);

  const closeModal = () => {
    updateNextShowTime();
    unregisterModal();
  };

  return { nextShowTime, closeModal };
};
