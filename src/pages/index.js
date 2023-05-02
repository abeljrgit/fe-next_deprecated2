import { Inter } from 'next/font/google';
import { Seo, Footer, Header, CounterA, CounterB } from '../../components';
import Image from 'next/image';
import { Divider, Typography } from '@mui/material';
import { Icons, Images } from '../../assets';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Seo />
      <Header />
      <Typography>This is home</Typography>
      <Image src={Images.nextImage} alt="Next Logo" />
      <Image src={Icons.reactLogo} alt="React Logo" />
      <Divider />
      <CounterA />
      <Divider />
      <CounterB />
      <Footer />
    </>
  );
}
