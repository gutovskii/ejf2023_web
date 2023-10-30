import { unbounded } from '@/app/fonts';
import { useEffect, useState } from 'react';
import { timetableConfig } from '../Timetable/timetable.config';

interface StageProps {
  device: 'laptop' | 'mobile';
  day: 'firstDay' | 'secondDay';
}

const Stage: React.FC<StageProps> = ({ device, day }) => {
  let [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (day === 'firstDay') {
      const stageFirstDay = timetableConfig.firstDay.secondFloor.filter((e) => e?.isOnStage);
      setIsActive(stageFirstDay.some((e) => now > e.startDate && now < e.endDate));
    } else if (day === 'secondDay') {
      const stageSecondDay = timetableConfig.secondDay.secondFloor.filter((e) => e?.isOnStage);
      setIsActive(stageSecondDay.some((e) => now > e.startDate && now < e.endDate));
    }
  }, [day]);
  return (
    <div
      className={`${unbounded.className}`}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        border: isActive ? '4px solid #9D00FF' : '',
        background: '#FF8900',
        color: '#000',
        fontSize: device === 'laptop' ? '24px' : '12px',
        fontWeight: '700',
        textShadow: isActive ? '0px 0px 15px #E8D5E2' : '',
        height: device === 'laptop' ? '65px' : '35px',
        width: device === 'laptop' ? '135px' : '80px',
      }}
    >
      СЦЕНА
    </div>
  );
};

export default Stage;
