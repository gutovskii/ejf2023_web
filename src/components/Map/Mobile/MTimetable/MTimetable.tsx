import { unbounded } from '@/app/fonts';
import { useStore } from '@/components/Partners/store';
import { timetableConfig } from '../../Laptop/Timetable/timetable.config';
import './MTimetable.scss';
import MTimetableItem from './MTimetableItem';

const MTimetable: React.FC = () => {
  const [state] = useStore();

  return (
    <div className="mtimetable">
      <h2 className={`${unbounded.className} mtimetable-h2`}>РОЗКЛАД</h2>
      <div className="mtimetable-items">
        {state.day === 1
          ? timetableConfig.firstDay.secondFloor.map((event, i) => (
              <MTimetableItem config={event} key={i} />
            ))
          : null}
        {state.day === 2
          ? timetableConfig.secondDay.secondFloor.map((event, i) => (
              <MTimetableItem config={event} key={i} />
            ))
          : null}
      </div>
    </div>
  );
};

export default MTimetable;
