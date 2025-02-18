import { CustomModal } from '@components/custom-modal';
import { Stack, Typography } from '@mui/material';
import { useShowSecondModal } from 'hooks/useShowSecondModal';

export interface SecondModalProps {
  someProp: any;
}

export const SecondModal = ({ someProp }: SecondModalProps) => {
  const { closeModal } = useShowSecondModal();

  return (
    <CustomModal isOpen onClose={closeModal} closeButton center>
      <Stack gap='24px' padding='24px'>
        <Typography variant='h1'>Second Modal</Typography>
        <Typography variant='body1'>Awesome content with someProp: {someProp}</Typography>
      </Stack>
    </CustomModal>
  );
};
