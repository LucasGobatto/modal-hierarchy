import { CustomModal } from '@components/custom-modal';
import { Stack, Typography } from '@mui/material';
import { useShowFirstModal } from 'hooks/useShowFirstModal';

export const FirstModal = () => {
  const { closeModal } = useShowFirstModal();

  return (
    <CustomModal isOpen onClose={closeModal} closeButton center>
      <Stack gap='24px' padding='24px'>
        <Typography variant='h1'>First Modal</Typography>
        <Typography variant='body1'>Awesome content</Typography>
      </Stack>
    </CustomModal>
  );
};
