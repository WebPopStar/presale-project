import React, { useEffect, useState } from 'react';
import AnimatedPage from '../components/animated/AnimatedPage';
import FaqSection from '../components/faq/FaqSection';
import Footer from '../components/basic/BasicFooter';
import Navbar from '../components/basic/BasicNavbar';
import ScrollToTop from '../components/other/ScrollToTopButton';
import Head from 'next/head';
import AboutSection from '../components/about/AboutSection';
import { useRouter } from 'next/router';
import DigiCertSeal from '../components/DigiCertSeal';
import Roadmap from '../components/roadmap';
import CarouselImage from "../components/carousel/carousel"
import ButtonAnimation from "../components/buttonAnimation/Button"
import AdminAdrop from '../components/admin/AdminAirdrop'


function Home() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    setIsAdmin(storedIsAdmin === 'true'); // convert string to boolean
  }, []);

  useEffect(() => {
    // alert(isAdmin);
  }, [isAdmin]);

  useEffect(() => {
    window.addEventListener('storage', () => {
      const storedIsAdmin = localStorage.getItem('isAdmin');
      setIsAdmin(storedIsAdmin === 'true'); // convert string to boolean
    });

    return () => {
      window.removeEventListener('storage', () => {
        const storedIsAdmin = localStorage.getItem('isAdmin');
        setIsAdmin(storedIsAdmin === 'true'); // convert string to boolean
      });
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Join the $TMONK Troop!!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tmonk.net/" />
        <meta property="og:title" content="Save.The.Planet!" />
        <meta property="og:description" content="Join the $TMONK Troop!." />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>$TMONK !</title>

      </Head>
      <AnimatedPage>
        <div className='min-w-[374px]'>
          <Navbar activePage='Home' isAdmin={isAdmin} />
          {!isAdmin && (
            <>
              <ButtonAnimation />
              <CarouselImage />
              <DigiCertSeal />
              <Roadmap />
              <FaqSection />
            </>
          )}
          {isAdmin && (
            <>
              <AdminAdrop />
              <AboutSection />
            </>
          )}
          <Footer />
          <ScrollToTop />
        </div>
      </AnimatedPage>
    </>
  );
}

export default Home;