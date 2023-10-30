import { useStore } from '@/components/Partners/store';
import MobileDay1Floor2 from '../../maps/MobileDay1Floor2/MobileDay1Floor2';
import MobileDay2Floor2 from '../../maps/MobileDay2Floor2/MobileDay2Floor2';

const MMap: React.FC = () => {
  const [state] = useStore();
  return (
    <div style={{ margin: '0 auto' }}>
      {state.day === 1 ? <MobileDay1Floor2 /> : null}
      {state.day === 2 ? <MobileDay2Floor2 /> : null}
    </div>
  );
};

export default MMap;
