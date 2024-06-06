import '@/styles/globals.css'
import '@/styles/fonts.css'
import Store from '@/contexts/Store'
import DefaultLayout from "@/components/layout/DefaultLayout";
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps , router }) {
    
  useEffect(()=>{
    (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll({
          smooth: true,
          multiplier: 0.1,
          lenisOptions: {
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
          }
        });

        return () => {
          locomotiveScroll.destroy();
        };
    })();
  },[])

  return (
    <DefaultLayout>
      <Store>
        <AnimatePresence mode='wait' initial="false" >
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Store>
    </DefaultLayout>
  )
}
