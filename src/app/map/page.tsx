'use client';
import Laptop from '@/components/Map/Gadgets/Laptop';
import Mobile from '@/components/Map/Gadgets/Mobile';
import useMediaQuery from '@/utils/useMediaQuery';

export default function MapPage() {
  const { matches } = useMediaQuery('(min-width: 1025px)');

  return (
    <div style={!matches ? { marginTop: '130px' } : {}}>{matches ? <Laptop /> : <Mobile />}</div>
  );
}
