import { unbounded } from '@/app/fonts';
import Stage from '../../Laptop/Map/Stage';
import '../LaptopMap.scss';
import StandsLaptopDay1Floor2 from './StandsLaptopDay1Floor2';

const LaptopDay1Floor2: React.FC = () => {
  return (
    <div className="map">
      <div
        style={{
          position: 'absolute',
          top: '-1px',
          left: '-1px',
          height: '450px',
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
          right: '-1px',
          height: '450px',
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
          top: '77%',
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
          top: '65%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Stage device="laptop" day="firstDay" />
      </div>
      <div>
        <StandsLaptopDay1Floor2 />
      </div>
    </div>
  );
};

export default LaptopDay1Floor2;
