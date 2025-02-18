import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { calculateNextShowTime } from '@pages/home/utils';

const formatTimer = (threshold: number) =>
  DateTime.now()
    .plus({ millisecond: calculateNextShowTime(threshold) })
    .diffNow()
    .toFormat('mm:ss');

export const useTimer = (threshold: number) => {
  const [timer, setTimer] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(formatTimer(threshold));
    }, 1000);

    return () => clearInterval(interval);
  }, [threshold]);

  return timer ?? formatTimer(threshold);
};
