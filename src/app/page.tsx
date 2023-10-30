import Hero from '@/components/Hero';

import AboutEjf from '@/components/AboutEjf';
import OurPhotos from '@/components/OurPhotos';
import Speakers from '@/components/Speakers/Speakers';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutEjf />
      <Speakers />
      <OurPhotos />
    </>
  );
}
