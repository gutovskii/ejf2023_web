import Map from '../Laptop/Map/Map';
import Timetable from '../Laptop/Timetable/Timetable';

const Laptop: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '130px auto 0' }}>
      <Map />
      <Timetable />
    </div>
  );
};

export default Laptop;
