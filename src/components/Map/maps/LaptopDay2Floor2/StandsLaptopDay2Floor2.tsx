import Stand from '../../Laptop/Map/Stand';
import { standsLaptopDay2Floor2Config } from '../stands.config';

const StandsLaptopDay2Floor2 = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      {standsLaptopDay2Floor2Config.map((stand, i) => (
        <div style={{ position: 'absolute', top: stand.top, left: stand.left }} key={i}>
          <Stand
            device="laptop"
            size={stand.standProps.size}
            rotate={stand.standProps.rotate}
            text={stand.standProps.text}
          />
        </div>
      ))}
    </div>
  );
};

export default StandsLaptopDay2Floor2;
