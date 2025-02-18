import { Box, Button, Modal, styled, useTheme } from '@mui/material';
import { ComponentProps, ReactNode } from 'react';
import { PiX } from 'react-icons/pi';

const ModalContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  padding: '16px',
});

const ModalBox = styled(Box)({
  backgroundColor: 'white',
  position: 'relative',
  maxWidth: '480px',
  width: '100%',
  borderRadius: '16px',
});

const CloseButton = ({ sx, ...props }: ComponentProps<typeof Button>) => {
  const { palette } = useTheme();

  return (
    <Button
      variant='outlined'
      size='small'
      sx={{
        position: 'absolute',
        top: '24px',
        right: '24px',
        minWidth: '36px',
        height: '36px',
        p: 0,
        borderRadius: '50%',
        opacity: props.disabled ? 0.5 : 1,
        ...sx,
      }}
      {...props}
    >
      <PiX color={palette.grey[600]} />
    </Button>
  );
};

export const CustomModal = ({
  isOpen,
  onClose,
  center,
  closeButton,
  closeButtonProps,
  children,
  ...props
}: {
  isOpen: boolean;
  onClose: () => void;
  center?: true;
  closeButton?: true;
  closeButtonProps?: ComponentProps<typeof Button>;
  children: ReactNode;
} & ComponentProps<typeof ModalBox>) => {
  return (
    <Modal open={isOpen} onClose={(_, reason) => reason !== 'backdropClick' && reason !== 'escapeKeyDown' && onClose()}>
      <ModalContainer alignItems={center ? 'center' : 'flex-start'}>
        <ModalBox mt={center ? 0 : { xs: 0, md: '64px', lg: '128px' }} {...props}>
          {closeButton && <CloseButton onClick={onClose} {...closeButtonProps} />}
          {children}
        </ModalBox>
      </ModalContainer>
    </Modal>
  );
};
