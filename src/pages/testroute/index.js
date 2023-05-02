import { Box, Typography } from '@mui/material';
import { Icons, Images } from '../../../assets';
import Image from 'next/image';

const TestRoute = () => {
  return (
    <Box>
      <Typography>This is Test Route</Typography>
      <Image src={Icons.reactLogo} />
      <Image src={Images.nextImage} />
    </Box>
  );
};

export default TestRoute;
