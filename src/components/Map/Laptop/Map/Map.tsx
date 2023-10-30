import { unbounded } from '@/app/fonts';
import { useStore } from '@/components/Partners/store';
import LaptopDay1Floor2 from '../../maps/LaptopDay1Floor2/LaptopDay1Floor2';
import LaptopDay2Floor2 from '../../maps/LaptopDay2Floor2/LaptopDay2Floor2';
import './Map.scss';

const Map: React.FC = () => {
  const [state] = useStore();

  return (
    <div>
      <div style={{ display: 'flex' }} className="map-h2">
        <p className={`${unbounded.className} map-h2-map`}>Карта Ярмарку</p>
      </div>
      {state.day === 1 ? <LaptopDay1Floor2 /> : null}
      {state.day === 2 ? <LaptopDay2Floor2 /> : null}
    </div>
  );
};

export default Map;
