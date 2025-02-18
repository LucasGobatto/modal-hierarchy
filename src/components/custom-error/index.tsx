import { Box, Typography } from '@mui/material';

export const CustomError = ({ error }: { error: Error }) => {
  return (
    <Box>
      <Typography variant='body1'>{error.message}</Typography>
    </Box>
  );
};
