import { manrope, unbounded } from '@/app/fonts';
import Image from 'next/image';
import './TimetableItem.scss';
import { TimetableItemConfig } from './timetable.config';

interface TimetableItemProps {
  config: TimetableItemConfig;
}

const TimetableItem: React.FC<TimetableItemProps> = ({ config }) => {
  const currentDate = new Date();

  return (
    <div className="timetable-item">
      <div className={`${manrope.className} timetable-item-time`}>
        <div
          className="timetable-item-time-startdate"
          style={
            currentDate > config.startDate && currentDate < config.endDate
              ? {
                  textShadow: '0px 0px 15px #E8D5E2',
                  opacity: 1,
                }
              : {}
          }
        >
          {(config.startDate.getHours() < 10 ? '0' : '') + config.startDate.getHours()}:
          {(config.startDate.getMinutes() < 10 ? '0' : '') + config.startDate.getMinutes()}
        </div>
        <div
          className="timetable-item-time-enddate"
          style={
            currentDate > config.startDate && currentDate < config.endDate
              ? {
                  textShadow: '0px 0px 15px #E8D5E2',
                  opacity: 1,
                }
              : {}
          }
        >
          {(config.endDate.getHours() < 10 ? '0' : '') + config.endDate.getHours()}:
          {(config.endDate.getMinutes() < 10 ? '0' : '') + config.endDate.getMinutes()}
        </div>
      </div>
      <div className="timetable-item-info">
        <p
          className={`${unbounded.className} timetable-item-info-name`}
          style={
            currentDate > config.startDate && currentDate < config.endDate
              ? {
                  textShadow: '0px 0px 15px #E8D5E2',
                  opacity: 1,
                }
              : {}
          }
        >
          {config.eventName} {config.isOnStage ? '(Сцена)' : ''}
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
          }}
        >
          <p className={`${manrope.className} timetable-item-info-desc`}>
            {config.eventDescription}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
          }}
        >
          <div>
            <Image src={'../../icons/place.svg'} height={20} width={20} alt="place" />
          </div>
          <p className={`${manrope.className} timetable-item-info-desc`}>{config.place}</p>
        </div>
      </div>
    </div>
  );
};

export default TimetableItem;
