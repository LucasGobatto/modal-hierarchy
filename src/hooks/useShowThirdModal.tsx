import { useEffect } from 'react';
import { useState } from 'react';
import { useRegisterThirdModal } from './useRegisterThirdModal';
import { calculateNextShowTime } from '../pages/home/utils';
import { THIRD_MODAL_SHOW_THRESHOLD } from './constants';

export const useShowThirdModal = () => {
  const { registerModal, unregisterModal } = useRegisterThirdModal();
  const [nextShowTime, setNextShowTime] = useState<number | null>(null);

  const getNextShowTime = () => {
    if (!nextShowTime) {
      const nextShowTime = calculateNextShowTime(THIRD_MODAL_SHOW_THRESHOLD);

      setNextShowTime(nextShowTime);
      return nextShowTime;
    }

    return nextShowTime;
  };

  const updateNextShowTime = () => {
    setNextShowTime(calculateNextShowTime(THIRD_MODAL_SHOW_THRESHOLD));
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
