import { DateTime } from 'luxon';

export const calculateNextShowTime = (threshold: number) => {
  const now = DateTime.now();
  const currentMinutes = now.minute;
  const currentSeconds = now.second;
  const currentMillis = now.millisecond;

  // Calculate total milliseconds until next threshold
  const nextThreshold = Math.ceil(currentMinutes / threshold) * threshold;
  const minutesRemaining = nextThreshold - currentMinutes;
  const millisecondsRemaining = minutesRemaining * 60 * 1000 - currentSeconds * 1000 - currentMillis;

  if (minutesRemaining === 0) {
    return threshold * 60 * 1000 - currentSeconds * 1000 - currentMillis;
  }

  return millisecondsRemaining;
};
