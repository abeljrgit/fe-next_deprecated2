import { Inter } from 'next/font/google';
import { Seo, Footer, Header } from '../../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Seo />
      <Header />
      <Footer />
    </>
  );
}
