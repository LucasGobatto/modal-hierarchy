import { CustomModal } from '@components/custom-modal';
import { Stack, Typography } from '@mui/material';
import { useShowThirdModal } from 'hooks/useShowThirdModal';
import { useState } from 'react';

export const ThirdModal = () => {
  const { closeModal } = useShowThirdModal();

  // first must be set to true
  const [isFirstStepOpen, setIsFirstStepOpen] = useState(true);
  const [isSecondStepOpen, setIsSecondStepOpen] = useState(false);
  const [isThirdStepOpen, setIsThirdStepOpen] = useState(false);

  const handleCloseFirstStep = () => {
    setIsFirstStepOpen(false);
    setIsSecondStepOpen(true);
  };

  const handleCloseSecondStep = () => {
    setIsSecondStepOpen(false);
    setIsThirdStepOpen(true);
  };

  const handleCloseThirdStep = () => {
    setIsThirdStepOpen(false);
    closeModal();
  };

  return (
    <>
      <CustomModal isOpen={isFirstStepOpen} onClose={handleCloseFirstStep} closeButton center>
        <Stack gap='24px' padding='24px'>
          <Typography variant='h1'>Third Modal - 1/3 step</Typography>
          <Typography variant='body1'>First step's awesome content</Typography>
        </Stack>
      </CustomModal>
      <CustomModal isOpen={isSecondStepOpen} onClose={handleCloseSecondStep} closeButton center>
        <Stack gap='24px' padding='24px'>
          <Typography variant='h1'>Third Modal - 2/3 step</Typography>
          <Typography variant='body1'>Second step's awesome content</Typography>
        </Stack>
      </CustomModal>

      <CustomModal isOpen={isThirdStepOpen} onClose={handleCloseThirdStep} closeButton center>
        <Stack gap='24px' padding='24px'>
          <Typography variant='h1'>Third Modal - 3/3 step</Typography>
          <Typography variant='body1'>Third step's awesome content</Typography>
        </Stack>
      </CustomModal>
    </>
  );
};
