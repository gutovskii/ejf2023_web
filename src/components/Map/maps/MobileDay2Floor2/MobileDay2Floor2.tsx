import { unbounded } from '@/app/fonts';
import Stage from '../../Laptop/Map/Stage';
import '../LaptopMap.scss';
import StandsMobileDay2Floor2 from './StandsMobileDay2Floor2';

const MobileDay2Floor2: React.FC = () => {
  return (
    <div className="mmap">
      <div
        style={{
          position: 'absolute',
          top: '-0.5px',
          left: '-0.5px',
          height: '170px',
          width: '55px',
          background: 'transparent',
          border: '1px solid #FFF',
          borderRadius: '15px 0 15px 0',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '-0.5px',
          right: '-1px',
          height: '170px',
          width: '55px',
          background: 'transparent',
          border: '1px solid #FFF',
          borderRadius: '0 15px 0 15px',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '85%',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '30px',
          width: '170px',
          background: 'transparent',
          border: '1px solid #FFF',
          borderRadius: '15px',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: '18px',
          right: '10px',
          height: '61.5px',
          width: '30px',
          background: '#000',
          border: '1px solid #FFF',
          borderRadius: '15px',
          zIndex: 2,
        }}
      ></div>
      <div
        className={`${unbounded.className}`}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          fontSize: '8px',
          right: '-8px',
          top: '73.5%',
          transform: 'rotate(90deg)',
          height: '16px',
          width: '55px',
          background: '#800',
          borderRadius: '0 0 5px 5px',
          zIndex: 1,
        }}
      >
        Кава
      </div>
      <div
        style={{
          position: 'absolute',
          top: '68%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Stage device="mobile" day="firstDay" />
      </div>
      <div>
        <StandsMobileDay2Floor2 />
      </div>
    </div>
  );
};

export default MobileDay2Floor2;
