import { unbounded } from '@/app/fonts';
import { useStore } from '@/components/Partners/store';
import { useRef } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';
import { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar';
import { timetableConfig } from '../../Laptop/Timetable/timetable.config';
import './MTimetable.scss';
import MTimetableItem from './MTimetableItem';

const MTimetable: React.FC = () => {
  const [state] = useStore();

  const scrollbar = useRef<BaseScrollbar | null>(null);

  return (
    <div className="mtimetable">
      <h2 className={`${unbounded.className} mtimetable-h2`}>РОЗКЛАД</h2>
      <div
        style={{
          maxHeight: '450px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginRight: '40px',
        }}
      >
        <Scrollbar
          ref={scrollbar}
          plugins={{
            overscroll: {
              effect: 'bounce',
            } as any,
          }}
        >
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
        </Scrollbar>
      </div>
    </div>
  );
};

export default MTimetable;
