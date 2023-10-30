import { useStore } from '@/components/Partners/store';
import DayButton from '../Header/DayButton';
import './Timetable.scss';
import TimetableItem from './TimetableItem';
import { timetableConfig } from './timetable.config';

const Timetable: React.FC = () => {
  const [state] = useStore();

  return (
    <div className="timetable">
      <div style={{ display: 'flex' }} className="timetable-daybtns">
        {[1, 2].map((dayNum, i) => (
          <DayButton dayNum={dayNum} key={i} />
        ))}
      </div>
      <div className="timetable-items">
        {state.day === 1
          ? timetableConfig.firstDay.secondFloor.map((event, i) => (
              <TimetableItem config={event} key={i} />
            ))
          : null}
        {state.day === 2
          ? timetableConfig.secondDay.secondFloor.map((event, i) => (
              <TimetableItem config={event} key={i} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Timetable;
