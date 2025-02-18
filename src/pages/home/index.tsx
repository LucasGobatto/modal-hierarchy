import { FIRST_MODAL_SHOW_THRESHOLD, SECOND_MODAL_SHOW_THRESHOLD, THIRD_MODAL_SHOW_THRESHOLD } from '@hooks/constants';
import { useShowFirstModal } from '@hooks/useShowFirstModal';
import { useShowSecondModal } from '@hooks/useShowSecondModal';
import { useShowThirdModal } from '@hooks/useShowThirdModal';
import { useTimer } from '@hooks/useTimer';
import { Box, Typography } from '@mui/material';

export const HomePage = () => {
  useShowFirstModal();
  useShowSecondModal();
  useShowThirdModal();

  const firstModalTimer = useTimer(FIRST_MODAL_SHOW_THRESHOLD);
  const secondModalTimer = useTimer(SECOND_MODAL_SHOW_THRESHOLD);
  const thirdModalTimer = useTimer(THIRD_MODAL_SHOW_THRESHOLD);

  return (
    <Box>
      <Typography variant='h1'>Next Show Times</Typography>
      <Box height='16px' />
      <Typography variant='body1'>First Modal: {firstModalTimer}</Typography>
      <Typography variant='body1'>Second Modal: {secondModalTimer}</Typography>
      <Typography variant='body1'>Third Modal: {thirdModalTimer}</Typography>
    </Box>
  );
};
