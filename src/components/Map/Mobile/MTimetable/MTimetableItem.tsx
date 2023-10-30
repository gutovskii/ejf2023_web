import { manrope, unbounded } from '@/app/fonts';
import Image from 'next/image';
import { TimetableItemConfig } from '../../Laptop/Timetable/timetable.config';
import './MTimetableItem.scss';

interface MTimetableItemProps {
  config: TimetableItemConfig;
}

const MTimetableItem: React.FC<MTimetableItemProps> = ({ config }) => {
  const currentDate = new Date();

  return (
    <div className="mtimetable-item">
      <div className={`${manrope.className} mtimetable-item-time`}>
        <div
          className="mtimetable-item-time-startdate"
          style={
            currentDate > config.startDate && currentDate < config.endDate
              ? {
                  textShadow: '0px 0px 15px #E8D5E2',
                  opacity: 1,
                }
              : {}
          }
        >
          {config.startDate.getHours()}:{config.startDate.getMinutes()}
        </div>
        <div
          className="mtimetable-item-time-enddate"
          style={
            currentDate > config.startDate && currentDate < config.endDate
              ? {
                  textShadow: '0px 0px 15px #E8D5E2',
                  opacity: 1,
                }
              : {}
          }
        >
          {config.endDate.getHours()}:{config.endDate.getMinutes()}
        </div>
      </div>
      <div className="mtimetable-item-info">
        <p
          className={`${unbounded.className} mtimetable-item-info-name`}
          style={
            currentDate > config.startDate && currentDate < config.endDate
              ? {
                  textShadow: '0px 0px 15px #E8D5E2',
                  opacity: 1,
                }
              : {}
          }
        >
          {config.eventName}
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
            <Image src={'../../icons/place.svg'} height={15} width={15} alt="place" />
          </div>
          <p
            style={
              currentDate > config.startDate && currentDate < config.endDate ? { opacity: 1 } : {}
            }
            className={`${manrope.className} timetable-item-info-desc`}
          >
            {config.place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MTimetableItem;
