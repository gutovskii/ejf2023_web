import { unbounded } from '@/app/fonts';
import Stage from '../../Laptop/Map/Stage';
import '../LaptopMap.scss';
import StandsLaptopDay2Floor2 from './StandsLaptopDay2Floor2';

const LaptopDay2Floor2: React.FC = () => {
  return (
    <div className="map">
      <div
        style={{
          position: 'absolute',
          top: '-1px',
          left: '-1px',
          height: '500px',
          width: '150px',
          background: 'transparent',
          border: '1px solid #FFF',
          borderRadius: '20px 0 20px 0',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '-1px',
          right: '-0.5px',
          height: '500px',
          width: '150px',
          background: 'transparent',
          border: '1px solid #FFF',
          borderRadius: '0 20px 0 20px',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '83%',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '60px',
          width: '500px',
          background: 'transparent',
          border: '1px solid #FFF',
          borderRadius: '30px',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          height: '100px',
          width: '60px',
          background: '#000',
          border: '1px solid #FFF',
          borderRadius: '20px',
          zIndex: '2',
        }}
      ></div>
      <div
        className={`${unbounded.className}`}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: '-16px',
          top: '83.8%',
          transform: 'rotate(90deg)',
          height: '35px',
          width: '90px',
          background: '#800',
          borderRadius: '0 0 5px 5px',
          zIndex: '1',
        }}
      >
        Кава
      </div>
      <div
        style={{
          position: 'absolute',
          top: '67%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Stage device="laptop" day="secondDay" />
      </div>
      <div>
        <StandsLaptopDay2Floor2 />
      </div>
    </div>
  );
};

export default LaptopDay2Floor2;
